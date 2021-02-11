import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase';

var firebaseConfig = {
	apiKey: "AIzaSyCl6Cum-zKYBZbw-68bRUr1_yyIZv_2Lck",
	authDomain: "gastos-2b065.firebaseapp.com",
	databaseURL: "https://gastos-2b065-default-rtdb.firebaseio.com",
	projectId: "gastos-2b065",
	storageBucket: "gastos-2b065.appspot.com",
	messagingSenderId: "683135440178",
	appId: "1:683135440178:web:ac212a786cd2f12927b32b"
};

// Initialize Firebase
var fireDB=firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
