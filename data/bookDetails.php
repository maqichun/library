<?php
require_once("init.php");
@$did = $_REQUEST["did"];
$reg = "/^[0-9]+$/";
$rs = preg_match($reg,$did);
if(!$rs){
    die("编号不正确");
}
$sql = "SELECT * FROM book_details WHERE did=$did";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,1);
echo json_encode($rows);