<?php
$a_uname = $_REQUEST["a_uname"];
$a_pwd = $_REQUEST["a_pwd"];
require("../init.php");
$sql = "SELECT * FROM admin WHERE a_uname='$a_uname' && a_pwd='$a_pwd'";
$result = mysqli_query($conn,$sql);
if($result === false) {
	echo "sql语句错误";
}else {
	$row = mysqli_fetch_row($result);
	if($row === null){
		echo "用户名或密码不正确";
	}else {
		header("Location:admin.html");
	}
}
?>