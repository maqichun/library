<?php
require_once("../init.php");
$sql = "SELECT did,bname,athor,img FROM books";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,1);
echo json_encode($rows);