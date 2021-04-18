import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDGsmQtsnCebQTOld652Upmp8ze6EVykwE',
  authDomain: 'clone-slack-6dcab.firebaseapp.com',
  projectId: 'clone-slack-6dcab',
  storageBucket: 'clone-slack-6dcab.appspot.com',
  messagingSenderId: '707063975525',
  appId: '1:707063975525:web:59ba30ced651a71458c08c',
  measurementId: 'G-NJRK7P1LZ9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
