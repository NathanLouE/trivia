import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';

import {buildFirebase} from './clients/firebase.js'

let questions = {}
var db = buildFirebase();
var dbRef = db.ref("/questions");
dbRef.once("value").then(function(data) {
    questions = Object.values(data.val());
    console.log(questions);
    ReactDOM.render(<App data={questions}/>, document.getElementById('root'));
   });
