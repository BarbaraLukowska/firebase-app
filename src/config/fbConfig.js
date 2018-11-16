import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyA7cMehLHNZFh9KPEZrLR6Ma5HgQJdfsA8",
  authDomain: "marioplan-project.firebaseapp.com",
  databaseURL: "https://marioplan-project.firebaseio.com",
  projectId: "marioplan-project",
  storageBucket: "marioplan-project.appspot.com",
  messagingSenderId: "1069274200641"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})


export default firebase;