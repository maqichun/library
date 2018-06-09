<?php
@ $bkid = $_REQUEST["bkid"];
if($bkid == "" && $bkid == null){
	die("书籍编号不能为空");
}
require("../init.php");
$sql = "DELETE FROM books WHERE bkid='$bkid'";
$result = mysqli_query($conn,$sql);
if($result === false) {
	echo "sql错误";
}else {
	echo "删除成功!";
}
?>