<template>
 <div id="app">
 <nav class="navTool">
   <div class="hidden-md-and-up">
     <v-expansion-panel class="backExpans">
       <v-expansion-panel-content class="indigo darken-4">
         <div slot="header">
           <v-toolbar-title class="nameNav">{{userName}} {{userNivel}} {{userMonto}}</v-toolbar-title>
         </div>
           <a href="#">
             <p class="text"><img src="http://subirimagen.me/uploads/20181130102322.png" width="20px">
               Home
             </p>
           </a>
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
 import {EventBus} from '@/plugins/EventBus.js'
 export default {
   name: 'nav',
   data(){
 		return {
       userName: '',
       userNivel: 0,
       userMonto: 5000,
 		}
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


 </style>
