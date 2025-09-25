echo "--------------GET--------------"
curl -X GET http://localhost:3000/books/3

echo "\n--------------POST--------------"
curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "New Book", "author": "Author Name"}'

echo "\n--------------PUT--------------"
curl -X PUT http://localhost:3000/books/1 -H "Content-Type: application/json" -d '{"title": "Updated Book", "author": "Updated Author"}'

echo "\n--------------DELETE--------------"
curl -X DELETE http://localhost:3000/books/3
