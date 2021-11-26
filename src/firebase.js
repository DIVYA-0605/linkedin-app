import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAdHC9vJkRH5RN2vVVwh8-ASe8OkmtDN20",
  authDomain: "linkedin-clone-29874.firebaseapp.com",
  projectId: "linkedin-clone-29874",
  storageBucket: "linkedin-clone-29874.appspot.com",
  messagingSenderId: "860532969948",
  appId: "1:860532969948:web:5c8dce93738408116cbf19"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  export{db,auth}
