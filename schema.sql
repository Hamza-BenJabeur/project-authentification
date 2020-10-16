DROP DATABASE IF EXISTS eduproject;
CREATE DATABASE eduproject;
USE eduproject;
CREATE TABLE trainingCenters(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR (90) NOT NULL ,
    email VARCHAR (50) ,
    owner VARCHAR (50) ,
    trainingOptions VARCHAR (50) ,
    about VARCHAR (250) ,
    location VARCHAR (50),
    website VARCHAR (100),
    numberOfStudentGraduated VARCHAR (50),
    logo VARCHAR (100),
    verification varchar (10)   DEFAULT 'false' , 
    verRequest varchar (10)   DEFAULT 'false' , 
    firstTime varchar (10)   DEFAULT 'true'
);
CREATE TABLE students(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname varchar (50),
    username varchar (50) NOT NULL,
    lastname varchar (50) ,
    secretinfo varchar (150) NOT NULL,
    password varchar (250) NOT NULL,
    email varchar (50) NOT NULL ,
    country varchar (50) ,
    city varchar (50) , 
    addresspostal varchar (50) ,
    driving varchar (50) , 
    dateOfBirth varchar (50) ,
    placeOfBirth varchar (50)  ,
    nationality varchar (50) ,
    summery varchar (500) ,
    education varchar (50)  , 
    socialLink varchar (100) ,
    skills varchar (50)  , 
    languages varchar (50) , 
    hobbies varchar (50) , 
    profilePic varchar (100)  ,
    verification varchar (10)  DEFAULT 'false'  , 
    verRequest varchar (10)   DEFAULT 'false' , 
    firstTime varchar (10)  DEFAULT 'true' 
);
CREATE TABLE companies(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR (90) NOT NULL ,
    email VARCHAR (50) ,
    owner VARCHAR (50) ,
    field VARCHAR (50) ,
    numberOfEmployees VARCHAR (50)  ,
    about VARCHAR (250) ,
    location VARCHAR (50),
    website VARCHAR (100),
    logo VARCHAR (100),
    verification varchar (10) DEFAULT 'false'   , 
    verRequest varchar (10)  DEFAULT 'false'  , 
    firstTime varchar (10)  DEFAULT 'true' 
);
