// Importing the modules 
const mongodb = require('mongodb');
const express = require('express')
const app = express()

const MongoClient = mongodb.MongoClient
const url = "mongodb://localhost:27017/Northwind"

app.use(express.static('public'))