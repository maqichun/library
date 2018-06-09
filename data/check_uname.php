<?php
$uname = $_REQUEST["uname"];
if($uname == "" && $uname == null){
	die("用户名不能为空");
}
require("init.php");
$sql = "SELECT * FROM users WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row == NULL) {
	echo "true";#表示用户名可用
}else {
	echo "false";#表示用户名已存在
}
?>