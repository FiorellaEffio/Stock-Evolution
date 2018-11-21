import store from '@/store'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCQ_epidcuJJ1bcPdVXehK5dQCDp5n8ba4",
  authDomain: "bvl-talentfest.firebaseapp.com",
  databaseURL: "https://bvl-talentfest.firebaseio.com",
  projectId: "bvl-talentfest",
  storageBucket: "bvl-talentfest.appspot.com",
  messagingSenderId: "456928741283"
};

const database = firebase.initializeApp(config)

database.signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    store.commit('setCurrentUser', firebase.auth().currentUser)
    return true
  } catch (error) {
    return error
  }
}

export default database
