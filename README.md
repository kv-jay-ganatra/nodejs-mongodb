# nodejs-mongodb

<div class="intro">
    <h1>API List</h1>
    <strong> Please note the following important instruction: </strong>
    <p>Kindly create a .env file and include the keys MongoDBConnection,AllowOrigin and PORT along with their corresponding values.    </p>
    <ol>
        <li><strong>Add a Book:</strong>
            <p>Add a new book to the collection</p>
            <ul>
                <li>API URL: http://localhost:3000/api/books/add</li>
                <li>Method: POST</li>
                <li>Request Body: 
<pre>
{
    "title": "Book Title",
    "author": "Book Author",
    "genre": "Book Genre"
}
</pre>
                        <li>Response: 
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
            </li>
            </ul>
        </li>
        <li><strong>List Books:</strong>
            <p>Display a list of books in the collection with pagination. Users can specify a page number.</p>
            <ul>
                <li>API URL: <a href="http://localhost:3000/api/books/?page=1&perPage=2" target="_blank">http://localhost:3000/api/books</a></li>
                <li>Method: GET</li>
                <li>Request Parameter: page = Number, perPage = Number, author = name, genre = name</li>
                <li>Response: 
<pre>
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
</pre>
                </li>
            </ul>
        </li>
        <li><strong>Find Books by Author:</strong>
            <p>Allow users to search for books by a specific author. This API should be optimized for performance, especially when dealing with a large amount of data.</p>
            <p>Note: To Improve query performance we need to add index on the author column.</p>
            <ul>
                <li>API URL: <a href="http://localhost:3000/api/books/?author=Test" target="_blank">http://localhost:3000/api/books</a></li>
                <li>Method: GET</li>
                <li>Parameters: author = Name</li>
                <li>Response: 
<pre>
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
</pre>
                </li>
            </ul>
        </li>
        <li><strong>Update Book Information:</strong>
            <p>Update the information of an existing book (title, author, genre).</p>
            <ul>
                <li>API URL: http://localhost:3000/api/books/[:bookId]</li>
                <li>Method: PUT</li>
                <li>Parameter: id = bookId, title = Title, author = Author, genre = Genre   </li>
                <li>Response: 
<pre>
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
</pre>
                </li>
            </ul>
        </li>
        <li><strong>Delete a Book:</strong>
            <p>Remove a book from the collection.</p>
            <ul>
                <li>API URL: http://localhost:3000/api/books/[:bookId]</li>
                <li>Method: DELETE</li>
                <li>Parameters: id = bookId</li>
            </ul>
        </li>
        <li><strong>View Activity Logs:</strong>
            <p>Create a REST API endpoint that allows users to view activity logs. Each log entry should include a timestamp, IP address, action performed, and any relevant book information.</p>
            <ul>
                <li>API URL: <a href="http://localhost:3000/api/logs/?page=1&perPage=1" target="_blank">http://localhost:3000/api/logs</a></li>
                <li>Method: GET</li>
                <li>Parameters: page = Number, perPage = Number</li>
                <li>Response: 

<pre>
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
</pre>                
</li>
            </ul>
        </li>
    </ol>
<hr>    
    </div>
    
    