<template>
  <v-layout class="fondo" row wrap>
    <v-flex xs12 text-xs-center mt-5 pt-5>
      <img id="logo" src="http://subirimagen.me/uploads/20181123143029.png" alt="">
    </v-flex>
    <v-flex mr-3>
      <blockquote class="texto-white blockquote text-xs-center">
        <strong>Ingresa con</strong>
      </blockquote>
    </v-flex>
    <v-flex xs12 text-xs-center>
      <v-btn class="button" large round="true" href="#" @click="signFacebook()">
        <img class="button-img" src="http://subirimagen.me/uploads/20181128145504.png" > <span>acebook</span>
      </v-btn>
      <br>
      <v-btn class="button" large round="true" href="#" @click="userSignInGoogle()">
        <img class="button-img" src="http://subirimagen.me/uploads/20181128145139.png"> <span>oogle</span>
      </v-btn>
    </v-flex>
    <v-flex class="bvl-contenedor">
      <img class="bvl-img" src="http://subirimagen.me/uploads/20181123120801.png" alt="">
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
    }
  },
  methods: {
    writeDatabase (user) {
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
            this.$router.push('/level_zero')
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
              case 3:
                this.$router.push('/level_three')
                break;
              case 4:
                this.$router.push('/level_four')
                break;
              default:
            }
          }
      })
    },
    userSignInGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.writeDatabase(result.user);
      }).catch(error => {
        alert(error.message)
      })
    },
    signFacebook () { // eslint-disable-next-line
      const provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope('public_profile')
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          this.writeDatabase(result.user);
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
<style media="screen">
  #logo {
    width: 80%;
  }
  .texto-white {
    color: white;
    font-size: 26px;
    font-weight: 400;
  }
  .fondo {
    background-image: url('http://subirimagen.me/uploads/20181123142846.png');
  }
  .button-img {
    width: 30%;
  }
  .button {
    opacity: 0.8 !important;
  }
  .bvl-contenedor {
    background-color: white;
    border-radius: 95% 0% 0% 0% ;
    margin-left: 60%;
    margin-top: 30%;
  }
  .bvl-img {
    width: 90%;
    margin-left: 15%;
    padding-right: 15%;
    padding-left: 10%;
    padding-top: 20%;
  }
</style>
