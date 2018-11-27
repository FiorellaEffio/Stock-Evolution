<template>
<div>
  <v-btn @click="userSignOut">Cerrar sesión</v-btn>
  <v-stepper v-if="!inputs" v-model="e1" class="stepper-leo" align-center>
    <v-stepper-header v-show="false" >
      <v-stepper-step v-for="(data, index) in items" :key="index" :complete="e1 > index" :step="index">Name {{index}}</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items >
      <v-stepper-content v-for="(data, index) in items" :key="index" :step="index+1" class="text-xs-center">
    <v-parallax
    dark
    src="http://subirimagen.me/uploads/20181123205100.png"
    height="265"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h3 class="font-weight-thin mb-4"><span>{{name}}</span>{{data.message}}</h3>
    </v-layout>
  </v-parallax>
        <v-card
          class="mb-3"
          color="light"
          height="280px"
          :img='data.src'
        >
        </v-card>
        <v-btn
        class="btn-leo"
          color="red"
          dark
          @click="nextStteper(index)"
        >
          Continue
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  <v-container v-else class="text-xs-center">

        <img id="logo" src="http://subirimagen.me/uploads/20181123143029.png">
        <h2>¿Cómo te gustaria<br> que te llame?</h2>
        <input type="text" placeholder="Tu nombre" v-model="name">/>
        <img src="http://subirimagen.me/uploads/20181123205930.png" width="200"/>
        <v-btn
        class="btn-input"
         v-bind:class="{ 'color': stateName	}"
          color="griss"
          dark
          :disabled="!stateName"
          @click="nextNivel()"
        >
          Comenzar
        </v-btn>

  </v-container>

</div>
</template>
<script>
 /* eslint-disable */
  import dataLeo from '@/plugins/data_leo.js'
  import firebase from 'firebase'
  export default {
    name:'leo',
    props: ['informacion'],
    data () {
      return {
        e1: 0,
        info: this.$route.params.dataInformation,
        hea: false,
        name: '',
      }
    },
    created(){
    },
    computed:{
      stateName: function () {
        if(this.name !== '' && typeof this.name.slice(0,1) !== Number){
          return true;
        }else{
          return false;
        }
      },
      items: function(){
        if(this.info === true){
          return dataLeo.datainformacion
        }
        else{
          return dataLeo.datajs
        }
      },
      inputs: function() {
        const stepp = this.e1
        if(stepp >= this.items.length + 1 && this.info !== true) return true
        else return false
      }
    },
    methods: {
      nextNivel(){
        firebase.auth().onAuthStateChanged((user) => {
          let userUID = user.uid;
          let userRef = firebase.database().ref('usuarios/' + userUID);
          userRef.update({
              "nickname": this.name,
              "nivel": 1
          })
        })
        this.$router.push({ name: 'nivel', params: { nameGramer: this.name }})
      },
      nextStteper(index){
        this.e1= index+2
        if(this.info === true && (index + 1) === dataLeo.datainformacion.length){
          this.$router.push('/sectores')
        }else{}
      },
      userSignOut () {
        firebase.auth().signOut().then(function() {
          console.log('Signed Out');
          this.$router.push('/')
        }, function(error) {
          console.error('Sign Out Error', error);
        });
      }
    }
  }

</script>
<style>
    /* #nube {
        width: 100%;
        background-color: pink;
        height: 200px;

    } */

    h3{
        color:black;
        text-align: center;
        padding: 10px 10px;

    }
    .stepper-leo{
      background: #f4f0f00a !important;
    }
    .btn-leo{
      border-radius: .8em;
      width: 215px
    }
    .v-align-items {
      margin-top: 0% !important;
}
v-card{
    background-color: aqua
}
input{
    width: 215px;
    height: 35px;
    padding: 1em;
    border: 3px solid red;
    border-radius: 8rem;
    color: #fff;
    font-weight: 400;
    text-align: center;
    outline: none;
    font-size: 16px;

}
 #logo {
    width: 45%;
    margin-bottom: 5px;
  }
 .btn-input{
      border-radius: .8em;
      width: 215px
 }
 .color{
   background: red !important
 }
</style>
