<template>
<div id="bae">
  <v-stepper v-if="!inputs" v-model="e1" class="stepper-leo" align-center>
    <v-stepper-header v-show="false" >
      <v-stepper-step v-for="(data, index) in items" :key="index" :complete="e1 > index" :step="index">Name {{index}}</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items >
      <v-stepper-content v-for="(data, index) in items" :key="index" :step="index+1" class="text-xs-center">
        <img src="http://subirimagen.me/uploads/20181123143029.png" width="40%">

   <div class="divNube">
    <div
      column
      justify-center
      class="textNube"
    >
      <h2 class="font-weight-thin "><span>{{name}}</span>{{data.message}}</h2>
    </div>

   </div>
        <img :src='data.src' @click="nextStteper(index)" height="250px"/>
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
        <input type="text" placeholder="Tu nombre" v-model="name">
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
  import {EventBus} from '@/plugins/EventBus.js'
  import firebase from 'firebase'
  export default {
    name:'leo',
    props: ['information'],
    data () {
      return {
        e1: 0,
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
/*         console.log(this.information)
        const nameLevel = this.information.slice(5, this.information.indexOf('_'))
        const numberLevel = this.information.slice(this.information.length-1)
        console.log(numberLevel, nameLevel)
        switch (nameLevel) {
        case 'On':
          return dataLeo.datainformacion
          break;
        case 'Two':
          const name = `dataLeveltwo_${numberLevel}`
          console.log(name)
          return dataLeo.dataLeveltwo_`${numberLevel}`
          break;
        default: return dataLeo.datajs

      } */

        if(this.information === 'levelOne'){
          return dataLeo.datainformacion
        }
        if(this.information === 'levelTwo_1'){
           return dataLeo.dataLeveltwo_1
        }
        if(this.information === 'levelTwo_2'){
           return dataLeo.dataLeveltwo_2
        }
        if(this.information === 'levelTwo_3'){
           return dataLeo.dataLeveltwo_3
        }
        if(this.information === 'levelTwo_4'){
           return dataLeo.dataLeveltwo_4
        }
        if(this.information === 'levelTwo_5'){
           return dataLeo.dataLeveltwo_5
        }
        else{
          return dataLeo.datajs
        }
      },
      inputs: function() {
        const stepp = this.e1
        if(stepp >= this.items.length + 1 && this.information === undefined) return true
        else return false
      }
    },
    methods: {
      nextNivel(){
          EventBus.$emit('change-state', {state: true})
          firebase.auth().onAuthStateChanged((user) => {
            let userUID = user.uid;
            let userRef = firebase.database().ref('usuarios/' + userUID);
            userRef.update({
                "nickname": this.name
            })
          })
          //this.$router.push({ name: 'nivel', params: { nameGramer: this.name }})
      },
      nextStteper(index){
        this.e1= index+2
        if(this.information === 'levelOne' && (index + 1) === dataLeo.datainformacion.length){
          EventBus.$emit('change-sab', {state: true})
        }
        if(this.information === 'levelTwo_1'){
          EventBus.$emit('change-question', {state: true})
        }
        if(this.information === 'levelTwo_2' && (index + 1) === dataLeo.dataLeveltwo_2.length ){
          EventBus.$emit('change-inform', false)
        }
        if(this.information === 'levelTwo_3' ){
          EventBus.$emit('change-economista', false)
        }
        if(this.information === 'levelTwo_4' ){
          EventBus.$emit('change-sectores', false)
        }
        if(this.information === 'levelTwo_5' ){
          EventBus.$emit('change-nivel', true)
        }
        else{
          console.log('no cumle la condicion')
        }
      },

    },
    destroyed() {
    },
  }

</script>
<style>
    /* #nube {
        width: 100%;
        background-color: pink;
        height: 200px;

    } */
.font-weight-thin {
  color: palevioletred;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin-top: -15px
}
.divNube{
  background-image: url("http://subirimagen.me/uploads/20181123205100.png");
  background-size: 100% ;
  height: 228px;
  width: 290px;
    display: table-cell;
    vertical-align: middle;
  justify-content: flex-start;
      text-align: center;

}
    h2{
        color:black;
        text-align: center;
        padding: 20px 20px ;
        margin-left: 20px;
        margin-right: 20px

    }
    .stepper-leo{
      background: #f4f0f00a !important;
    }
    .btn-leo{
      border-radius: .8em;
      width: 225px;
      height: 40px;
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
    border: 3px solid #FF0000;
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
