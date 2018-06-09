$(function(){
	$.ajax({
		type:"get",
		url:"../../data/users/islogin.php",
		dataType:"json",
		success:function(data){
			if(data.ok==0){
				location.href="login.html?back="+location.href;
			}else{
				
			}
		},
		error:function(){
			console.log("连接错误");
		}
	})
})