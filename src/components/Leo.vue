<template>
  <v-stepper v-model="e1" class="stepper-leo" align-center>
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
      <h3 class="font-weight-thin mb-4">{{data.message}}</h3>
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
          @click="e1 = index+2"
        >
          Continue
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
 /* eslint-disable */
  import dataLeo from '@/plugins/data_leo.js'
  export default {
    name:'leo',
    data () {
      return {
        e1: 0,
        items: dataLeo.datajs,
        hea: false
      }
    },
    created(){
      console.log(this.items, dataLeo.datajs)
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
      border-radius: .8em
    }
    .v-align-items {
      margin-top: 0% !important;
}
</style>


