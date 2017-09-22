import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDZz_wI5HBQMcEcNB-DwxczGF4_OOGkdO8",
    authDomain: "alfarooq-clinic-app.firebaseapp.com",
    databaseURL: "https://alfarooq-clinic-app.firebaseio.com",
    projectId: "alfarooq-clinic-app",
    storageBucket: "alfarooq-clinic-app.appspot.com",
    messagingSenderId: "820779739457"
  };
var fire = firebase.initializeApp(config);
export default fire;
