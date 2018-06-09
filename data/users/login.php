<?php
require("../init.php");
$uname = $_REQUEST["uname"];
if($uname == "" && $uname == null) {
	die("用户名不能为空");
}
$upwd = $_REQUEST["upwd"];
if($uname == "" && $uname == null) {
	die("密码不能为空");
}
$sql = "SELECT * FROM users WHERE uname='$uname' and upwd=$upwd";
$result = mysqli_query($conn,$sql);
if($result === false) {
	echo "sql语句错误";
}else {
	$row = mysqli_fetch_row($result);
	if($row == null) {
		echo "0";//"登录失败"
	}else {
		//header("Location:index.html");
		session_start();
		$_SESSION["uid"]=$row[0];
		echo "1";//登录成功
	}
}
?>