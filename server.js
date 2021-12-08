const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const sendGrid= require('@sendgrid/mail');

const app = express();
// app.use(cors());
// Changed Server
// Changed Server II
//changed server III
// changed server 4

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

// const url = "mongodb://localhost:27017";
const url = "mongodb+srv://shubam:Shubamkalra@cluster0.8bvhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.get("/contact", (req, res,next) => {
    res.send('API status:aa');

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

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

app.post('/contact',(req,res,next)=>{
    sendGrid.setApiKey('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');
    const msg = {
    to: 'shubamkalra.007@gmail.com', // Change to your recipient
    from: req.body.email, // Change to your verified sender
    subject: 'Website contact',
    text: req.body.message,
    }
    sendGrid.send(msg)
    .then((result) => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
})


app.post('/api/userSignUp', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password

    console.log(name, email, password);
    const myObj = { name: name, email: email, password: password };
    console.log(myObj.name);

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

app.get("/api/postAd", (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

            const dbo = db.db("UserDetails");
            dbo.collection("SocialHubCollection").find({}).toArray((error,result)=>{
            if(error){
                res.send("Error" , error)
            }else{
                res.send(JSON.stringify(result));
            }            
            db.close();
            });
    
        })
    });

app.post('/api/postAd', (req, res) => {
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const description = req.body.description
    const email = req.body.email
    const phone = req.body.phone

    console.log(title, subtitle, description,email,phone);
    const myObj = { title: title, subtitle: subtitle, description: description, email:email,phone:phone};
    console.log(myObj.name);

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;

        const dbo = db.db("UserDetails");
        dbo.collection("SocialHubCollection").insertOne(myObj, (error, result) => {
            if (error) {
                res.send("Error", error);
                return;
            }
            res.send(JSON.stringify(result));
            db.close();
        });
    })
});

// app.post('/contact', (req, res) => {
//     const full_name = req.body.full_name;
//     const email = req.body.email;
//     const message = req.body.message;
//     console.log("contact post api callled")
//     console.log(full_name, email, message);
//     const myObj = { full_name: full_name, email: email, message: message };

//     MongoClient.connect(url, (err, db) => {
//         if (err) throw err;

//         const dbo = db.db("UserDetails");
//         dbo.collection("userDetailCollection").insertOne(myObj, (error, result) => {
//             if (error) {
//                 res.send("Error", error);
//                 return;
//             }
//             res.send(JSON.stringify(result));
//             console.log(result)
//             db.close();
//         });
//     });
// });

app.get("/api/userSignUp", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password

    //console.log(name, email, password);
    const myObj = { name: name, email: email, password: password };

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