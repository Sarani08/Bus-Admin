import * as firebase from 'firebase';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyArI1uzGjBooLjPAo02LH1bBdWOg1T4_5Y",
    authDomain: "busadmin-b01e0.firebaseapp.com",
    databaseURL: "https://busadmin-b01e0.firebaseio.com",
    projectId: "busadmin-b01e0",
    storageBucket: "",
    messagingSenderId: "213564999363",
    appId: "1:213564999363:web:f053769c5779d9e5750476",
    measurementId: "G-5HYDWSEKH4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;