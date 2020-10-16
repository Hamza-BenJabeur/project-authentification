const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

let registere = (arr, callback) => {
  console.log("hheheh");
  console.log(arr)
  var sql = `UPDATE students SET firstname = ? , lastname = ? , country = ?, city = ?, addresspostal = ?, driving = ?, dateOfBirth = ?, placeOfBirth = ?, nationality = ?, education = ?, socialLink = ?, skills = ?, languages = ?, hobbies = ?, profilePic = ?, summery= ? WHERE username= ?;`;
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

let verificationRequest = (arr, callback) => {
  var sql = "UPDATE students SET verRequest = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}


let verifyStudent = (arr, callback) => {
  var sql = "UPDATE students SET verification = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}

let rejectStudent = (arr, callback) => {
  var sql = "UPDATE students SET verRequest = ?  WHERE username= ?;";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
}


const getNonVerifiedStudents = function () {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from students where verification='false' and verRequest='true';`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};


const addStudent = (arr, callback) => {
  let sql =
    "insert into students (username ,secretinfo, password, email) values (?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
};



const getUserInfo = (username, callback) => {
  let sql = `select password from students where username = ?`;
  connection.query(sql, username, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

const addCompany = (arr, callback) => {
  let sql = 'insert into companies (name,password) values(?,?)';
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  })
}
const logCompanies = (name, callback) => {
  let sql = `select password from companies where name = ?`;
  connection.query(sql, name, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
}
const addTC = (arr, callback) => {
  let sql = 'insert into trainingCenters (name,password) values(?,?)';
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  })
}
const logTC = (name, callback) => {
  let sql = `select password from trainingCenters where name = ?`;
  connection.query(sql, name, (err, data) => {
    if (err) throw callback(err, null);
    callback(null, data);
  });
}


module.exports = {
  logTC,
  addTC,
  logCompanies,
  addCompany,
  registere,
  verificationRequest,
  getNonVerifiedStudents,
  verifyStudent,
  rejectStudent,
  addStudent,
  getUserInfo
};
