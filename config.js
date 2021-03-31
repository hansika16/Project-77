import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCGBnRGXnjR5ytAyp4COOWxh2E92dpt4QU",
    authDomain: "bartersystemapp-6d327.firebaseapp.com",
    projectId: "bartersystemapp-6d327",
    storageBucket: "bartersystemapp-6d327.appspot.com",
    messagingSenderId: "969745603795",
    appId: "1:969745603795:web:e855e75589584aff028826"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()