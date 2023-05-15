import { ManagementClient } from 'auth0';
import { useAuth0 } from '@auth0/auth0-react';

const express = require("express");
const app = express();
const mysql = require("mysql");

function crear (usuario, callback) {
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'mydb'
});

connection.connect();

const query = 'INSERT INTO users SET ?';

bcrypt.hash(user.password, 10, function(err, hash) {
  if (err) return callback(err);

  const insert = {
    password: hash,
    email: user.email
  };

  connection.query(query, insert, function(err, results) {
    if (err) return callback(err);
    if (results.length === 0) return callback();
    callback(null);
  });
});
}