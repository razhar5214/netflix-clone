import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZQObV0BebFfeJJUcJrJMSutiRC1GPLYg",
    authDomain: "my-netflix-clone-2bd15.firebaseapp.com",
    projectId: "my-netflix-clone-2bd15",
    storageBucket: "my-netflix-clone-2bd15.appspot.com",
    messagingSenderId: "139332473525",
    appId: "1:139332473525:web:63a8678a3be97d45eda4fc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;