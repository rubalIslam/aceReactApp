import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyCGZ4cbtXtEOsSELmWbVRPiB6uRuFYICaI",
  authDomain: "aceconstructionhkd.firebaseapp.com",
  databaseURL: "https://aceconstructionhkd.firebaseio.com",
  projectId: "aceconstructionhkd",
  storageBucket: "aceconstructionhkd.appspot.com",
  messagingSenderId: "308366225703",
  appId: "1:308366225703:web:44b6b7c24fe36e3951f902"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseContacts = firebaseDB.ref('contacts');
const firebaseGallery = firebaseDB.ref('gallery');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');
const firebaseChats = firebaseDB.ref('chats');

export {
    firebase,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseChats,
    firebaseContacts,
    firebaseGallery,
    firebaseDB
}