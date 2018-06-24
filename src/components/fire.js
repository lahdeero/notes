import firebase from 'firebase'

var API_KEY = process.env.apiKey;
var config = { 
    apiKey: API_KEY,
    authDomain: "notes-28924.firebaseapp.com",
    databaseURL: "https://notes-28924.firebaseio.com",
    projectId: "notes-28924",
    storageBucket: "notes-28924.appspot.com",
    messagingSenderId: "131553198666"
  };
  var fire = firebase.initializeApp(config);
  export default fire;

