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
        <div class="social-buttons">
          <a href="#" @click="signFacebook()" class="social-button facebook">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" @click="userSignInGoogle()" class="social-button google">
            <i class="fa fa-google"></i>
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
                this.$router.push('/leo')
                break;
              case 1:
                this.$router.push('/nivel')
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
  	background-color: #fff;
  	width: 50px;
  	height: 50px;
  	line-height: 50px;
  	margin-left: 0 !important;
  	margin-right: 15px !important;
  	text-align: center;
  	position: relative;
  	overflow: hidden;
  	opacity: .99;
  	border-radius: 30%;
  	box-shadow: 0 0 30px 0 rgba(0,0,0,0.06);
  	-webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
  	transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
  }

  .social-button:before {
  	content: '';
  	background-color: #000;
  	width: 120%;
  	height: 120%;
  	position: absolute;
  	top: 90%;
  	left: -110%;
  	-webkit-transform: rotate(45deg);
  	-ms-transform: rotate(45deg);
  	transform: rotate(45deg);
  	-webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.79);
  	transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.79);
  }

  .social-button .fa {
  	font-size: 28px;
  	vertical-align: middle;
  	-webkit-transform: scale(0.75);
  	-ms-transform: scale(0.75);
  	transform: scale(0.75);
  	-webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
  	transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
  }

  .social-button.facebook:before {
  	background-color: #3B5998;
  }

  .social-button.facebook .fa {
  	color: #3B5998;
  }

  .social-button.twitter:before {
  	background-color: #3CF;
  }

  .social-button.twitter .fa {
  	color: #3CF;
  }

  .social-button.google:before {
  	background-color: #DC4A38;
  }

  .social-button.google .fa {
  	color: #DC4A38;
  }

  .social-button.dribbble:before {
  	background-color: #F26798;
  }

  .social-button.dribbble .fa {
  	color: #F26798;
  }

  .social-button.skype:before {
  	background-color: #00AFF0;
  }

  .social-button.skype .fa {
  	color: #00AFF0;
  }

  .social-button:hover:before {
  	top: -10%;
  	left: -10%;
  }

  .social-button:hover .fa {
  	color: #fff;
  	-webkit-transform: scale(1);
  	-ms-transform: scale(1);
  	transform: scale(1);
  }

  .social-button:focus {
  	opacity: .85;
  }

  * {
  	margin: 0;
  	padding: 0;
  	color: inherit;
  	box-sizing: inherit;
  }

  :focus {
  	outline: none;
  }
</style>
