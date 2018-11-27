<template>
  <v-container fluid>
    <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
  </v-container>
</template>

<script>
/* eslint-disable */

import firebase from 'firebase'
export default {
  data () {
    return {
      alert: false
    }
  },
  methods: {
    userSignIn () {
      this.$store.dispatch('userSignIn', { email: this.email, password: this.password })
    },
     userSignInGoogle () {

      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.push('/home')
        console.log(result.user)
      }).catch(error => {
        console.log(error.message)
      })
    },
    signFacebook() {// eslint-disable-next-line
      const provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope('public_profile')
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          // falta guardar los datos
          console.log('connection saccefull!!')
          this.$router.push('/home')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  },
  computed: {
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    }
  },
  watch: {
    error (value) {
      if (value) {
        this.alert = true
      }
    },
    alert (value) {
      if (!value) {
        this.$store.commit('setError', null)
      }
    }
  }
}
</script>

<style media="screen">

</style>
