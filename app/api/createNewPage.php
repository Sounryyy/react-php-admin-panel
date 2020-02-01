<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$newFile = "../../" . $_POST["name"] . ".html";

if(file_exists($newFile)) {
    header("HTTP/1.0 400 Bad Request");
    } else {
    fopen($newFile, "w");
}


