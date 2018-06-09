/*手机验证*/
$.validator.addMethod(
	"mobile",
	function(val){
	if(val==="")
		return true;
	else
		return /^(\+86|0086)?\s*1[3-8]\d{9}$/.test(val);
	},
	"手机号格式不正确!"
);
/*验证*/
$("#register").validate({
		submitHandler:function(form){ //onsubmit
			$.ajax({
				type:"post",
				url:"data/register.php",
				data:$(form).serialize(),
				success:function(data){
							if(data==1){
								alert("注册成功!");
							}else{
								alert("信息错误");
							}
						},
				error:function(){
						console.log("连接错误");
						}
			})
		},
		rules:{
			uname:{
				required:true,
				minlength:2,
				maxlength:12,
				remote:"data/check_uname.php"
			},
			upwd:{
				required:true,
				minlength:6,
				maxlength:10,
				digits:true
			},
			rpwd:{
				equalTo:"#upwd"
			},
			email:{
				required:true,
				email:true,
			},
			mobile:"mobile",
			age:{
				min:12,
				max:60,
				digits:true
			}
		},
		messages:{
			uname:{
				required:"用户名不能为空!",
				remote:"用户名已被占用!"
			},
			upwd:{
				required:"密码不能为空!"
			},
			rpwd:{
				equalTo:"两次密码输入不一致!"
			},
			email:{
				required:"邮箱不能为空!"
			}
		}
})