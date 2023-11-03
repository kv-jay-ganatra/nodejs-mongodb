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



        <h3>Considered the above-attached JSON file as the dump of the collection and import into your local MongoDB.</h3>
<p>Write MongoDB queries for the below-given requirements:</p>

<ol>

<li>
    Write a MongoDB query to display all the documents in the collection restaurants.
    <ul>
        <li>
            <pre>
Restaurant.find({})
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine for all the documents in the collection restaurant
    <ul>
        <li>
            <pre>
Restaurant.find({}).select({ restaurant_id: 1, name: 1, borough:1, cuisine:1 })
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine, but exclude the field _id for all the documents in the collection restaurant.
    <ul>
        <li>
            <pre>
Restaurant.find({}).select({ _id: 0, restaurant_id: 1, name: 1, borough:1, cuisine:1 })
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>


</li>
<li>Write a MongoDB query to display the fields restaurant_id, name, borough, and zip code, but exclude the field _id for all the documents in the collection restaurant.
    <ul>
        <li>
            <pre>
Restaurant.find({

}).select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 })
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>


</li>
<li>Write a MongoDB query to display all the restaurants which are in the borough Bronx.
    <ul>
        <li>
            <pre>
Restaurant.find({ 'borough': 'Bronx' }).select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 })
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to display the first 5 restaurants which are in the borough Bronx.
    <ul>
        <li>
            <pre>
Restaurant.find({ 'borough': 'Bronx' }).select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 }).limit(5)
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
    <ul>
        <li>
            <pre>
Restaurant.find({ 'borough': 'Bronx' }).select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 }).skip(5).limit(5)
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to find the restaurants that achieved a score of more than 90.
    <ul>
        <li>
            <pre>
Restaurant.find({  'grades.score': { $gt: 90 }  }).select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 }).skip(5).limit(5)
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to find the restaurants that achieved a score, of more than 80 but less than 100.
    <ul>
        <li>
            <pre>
Restaurant.find({  'grades.score': { $gt: 80, $lt:100 }  }).select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 }).skip(5).limit(5)
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to find the restaurants which locate in a latitude value less than -95.754168.
    <ul>
        <li>
            <pre>
Restaurant.find({"address.coord.0":{$lt:-95.754168}}).select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 }).limit(5)
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and whose grade score is more than 70 and latitude less than -65.754168.
    <ul>
        <li>
            <pre>
Restaurant.find({ 
    $and:[
        {'address.coord.0': { $lt: -65.754168}},
        {'cuisine': {$ne: "American"}},
        {'grades.score': { $gt: 70 }}
    ]
    })
    .select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 }).limit(5)
.then((restaurants) => {
    res.send(restaurants);
})
.catch((e) => {
    res.status(400).send(e);
});            
            </pre>
        </li>
    </ul>

</li>
<li>Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score of more than 70 and located in the longitude less than -65.754168. Note: Do this query without using $and operator.
    <ul>
        <li>
            <pre>
Restaurant.find({ 
    'address.coord.0': { $lt: -65.754168},
    'cuisine': {$ne: "American"},
    'grades.score': { $gt: 70 }
})
.select({ restaurant_id: 1, name: 1, borough:1, 'address.zipcode':1 }).limit(5)
  
</pre>
</li>
</ul>

</li>
<li>Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belonging to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
    <ul>
        <li>
<pre>
Restaurant.find({
    $and: [
        { 'address.coord.0': { $lt: -65.754168 } },
        { cuisine: { $ne: 'American' } },
        { 'grades.grade': 'A' },
        { borough: { $ne: 'Brooklyn' } },
    ],
}) 
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Wil' as the first three letters of their name.
    <ul>
        <li>
<pre>
Restaurant.find({
    "name": { "$regex": "^Wil", "$options": "i" } 
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as the last three letters of their name.
    <ul>
        <li>
<pre>
Restaurant.find({
    "name": { "$regex": "ces$", "$options": "i" } 
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Reg' as three letters somewhere in their name.
    <ul>
        <li>
<pre>
Restaurant.find({
    "name": { "$regex": "reg", "$options": "i" } 
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dishes.
    <ul>
        <li>
<pre>
Restaurant.find({
    "borough": "Bronx",
    "cuisine": { "$in": ["American", "Chinese"] }
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
    <ul>
        <li>
<pre>
Restaurant.find({
    "borough": {
        "$in": ["Staten Island", "Queens", "Bronx", "Brooklyn"]
    }
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which do not belong to the borough Staten Island or Queens, or Bronxor Brooklyn.
    <ul>
        <li>
<pre>
Restaurant.find({
    "borough": {
        "$nin": ["Staten Island", "Queens", "Bronx", "Brooklyn"]
    }
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which achieved a score that is not more than 10.
    <ul>
        <li>
<pre>
Restaurant.find({
    "grades.score": { "$lte": 10 }
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which prepared dishes except 'American' and 'Chinees' or the restaurant's name begins with the letter 'Wil'.  
    <ul>
        <li>
<pre>
Restaurant.aggregate([
{
    $match: {
    $or: [
        {
        cuisine: {
            $not: { $regex: 'American|Chinese', $options: 'i' },
        },
        },
        {
        name: {
            $regex: '^Wil',
            $options: 'i',
        },
        },
    ],
    },
},
{
    $project: {
    _id: 0,
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
    },
},
])
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many survey dates.
    <ul>
        <li>
<pre>
Restaurant.find(
{
    "grades": {
        $elemMatch: {
            "grade": "A",
            "score": 11,
            "date": {
            $eq: new Date("2014-08-11")
            }
        }
    },
    {
        "_id": 0,
        "restaurant_id": 1,
        "name": 1,
        "grades": {
            $elemMatch: {
            "grade": "A",
            "score": 11,
            "date": new Date("2014-08-11")
            }
        }
    }
})
.sort({ name: 1 })
.limit(10)
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants where the 2nd element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
    <ul>
        <li>
<pre>
Restaurant.find(
{
    $and: [
    { "grades.1.grade": "A" },
    { "grades.1.score": 9 },
    { "grades.1.date": new Date("2014-08-11") }
    ]
},
{
    _id: 0,
    restaurant_id: 1,
    name: 1,
    grades: { $slice: ["$grades", 1,1] }
})
.sort({ name: 1 })
.limit(10)
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant Id, name, address, and geographical location for those restaurants where the 2nd element of the coord array contains a value that is more than 42 and up to 52.
    <ul>
        <li>
<pre>
Restaurant.find(
{
    $expr: {
    $and: [
        { $gt: [{ $arrayElemAt: ["$address.coord", 1] }, 42] },
        { $lte: [{ $arrayElemAt: ["$address.coord", 1] }, 52] }
    ]
    }
},
{
    _id: 0,
    restaurant_id: 1,
    name: 1,
    "address": 1
}
)
.sort({ name: 1 })
.limit(10)
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
    <ul>
        <li>
<pre>
Restaurant.find({},
{
    name: 1,
    "borough": 1,
    cuisine:1,
    _id: 1,
    restaurant_id: 1,
})
.sort({ name: 1,borough:-1 })
.limit(10)
    
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns
    <ul>
        <li>
<pre>
Restaurant.find({},
{
    name: 1,
    "borough": 1,
    cuisine:1,
    _id: 1,
    restaurant_id: 1,
})
.sort({ name: -1,borough:1 })
.limit(10)
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to arrange the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
    <ul>
        <li>
<pre>
Restaurant.find({},
{
    name: 1,
    "borough": 1,
    cuisine:1,
    _id: 1,
    restaurant_id: 1,
})
.sort({ cuisine: 1, borough: -1 })
.limit(10)
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to know whether all the addresses contains the street or not.
    <ul>
        <li>
<pre>
Restaurant.aggregate([
{
    $group: {
    _id: null,
    idCount: { $sum: { $cond: [{ $ifNull: ["$_id", false] }, 1, 0] } },
    streetCount: { $sum: { $cond: [{ $ifNull: ["$address.street", false] }, 1, 0] } }
    }
},
{
    $project: {
    _id: 0,
    isExistInAllDocument: {
        $cond: {
        if: { $eq: ["$idCount", "$streetCount"] },
        then: "Yes",
        else: "No"
        }
    }
    }
} 
])
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
    <ul>
        <li>
<pre>
Restaurant.find({
    "address.coord" : { $type : "double" }
},{
    _id:0,
    'address.coord':1
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
    <ul>
        <li>
<pre>
Restaurant.find(
{
    "grades": {
    $elemMatch: {
        "score": {
        $mod: [7, 0]  
        }
    }
    }
},
{
    "restaurant_id": 1,
    "name": 1,
    "grades": {
    $elemMatch: {
        "score": {
        $mod: [7, 0]  
        }
    }
    },
    "_id": 0
})
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.
    <ul>
        <li>
<pre>
Restaurant.find(
{
    "name": {
    $regex: "mon", "$options": "i"  
    }
},
{
    "name": 1,
    "borough": 1,
    "address.coord": 1,
    "cuisine": 1,
    "_id": 0
})
    
</pre>
        </li>
    </ul>
</li>
<li>Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name.  
    <ul>
        <li>
<pre>
Restaurant.find(
{
    "name": {
    $regex: "^Mad", "$options": "i"  
    }
},
{
    "name": 1,
    "borough": 1,
    "address.coord": 1,
    "cuisine": 1,
    "_id": 0
})
</pre>
        </li>
    </ul>
</li>
</ol>
    </ol>
<hr>    
    </div>
    
    
