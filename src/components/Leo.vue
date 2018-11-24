<template>
  <v-stepper v-model="e1">
    <v-stepper-header >
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>
   

    <v-stepper-items>

      <v-stepper-content step="1">
       
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
      <h1 class="display-2 font-weight-thin mb-1">Vuetify.js</h1>
      <h4 >Build your application today!</h4>
      <p>aaaaaaa</p>
    </v-layout>
  </v-parallax>  
        
        <v-card
          class="mb-3"
          color="light"
          height="280px"
          img='http://subirimagen.me/uploads/20181123205930.png'
        >
           
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
 /* eslint-disable */
    
  export default {
    data () {
      return {
        e1: 0
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
   
    h1{
        color:black
    }
</style>


