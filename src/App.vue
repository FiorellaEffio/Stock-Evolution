<template>
  <v-app>
    <v-content id="back">
      <router-view class="v-align-items"></router-view>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        sidebar: false
      }
    },
    computed: {
      appTitle () {
        return this.$store.state.appTitle
      },
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      },
      menuItems () {
        if (this.isAuthenticated) {
          return [
            { title: 'Home', path: '/home', icon: 'home' }
          ]
        } else {
          return [
            { title: 'Sign Up', path: '/signup', icon: 'face' },
            { title: 'Sign In', path: '/signin', icon: 'lock_open' }
          ]
        }
      }
    },
    methods: {
      userSignOut () {
        this.$store.dispatch('userSignOut')
      }
    }
  }
</script>
<style media="screen">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

  #back {
    width: 100vh;
    background-image: url('http://subirimagen.me/uploads/20181123142846.png');
  }
  #bvl-logo {
    background-color: white;
    border-radius: 75px 0 0 0 ;
    margin-left: 60%;
    margin-top: 38%;

  }
  .v-align-items {
    margin-top: 10%;
  }
  #bvl-png {
    width: 110px;
    margin-left: 10%;
    padding-right: 15%;
    padding-left: 10%;
    padding-top: 10%;
    padding-bottom: 10%;
  }
</style>
