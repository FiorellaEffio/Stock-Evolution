<template>
  <v-app>
    <router-view class="contenedor-fondo"></router-view>
  </v-app>
</template>

<style media="screen">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

html {
    height: 100%;
}
body {
    height: 100%;
    margin-top: 0px;
    font-family: 'Open Sans', sans-serif;
}
.contenedor-fondo {
    width: 100%;
    height: 100%;
    background-size: cover;
}
</style>
