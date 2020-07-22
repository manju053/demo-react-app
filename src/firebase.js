import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyC_Na4UgrQ5PoMWrIJo3NlB4ieLfdhwAhE",
    authDomain: "react-social-media-app-ef2e4.firebaseapp.com",
    databaseURL: "https://react-social-media-app-ef2e4.firebaseio.com",
    projectId: "react-social-media-app-ef2e4",
    storageBucket: "gs://react-social-media-app-ef2e4.appspot.com",
    messagingSenderId: "218626710353",
    appId: "1:218626710353:web:7afd1396f841ee06565170",
    measurementId: "G-CZS2CH80VR",
    
  }

  firebase.initializeApp(FIREBASE_CONFIG)
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  export const fireStorage = firebase.storage()