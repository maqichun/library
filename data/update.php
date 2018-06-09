<?php
@$uid = $_REQUEST["uid"];
@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upwd"];
@$email = $_REQUEST["email"];
@$phone = $_REQUEST["mobile"];
@$age = $_REQUEST["age"];
@$sex = $_REQUEST["sex"];
require("init.php");
$sql = "UPDATE users SET uname='$uname',upwd='$upwd',sex='$sex',age='$age',phone='$phone',
email='$email' WHERE uid='$uid'";
$result = mysqli_query($conn,$sql);
if($result === false) {
	echo "sql语句错误";
}else {
	echo "1";
}
?>