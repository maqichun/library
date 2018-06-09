<?php
@ $uname = $_REQUEST["uname"];
if($uname == "" && $uname == null){
	die("用户名不能为空");
}
@ $upwd = $_REQUEST["upwd"];
if($upwd == "" && $upwd == null){
	die("密码不能为空");
}
@ $sex = $_REQUEST["sex"];
@ $age = $_REQUEST["age"];
@ $phone = $_REQUEST["mobile"];
@ $email = $_REQUEST["email"];
require("init.php");
$sql = "INSERT INTO users											VALUES(NULL,'$uname','$upwd','$sex','$age','$phone','$email')";
$result = mysqli_query($conn,$sql);
if($result === true) {
#把用户名设为唯一
	echo "1";
}else{
	echo "0";
}
?>