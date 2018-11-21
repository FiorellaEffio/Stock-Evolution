<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Sign up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="css">
  #app {
    background-image: url('http://esteindesign.xyz/images/lovely-ss-lazio-wallpaper-hd-full-hd-pictures-3-wallpaper-desktop-backgrounds-wallpapersafari-1920x1080.jpg');
    background-position: center;
    background-attachment: fixed;
  }
  @media screen and (max-width: 769px) {
    #app {
      background-size: 320%;
      background-repeat: no-repeat;
    }
  }
</style>
