#!/bin/bash
# @autor: Sergio Ramirez Moron
# @comment: ~
# @description: Script que lanza los comandos de CURL para GET, POST, PUT, PATCH y DELETE

echo "------> GET <------"
curl -k https://jsonplaceholder.typicode.com/posts/1
echo "\n"

echo "------> POST <------"
curl -kX POST https://jsonplaceholder.typicode.com/posts \
-H "Content-Type: application/json" \
-d '{"titulo": "ole", "cuerpo": "cachiporra", "id": 1}'
echo "\n"

echo "------> PUT <------"
curl -kX PUT https://jsonplaceholder.typicode.com/posts/1 \
-H "Content-Type: application/json" \
-d '{"id":1, "titulo": "aaa", "cuerpo": "cachiporra"}'
echo "\n"

echo "------> PATCH <------"
curl -kX PATCH https://jsonplaceholder.typicode.com/posts/1 \
-H "Content-Type: application/json" \
-d '{"titulo": "aaa actualizado"}'
echo "\n"

echo "------> DELETE <------"
curl -kX DELETE https://jsonplaceholder.typicode.com/posts/1
echo "\n"

echo "TESTS FINALIZADOS"

