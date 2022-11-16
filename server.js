require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()

app
  .get('/', (req, res) => {
    res.send('My app test!')
  })
  .listen(3000)
