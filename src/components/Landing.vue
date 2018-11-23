<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center mt-5>
        <img id="logo" src="http://subirimagen.me/uploads/20181123143029.png" alt="">
      </v-flex>
      <v-flex>
        <blockquote class="texto-white blockquote text-xs-center">
          <strong>Ingresa con</strong>
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signup">Sign Up</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
      <v-flex id="bvl-logo">
        <img id="bvl-png" src="http://subirimagen.me/uploads/20181123120801.png" alt="">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style media="screen">
  #logo {
    width: 75%;
    margin-bottom: 40px;
  }
  .texto-white {
    color: white;
    font-size: 26px;
    font-weight: 390;
  }
</style>
