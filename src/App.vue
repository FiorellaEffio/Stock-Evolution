<template>
  <v-app>
    <v-content id="back">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
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
  #back {
    width: 100vh;
    background-image: url('https://lh4.googleusercontent.com/BUecxAUQHxbQEDyUrPxazu5vHfosaGvAuuWtD_Kb_BU6aPGju5KOakYQDzDagDgWBvzVCR51zKo3DxK0zFxq=w1366-h657-rw');
  }
</style>
