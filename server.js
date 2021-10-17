const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = "mongodb://localhost:27017";

app.get("/api/userSignUp", (req, res) => {

    MongoClient.connect(url , (err , db)=>{
        if(err) throw err;

        const dbo = db.db("UserDetails");
        dbo.collection("userDetailCollection").find({}).toArray((error,result)=>{
        if(error){
            res.send("Error" , error)
        }else{
            res.send(JSON.stringify(result));
        }            
        db.close();
        });

    })
});

app.post('/api/userSignUp', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password

    console.log(name, email, password);
    const myObj = { name: name, email: email, password: password };

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

        const dbo = db.db("UserDetails");
        dbo.collection("userDetailCollection").insertOne(myObj, (error, result) => {
            if (error) {
                res.send("Error", error);
                return;
            }
            res.send(JSON.stringify(result));
            db.close();
        });
    })
});


app.put('/api/students/:id', (req, res) => {
    const id = req.params.id;
    const objectId = ObjectId(id);

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const age = req.body.age;

    console.log(first_name, last_name, age, id, objectId);

    const where = { _id: objectId }
    const myObj = { $set: { first_name: first_name, last_name: last_name, age: age } };

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

        const dbo = db.db("myDatabase");
        dbo.collection("studentInfo").updateOne(where, myObj, (error, result) => {
            if (error) {
                res.send("Error", error);
                return;
            }

            res.send(result);
            db.close();
        });
    });
});

// app.delete('/api/students/:id', (req, res) => {
//     const id = req.params.id;
//     const objectId = ObjectId(id);

//     console.log(id, objectId);

//     const myObj = { _id: objectId }

//     MongoClient.connect(url, (err, db) => {
//         if (err) throw err;

//         const dbo = db.db("myDatabase");
//         dbo.collection("studentInfo").deleteOne(myObj, (error, result) => {
//             if (error) {
//                 res.send("Error", error);
//                 return;
//             }
//             if (result.deletedCount === 1)
//                 res.send("Record deleted successfully");
//             db.close();
//         });
//     });
// });

app.get("/api/students/find", (req,res)=>{

    MongoClient.connect(url , (err , db)=>{
        if(err) throw err;

        const dbo = db.db("myDatabase");
        dbo.collection("studentInfo").find({}).toArray((error,result)=>{
        if(error){
            res.send("Error" , error)
        }else{
            res.send(JSON.stringify(result));
        }            
        db.close();
        });

    })

})


app.listen(5000, () => {
    console.log("The server is up and running on port 5000");
})