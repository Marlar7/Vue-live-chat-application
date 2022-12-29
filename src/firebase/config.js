
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAEKclDLEXqFld9YUpVahtCOT1k_yNQjDM",
    authDomain: "vue-block-system.firebaseapp.com",
    projectId: "vue-block-system",
    storageBucket: "vue-block-system.appspot.com",
    messagingSenderId: "990748825184",
    appId: "1:990748825184:web:cdd03acaf6ccad40be1505"
  };
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export{db ,timestamp,auth};