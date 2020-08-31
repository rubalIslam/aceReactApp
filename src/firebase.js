import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: "",
  authDomain: "aceconstructionhkd.firebaseapp.com",
  databaseURL: "",
  projectId: "aceconstructionhkd",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseContacts = firebaseDB.ref('contacts');
const firebaseGallery = firebaseDB.ref('gallery');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');
const firebaseChats = firebaseDB.ref('chats');
const firebaseEngineers = firebaseDB.ref('engineers');

export {
    firebase,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseChats,
    firebaseContacts,
    firebaseGallery,
    firebaseEngineers,
    firebaseDB
}
