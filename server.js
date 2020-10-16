const express = require("express");
const bodyParser = require("body-parser");
// const auth = require('./routes/ordinaryAuth.js')

const app = express();
const port = 3000;
const db = require("./db/database.js");


const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', auth)

app.post("/api/users/registration", (req, res) => {
  console.log("this is consol =>>>", req.body)
  var registerArray = [
    req.body.name,
    req.body.last,
    req.body.country,
    req.body.city,
    req.body.address,
    req.body.licence,
    req.body.dateOfBirth,
    req.body.placeOfBirth,
    req.body.nationality,
    req.body.education,
    req.body.facebook,
    req.body.skills,
    req.body.languages,
    req.body.hobbies,
    req.body.image,
    req.body.summary,
    req.body.username
  ]

  db.registere(registerArray, (err, data) => {
    if (err)
      throw err;

    res.send(data);
  });
})
app.post('/api/users/sendVerificationRequest', (req, res) => {
  var array = ['true', req.body.username]
  db.verificationRequest(array, (err, data) => {
    if (err)
      throw err;

    res.send(data);
  });
})

app.post('/api/users/verifyStudent', (req, res) => {
  var array = ['true', req.body.username]
  db.verifyStudent(array, (err, data) => {
    if (err)
      throw err;

    res.send(data);
  });
})
app.post('/api/users/rejectStudent', (req, res) => {
  var array = ['false', req.body.username]
  db.rejectStudent(array, (err, data) => {
    if (err)
      throw err;

    res.send(data);
  });
})


app.get('/api/users/getNonVerifiedStudents', async (req, res) => {
  try {
    const requests = await db.getNonVerifiedStudents();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
})

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const hash = (pass) => bcrypt.hashSync(pass, 10)

app.post("/addStudents", (req, res) => {
  console.log(req.body)
  var arr = [
    req.body.username, req.body.secretinfo, hash(req.body.password),
    req.body.email
  ];
  db.addStudent(arr, (err, data) => {
    if (err)
      throw err;

    res.send(`${req.body.username
      } added succsesfully`);
  });
});


app.post("/login", (req, res) => {
  db.getUserInfo(req.body.username, (err, data) => {
    if (err)
      throw err;

    console.log(data[0].password)
    var boolean = bcrypt.compareSync(req.body.password, data[0].password)
    var obj = {
      username: req.body.username,
      password: data[0].password
    }
    boolean ? jwt.sign({
      obj
    }, 'privatekey', {
      expiresIn: "1h"
    }, (err, token) => {
      err ? console.log(err) : res.status(200).json({ token: token });
    }) : res.send({ err })


  });
});
app.post('/addCompany', (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  })
})
app.post("/loginCompanies", (req, res) => {
  db.logCompanies(req.body.name, (err, data) => {
    if (err)
      throw err;

    console.log(data[0].password)
    var boolean = bcrypt.compareSync(req.body.password, data[0].password)
    var obj = {
      name: req.body.name,
      password: data[0].password
    }
    boolean ? jwt.sign({
      obj
    }, 'privatekey', {
      expiresIn: "1h"
    }, (err, token) => {
      err ? console.log(err) : res.status(200).json({ token: token });
    }) : res.send({ err })


  });
});
app.post('/addTC', (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addTC(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  })
});
app.post("/loginTC", (req, res) => {
  db.logTC(req.body.name, (err, data) => {
    if (err)
      throw err;

    console.log(data[0].password)
    var boolean = bcrypt.compareSync(req.body.password, data[0].password)
    var obj = {
      name: req.body.name,
      password: data[0].password
    }
    boolean ? jwt.sign({
      obj
    }, 'privatekey', {
      expiresIn: "1h"
    }, (err, token) => {
      err ? console.log(err) : res.status(200).json({ token: token });
    }) : res.send({ err })


  });
});


app.listen(port, () => console.log(`server is listening on port ${port}`));
