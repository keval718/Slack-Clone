// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBA-bNaFud_Klq7mtMutQyJ-rARPiF8C1c",
    authDomain: "slack-clone-93aa9.firebaseapp.com",
    databaseURL: "https://slack-clone-93aa9.firebaseio.com",
    projectId: "slack-clone-93aa9",
    storageBucket: "slack-clone-93aa9.appspot.com", 
    messagingSenderId: "877373645045",
    appId: "1:877373645045:web:ca5812b86c03ad182265bc",
    measurementId: "G-2EV9J3971L"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;