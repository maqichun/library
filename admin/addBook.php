<?php
@ $bk_name = $_REQUEST["bk_name"];
if($bk_name == null && $bk_name == "") {
	die("书名不能为空");
}
@ $athor = $_REQUEST["athor"];	
@ $kind_id = $_REQUEST["kind_id"];	
@ $press = $_REQUEST["press"];	
require("../init.php");
$sql = "INSERT INTO books VALUES(NULL,'$bk_name','$athor','$kind_id','$press')";
$result = mysqli_query($conn,$sql);
if($result == null) {
	echo "添加失败";
}else {
	echo "添加成功!";
}
?>