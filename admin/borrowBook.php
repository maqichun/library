<?php
@ $b_uid = $_REQUEST["b_uid"];
if($b_uid == "" && $b_uid == null) {
	die("用户编号不能为空");
}
@ $b_uname = $_REQUEST["b_uname"];
@ $b_book = $_REQUEST["b_book"];
@ $b_date = $_REQUEST["b_date"];
require("../init.php");
$sql = "INSERT INTO borrowbook VALUES(NULL,'$b_uid','$b_uname','$b_book','$b_date')";
$result = mysqli_query($conn,$sql);
if($result === false) {
	echo "sql语句错误";
}else {
	echo "借阅成功";
}
?>