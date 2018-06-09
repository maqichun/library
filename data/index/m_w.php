<?php
require_once("../init.php");
$sql = "SELECT did,dname,img,dpress FROM book_details WHERE sex='man'";
$result = mysqli_query($conn,$sql);
$man = mysqli_fetch_all($result,1);
$sql = "SELECT did,dname,img,dpress FROM book_details WHERE sex='woman'";
$result = mysqli_query($conn,$sql);
$woman = mysqli_fetch_all($result,1);
$output = ["m"=>$man,"w"=>$woman];
echo json_encode($output);
