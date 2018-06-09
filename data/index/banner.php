<?php
require_once("../init.php");
$sql = "SELECT img,did FROM banner";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,1);
echo json_encode($rows);