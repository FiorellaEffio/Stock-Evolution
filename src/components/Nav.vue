<template>
 <div id="app">
 <nav class="navTool">
   <div class="hidden-md-and-up">
     <v-expansion-panel class="backExpans">
       <v-expansion-panel-content class="indigo darken-4">
         <div slot="header">
           <v-toolbar-title class="nameNav">
             <v-layout class="nav-style" row wrap>
               <v-flex xs6>{{userName}}</v-flex>
               <v-flex xs2><img :src="nivelCoin" alt="" width="30px"></v-flex>
               <v-flex xs4>S/.{{userMonto}}</v-flex>
             </v-layout>
           </v-toolbar-title>
         </div>
           <a href="#">
             <p class="text"><img src="http://subirimagen.me/uploads/20181130102548.png" width="20px">
               Noticias
             </p>
           </a>
           <a href="#">
             <p class="text"><img src="http://subirimagen.me/uploads/20181130025019.png" width="20px">
               Glosario
             </p>
           </a>
            <a @click="userSignOut">
              <p class="text"><img src="http://subirimagen.me/uploads/20181130025019.png" width="20px">
                Cerrar sesión
              </p>
            </a>
       </v-expansion-panel-content>
     </v-expansion-panel>
   </div>
 </nav>
</div>

 </template>
 <script>
 import firebase from 'firebase'
 import dataLeo from '@/plugins/data_leo.js'
 import {EventBus} from '@/plugins/EventBus.js'
 export default {
   name: 'nav',
   data(){
 		return {
       userName: '',
       userNivel: 0,
       userMonto: 5000,
       nivelCoin: '',
 		}
   },
   created() {
     EventBus.$on('changeUserData', (value)=>{
       console.log('estamos enviando data :D')
       let self = this;
       firebase.auth().onAuthStateChanged((user) => {
         let userUID = user.uid;
         let userRef = firebase.database().ref('usuarios/' + userUID);
         userRef.on('value', value => {
             const keyData = value.val()
             this.items = Object.keys(value.val())
             Object.keys(keyData).forEach(element => {
               console.log(keyData[element]);
               
               switch (element) {
                 case "monto":
                   self.userMonto = keyData[element]
                   break;
                 default:
               }
             })
         })
       })
     })
   },
   beforeCreate() {
       let self = this;
       firebase.auth().onAuthStateChanged((user) => {
         let userUID = user.uid;
         let userRef = firebase.database().ref('usuarios/' + userUID);
         userRef.once('value', value => {
             const keyData = value.val()
             this.items = Object.keys(value.val())
             Object.keys(keyData).forEach(element => {
               switch (element) {
                 case "monto":
                   self.userMonto = keyData[element]
                   break;
                 case "nivel":
                   switch (keyData[element]) {
                     case 0:
                       this.nivelCoin = '';
                       break;
                     case 1:
                       this.nivelCoin = dataLeo.moneyNivel[0];
                       break;
                     case 2:
                       this.nivelCoin = dataLeo.moneyNivel[1];
                       break;
                     case 3:
                       this.nivelCoin = dataLeo.moneyNivel[2];
                       break;
                     case 4:
                       this.nivelCoin = dataLeo.moneyNivel[3];
                       break;
                     case 5:
                       this.nivelCoin = dataLeo.moneyNivel[4];
                       break;
                     case 6:
                       this.nivelCoin = dataLeo.moneyNivel[5];
                       break;
                     case 6:
                       this.nivelCoin = dataLeo.moneyNivel[6];
                       break;
                     default:
                   }
                   self.userNivel = keyData[element]
                   break;
                 case "nickname":
                   self.userName = keyData[element]
                   break;
                 default:
               }
             })
         })
       })
   },
   methods: {
     userSignOut(){
       self = this;
       firebase.auth().signOut().then(function() {
         self.$router.push('/landing')
       }, function(error) {
         alert('Sign Out Error', error);
       });
     }
   }
 }
 </script>

 <style>
 .nav-item{
   height: 100px;
 }

 a:link{
   text-decoration: none
 }

 .text{
   font-size: 18px;
   text-decoration: none;
   color: white;
   padding-left: 15px
 }
 .backExpans{
   background-color: aqua
 }

 .nameNav{
   color: white;
   text-transform: uppercase
 }
 .material-icons {
   color: white !important;
 }
 .nav-style {
   font-size: 20px;
 }

 </style>
