<template>
  <v-container fluid id="back">
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
        <div class="social-buttons">
          <a href="#" @click="signFacebook()" class="social-button facebook">
            <img src="http://subirimagen.me/uploads/20181128145504.png" >
          </a>
          <a href="#" @click="userSignInGoogle()" class="social-button google">
            <img src="http://subirimagen.me/uploads/20181128145139.png">
          </a>
        </div>
      </v-flex>
      <v-flex id="bvl-logo">
        <img id="bvl-png" src="http://subirimagen.me/uploads/20181123120801.png" alt="">
      </v-flex>
    </v-layout>
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
    writeDatabase (user) {
      //muestrame si existe el usuario
      let profile = firebase.database().ref().child('usuarios/' + user.uid);
      profile.on('value', snap => {
          let userData = JSON.stringify(snap.val(),null,3);//tbm funciona un solo parametro
          userData = JSON.parse(userData);
          if(userData == null) {
            var usuario = {
                uid : user.uid,
                monto: 5000,
                nivel: 0
            }
            firebase.database().ref("usuarios/" + usuario.uid)
            .set(usuario)
            this.$router.push('/leo')
            console.log(usuario);
          } else {
            switch (userData.nivel) {
              case 0:
                this.$router.push('/level_zero')
                break;
              case 1:
                this.$router.push('/level_one')
                break;
              case 2:
                this.$router.push('/level_two')
                break;
              default:

            }
            console.log('ya existia el usuario');
          }
      })
    },
    userSignInGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.writeDatabase(result.user);
      }).catch(error => {
        console.log(error.message)
      })
    },
    signFacebook () { // eslint-disable-next-line
      const provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope('public_profile')
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          // falta guardar los datos
          console.log(result.user)
          this.writeDatabase(result.user);
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
  #logo {
    width: 75%;
    margin-bottom: 40px;
  }
  .texto-white {
    color: white;
    font-size: 26px;
    font-weight: 390;
  }
  body {
    background-color: #F4F4F4;
  }
  html {
    box-sizing: border-box;
  }
  .social-buttons {
  	height: 50px;
  	font-size: 10;
  	text-align: center;
  	position: absolute;
    right: 0;
    left: 0;
    top: 60%;
    bottom: 50%;
  }

  .social-button {
  	display: inline-block;

  	line-height: 50px;
  	margin-left: 0 !important;
  	margin-right: 20px !important;
  	text-align: center;
  	position: relative;
  	overflow: hidden;
  	opacity: .99;
  	border-radius: 30%;
  	box-shadow: 0 0 30px 0 rgba(0,0,0,0.06);
  	-webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
  	transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
  }







  .social-button:focus {
  	opacity: .85;
  }

  * {
  	margin: 0;
  	padding: 0;
  	color: inherit;
  	    box-sizing: border-box;

  }

  :focus {
  	outline: none;
  }

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
    #bvl-png {
      width: 110px;
      margin-left: 10%;
      padding-right: 15%;
      padding-left: 10%;
      padding-top: 10%;
      padding-bottom: 10%;
    }
</style>
