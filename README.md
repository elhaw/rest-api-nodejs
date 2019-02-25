# Simple REST API

An example about how to create a RESTful API using Express.js. The four CRUD operations are provided: create, read, update and delete records.


## Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.


## Running project

* Run ```npm run start``` start the server.

## Database

* I used  [mlab](https://mlab.com/) to store data but you can run it locally or with [mongodb Atlas](https://www.mongodb.com/cloud/atlas)

* change data base URL in ```config/dev.js```


## Test End points

* You neeed to install [Postman](https://insomnia.rest) or [insomania](https://www.getpostman.com) to test  API end points. or any similar tool

## Available end-points

### GET /students

Gets all the available students stored in database.


### GET /students/:id

find student by id.


### POST /students

Add new stdent record 

** Body request **

```
    {
        "firstName": "name",
        "lastName ": "last name",
        "email": "user@eommail.com",
        "school": "school name",
        "phone": "213233321",
        "gender": "male"
     }
```

### PUT /student/:studentId

Update student info


### DELETE /student/:studentId

Delete student by Id

