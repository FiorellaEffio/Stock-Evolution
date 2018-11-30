<template>
 <div id="app">
 <nav class="navTool">
   <!-- <v-toolbar dark >

     <v-spacer></v-spacer>
     <v-toolbar-items color="primary" >
       <v-btn flat="flat">

       </v-btn>

     </v-toolbar-items>
   </v-toolbar> -->
   <div class="hidden-md-and-up"  >
     <v-expansion-panel class="backExpans">
       <v-expansion-panel-content class="indigo darken-4">
         <div slot="header">
           <v-toolbar-title class="nameNav">juanita   s/.50000   nivel 1</v-toolbar-title>
         </div>
         <!-- <v-card>
           <router-link class="nav-item" to="/about">
             <v-card-text>About</v-card-text>
           </router-link>
         </v-card> -->

           <router-link class="nav-item" to="/Landing">

               <a @click="userSignOut">
            <p class="text"><img src="http://subirimagen.me/uploads/20181130025019.png
http://subirimagen.me/uploads/20181130025019.png
" width="20px">
            Cerrar sesión</p>
        </a>

           </router-link>
            <router-link class="nav-item" to="/Landing">

               <a @click="userSignOut">
            <p class="text"><img src="http://subirimagen.me/uploads/20181130025019.png
http://subirimagen.me/uploads/20181130025019.png
" width="20px">
            Cerrar sesión</p>
        </a>

           </router-link>

       </v-expansion-panel-content>
     </v-expansion-panel>
   </div>
 </nav>
</div>

 </template>
 <script>
 import firebase from 'firebase'

 export default {
   name: 'nav',

     methods: {
       userSignOut(){
         console.log('dafdgfd')
       firebase.auth().signOut()
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
