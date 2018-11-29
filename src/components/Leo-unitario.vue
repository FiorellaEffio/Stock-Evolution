<template>
<div>
  <v-btn>Cerrar sesión</v-btn>
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
          @click="nextStteper(index)"
        >
          Continue
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</div>
</template>
<script>
 /* eslint-disable */
  import dataLeo from '@/plugins/data_leo.js'
  import {EventBus} from '@/plugins/EventBus.js'
  import firebase from 'firebase'
  export default {
    name:'leo-unitario',
    props: ['information'],
    data () {
      return {
        e1: 0,
        info: this.$route.params.dataInformation,
      }
    },
    created(){
    },
    computed:{
      items: function(){
        return dataLeo.dataLeveltwo[0]
      }
    },
    methods: {
        nextStteper(index){
        this.e1= index+2
        if(this.information === true && (index + 1) === dataLeo.datainformacion.length){
           EventBus.$emit('change-sab', {state: true})
                   
        }else{}
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