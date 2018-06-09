$(function(){
	$.ajax({
		type:"get",
		url:"../admin/booksList.php",
		dataType:"json",
		success:function(data){
			var tBody=$("#myBody");
			var html="";
			//遍历data，把数据动态添加到tbody中
			$.each(data,function(i,elem){
				var { bkid, bk_name, athor, kind_id, press }=elem;
				switch (kind_id)
				{
					case "1":
						kind_id = "文学类";
						break;
					case "2":
						kind_id = "历史类";
						break;
					case "3":
						kind_id = "小说类";
						break;
					case "4":
						kind_id = "散文类";
						break;
					case "5":
						kind_id = "诗歌类";
						break;
					case "6":
						kind_id = "言情类";
						break;
					default:
						console.log("雅思啦");
				}
				html+=`<tr>
					<td data-bkid=${bkid}>${bkid}</td>
					<td>${bk_name}</td>
					<td>${athor}</td>
					<td>${kind_id}</td>
					<td>${press}</td>
					<td>
						<a class="delete" href="#">删除</a>
					</td>
				</tr>`;
			});
			tBody.html(html);
			//删除操作
			tBody.on("click",".delete",function(e){
				e.preventDefault();
				if(confirm("是否删除")){
					var $a=$(this);
					var bkid=$a.parent().parent().children(":first").attr("data-bkid");
					$.ajax({
						type:"get",
						url:"../admin/deleteBook.php",
						data:{bkid},
						success:function(data){
							alert(data);
							location.reload(true);
						},
						error:function(){
							console.log("连接错误");
						}
					})
				}
			});
		},
		error:function(){
			console.log("连接失败");
		}
	})
})