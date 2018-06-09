//引入头部
$(function(){
	$.ajax({
		type:"get",
		url:"head.html",
		success:function(html){
			//首先在引入头部时，直接将css一起导入
			var link=document.createElement("link");
			link.rel="stylesheet";
			link.href="css/head.css";
			document.head.appendChild(link);
			//将头部的代码片段放入div中
			document.getElementById("header").innerHTML=html;
			//登录跳转
			$("#btnLogin").click(function(e){
				e.preventDefault();
				location.href="login.html?back="+location.href;
			});
			//登录状态
			$.ajax({
				type:"get",
				url:"data/users/islogin.php",
				dataType:"json",
				success:function(data){
					var {uname}=data;
					if(data.ok==0){
						$("#btnLogin").parent().show()
							.next().hide();
					}else{
						$("#btnLogin").parent().hide()
							.next().show();
						$("#welUname").html(`欢迎 ${uname}`)
					}
				}
			});
			//注销
			$("#btnSionout").click(function(e){
				e.preventDefault();
				$.ajax({
					type:"get",
					url:"data/users/signout.php",
					success:function(){
						location.reload(true);
					}
				})
			})
		}
	});
});