<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$htmlFiles = glob("../../*.html"); // взять файлы
$response = [];
foreach($htmlFiles as $file) {
    array_push($response, basename($file));
}

echo json_encode($response)
//echo var_dump($htmlFiles) //var_dump - оборачивание в массив
?>
