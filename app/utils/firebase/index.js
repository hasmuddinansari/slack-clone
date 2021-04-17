import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD5GLbxdHpFTMbGMQRvVSVOuAVis665TE0',
  authDomain: 'slack-clone-39d75.firebaseapp.com',
  projectId: 'slack-clone-39d75',
  storageBucket: 'slack-clone-39d75.appspot.com',
  messagingSenderId: '1016908839003',
  appId: '1:1016908839003:web:6276ef291547153316677e',
  measurementId: 'G-BPJPBQ3N5L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
