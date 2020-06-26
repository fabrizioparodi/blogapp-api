const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const firebaseMiddleware = require('express-firebase-middleware');
const firebase = require('firebase-admin');

firebase.initializeApp({
    apiKey: "AIzaSyB9PeL7nbaLpXH3D5Hr8xKcnFw_1OURSPs",
    authDomain: "blog-app-ee678.firebaseapp.com",
    databaseURL: "https://blog-app-ee678.firebaseio.com",
    projectId: "blog-app-ee678",
    storageBucket: "blog-app-ee678.appspot.com",
    messagingSenderId: "534437626017",
    appId: "1:534437626017:web:fcde777a2a71d4887570e0",
    measurementId: "G-7KTLYJQVPE"
})

const postsRouter = require('./src/controllers/posts');

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());

app.use('/posts', firebaseMiddleware.auth, postsRouter);

module.exports = app;
