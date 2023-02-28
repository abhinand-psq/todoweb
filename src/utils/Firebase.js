import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHzfxD8uT3yrhAjUIzGbS-T0Hmzu99Wp8",
    authDomain: "totolist-5c1b0.firebaseapp.com",
    projectId: "totolist-5c1b0",
    storageBucket: "totolist-5c1b0.appspot.com",
    messagingSenderId: "145007279051",
    appId: "1:145007279051:web:c16ec6f3fb7287af3ed44e",
    measurementId: "G-L8QJNPVTEH"
  };

export const db=firebase.initializeApp(firebaseConfig)
  
