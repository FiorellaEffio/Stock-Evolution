// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyCQ_epidcuJJ1bcPdVXehK5dQCDp5n8ba4',
  authDomain: 'bvl-talentfest.firebaseapp.com',
  databaseURL: 'https://bvl-talentfest.firebaseio.com',
  projectId: 'bvl-talentfest'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      el: '#app',
      router,
      render: h => h(App),
      created () {
        if (firebaseUser) {
          console.log(firebaseUser)
        }
      }
    })
    unsubscribe()
  })

