
  import * as firebase from "firebase";
  require("@firebase/firestore");
  
var firebaseConfig = {
  apiKey: "AIzaSyBIxYOye6fslWL1dHfZWRGU2IHm--O-Gww",
  authDomain: "expo-a8dea.firebaseapp.com",
  databaseURL: "https://expo-a8dea.firebaseio.com",
  projectId: "expo-a8dea",
  storageBucket: "expo-a8dea.appspot.com",
  messagingSenderId: "389608467500",
  appId: "1:389608467500:web:1502d08267134e83d27589",
  measurementId: "G-LPSJ04FP42"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
