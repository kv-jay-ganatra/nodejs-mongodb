# nodejs-mongodb

API List
Please note the following important instruction:
Kindly create a .env file and include the keys MongoDBConnection and PORT along with their corresponding values.

Add a Book:
Add a new book to the collection

API URL: http://localhost:3000/api/books/add
Method: POST
Request Body:
<pre>
{
    "title": "Book Title",
    "author": "Book Author",
    "genre": "Book Genre"
}
</pre>
Response:
<pre>
{
    "book": {
        "title": "Book Title",
        "author": "Book Author",
        "genre": "Book Genre",
        "_id": "64fec2fbb40391432251d152",
        "__v": 0
    },
    "success": true,
    "message": "Book Added Successfully"
}    
</pre>
List Books:
Display a list of books in the collection with pagination. Users can specify a page number.

API URL: http://localhost:3000/api/books
Method: GET
Request Parameter: page = Number, perPage = Number, author = name, genre = name
Response:
{
    "books": [
        {
            "_id": "64f8ec9535db49a6e5663e9f",
            "title": "Elephant Boy",
            "author": "Faina Cornforth",
            "genre": "Adventure|Drama"
        }
    ],
    "currentPage": "1",
    "perPage": "10",
    "totalPages": 113,
    "totalBooks": 1123
}
Find Books by Author:
Allow users to search for books by a specific author. This API should be optimized for performance, especially when dealing with a large amount of data.

Note: To Improve query performance we need to add index on the author column.

API URL: http://localhost:3000/api/books
Method: GET
Parameters: author = Name
Response:
{
    "books": [
    {
        "_id": "64f8eb9eb90c36cf2df034ed",
        "title": "Book Title",
        "author": "Book Author",
        "genre": "Book Genre",
        "__v": 0
    }
    ],
    "currentPage": 1,
    "perPage": 10,
    "totalPages": 1,
    "totalBooks": 1
}    
Update Book Information:
Update the information of an existing book (title, author, genre).

API URL: http://localhost:3000/api/books/[:bookId]
Method: PUT
Parameter: id = bookId, title = Title, author = Author, genre = Genre
Response:
{
    "book": {
        "_id": "64f8eb9eb90c36cf2df034ed",
        "title": "new title",
        "author": "new author",
        "genre": "new book genre",
        "__v": 0
    },
    "status": true,
    "message": "Book Updated Successfully"
}    
Delete a Book:
Remove a book from the collection.

API URL: http://localhost:3000/api/books/[:bookId]
Method: DELETE
Parameters: id = bookId
View Activity Logs:
Create a REST API endpoint that allows users to view activity logs. Each log entry should include a timestamp, IP address, action performed, and any relevant book information.

API URL: http://localhost:3000/api/logs
Method: GET
Parameters: page = Number, perPage = Number
Response:
{
    "logs": [
        {
            "log": {
                "_id": "64f90c1381675d76fd72eb4c",
                "timestamp": "2023-09-11T23:32:35.756Z",
                "ipAddress": "127.0.0.1",
                "action": "Book Added",
                "bookInfo": "64f90c1381675d76fd72eb4a",
                "__v": 0
            },
            "book": {
                "_id": "64f90c1381675d76fd72eb4a",
                "title": "Book Title",
                "author": "Book Author",
                "genre": "Book Genre",
                "__v": 0
            }
        }
    ],
    "currentPage": "1",
    "perPage": 10,
    "totalPages": 10,
    "totalLogs": 91
    }
