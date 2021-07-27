import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNoICMMjxmlu3gv3BT4jPfBu78WbC6fc4",
    authDomain: "clone-d83bd.firebaseapp.com",
    projectId: "clone-d83bd",
    storageBucket: "clone-d83bd.appspot.com",
    messagingSenderId: "809291533002",
    appId: "1:809291533002:web:f74191c8f03b09da728233"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};