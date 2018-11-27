<template>
    <v-container class="text-xs-center">
       
        <img id="logo" src="http://subirimagen.me/uploads/20181123143029.png">
        <h2>¿Cómo te gustaria<br> que te llame?</h2>
        <input type="text" />
              <img src="http://subirimagen.me/uploads/20181123205930.png" width="200"/>     

         <v-btn
        class="btn-input"
          color="red"
          dark
          @click="e1 = index+2"
        >
          Continue
        </v-btn>
  
    </v-container>
</template>
<style>
v-card{
    background-color: aqua
}
input{
    width: 215px;
    height: 35px;
    border: 3px solid red;
    border-radius: 8rem;
    background-color: white;
    color: blue;
    font-weight: 800
}
 #logo {
    width: 45%;
    margin-bottom: 5px;
  }
 .btn-input{
      border-radius: .8em;
      width: 215px
 } 
</style>
