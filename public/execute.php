<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Если это preflight-запрос (OPTIONS), возвращаем 200
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$code = $data['code'];

try {
    ob_start();
    eval($code);    $output = ob_get_clean();
    echo json_encode(['status' => 'success', 'output' => $output]);
} catch (Throwable $e) {
    echo json_encode(['status' => 'error', 'error' => $e->getMessage()]);
}
