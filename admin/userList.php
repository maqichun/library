<?php
require("../init.php");
$sql = "SELECT * FROM users";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,1);
$str = json_encode($rows);
echo $str;
?>