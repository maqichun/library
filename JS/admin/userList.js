$(function(){
	$.ajax({
		type:"get",
		url:"../admin/userList.php",
		dataType:"json",
		success:function(data){
			var tbody=$("#myBody");
			var html="";
			$.each(data,function(i,elem){
				var { uid,uname,upwd,sex,age,phone,email }=elem;
				sex = (sex==1?"男":"女");
				html+=`<tr>
					<td>${uid}</td>
					<td>${uname}</td>
					<td>${upwd}</td>
					<td>${age}</td>
					<td>${sex}</td>
					<td>${phone}</td>
					<td>${email}</td>
				</tr>`;
			});
			tbody.html(html);
		},
		error:function(){
			console.log("连接错误");
		}
	})
})