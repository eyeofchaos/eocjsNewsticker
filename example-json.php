<?php
header('Content-type: application/json; charset=utf-8');
echo '{"1": "This text will be updated every 30 seconds on-the-fly!", "2": "Last update: ' . date('Y-m-d h:i:s a') . '"}';
?>
