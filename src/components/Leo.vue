<template>
<div>
  <v-stepper v-if="!inputs" v-model="e1" class="stepper-leo" align-center>
    <v-stepper-header v-show="false" >
      <v-stepper-step v-for="(data, index) in items" :key="index" :complete="e1 > index" :step="index">Name {{index}}</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items >
      <v-stepper-content v-for="(data, index) in items" :key="index" :step="index+1" class="text-xs-center">
   <div class="contentNube">
     <div class="divNube">
      <div
        column
        justify-center
        class="textNube"
      >
        <h3 class="font-weight-regular"><span>{{name}}</span>{{data.message}}</h3>
      </div>

     </div>
   </div>
   <div class="contentLeoBtn">
     <div class="imgDiv">
       <img :src='data.src' @click="nextStteper(index)" height="250px"/>
     </div>
     <div class="btnDiv">
       <v-btn
       class="btn-leo"
         color="red"
         dark
         @click="nextStteper(index)"
       >
         Continue
       </v-btn>
     </div>
   </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  <v-container v-else class="text-xs-center" mt-5>
        <h2>¿Cómo te gustaria<br> que te llame?</h2>
        <v-flex my-3>
          <input type="text" placeholder="Tu nombre" v-model="name">
        </v-flex>
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
        switch (this.information) {
          case 'levelOne':
            return dataLeo.datainformacion
            break;
          case 'levelTwo_1':
          console.log('nivel 2')
            return dataLeo.dataLeveltwo_1
            break;
          case 'levelTwo_2':
            return dataLeo.dataLeveltwo_2
            break;
          case 'levelTwo_3':
            return dataLeo.dataLeveltwo_3
            break;
          case 'levelTwo_4':
            return dataLeo.dataLeveltwo_4
            break;
          case 'levelTwo_5':
            return dataLeo.dataLeveltwo_5
            break;
          case 'levelThree_1':
            return dataLeo.dataLevelthree_1
            break;
          default:
            console.log('no funciona')
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
          firebase.auth().onAuthStateChanged((user) => {
            let userUID = user.uid;
            let userRef = firebase.database().ref('usuarios/' + userUID);
            userRef.update({
                "nickname": this.name
            })
          })
          EventBus.$emit('change-state', {state: true})
      },
      nextStteper(index){
        this.e1= index+2
        if(this.information === 'levelOne' && (index + 1) === dataLeo.datainformacion.length){
          EventBus.$emit('change-sab', {state: true})
        }
        // level 2
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
        // level 3
        if(this.information === 'levelThree_1'){/* && (index + 1) === dataLeo.dataLevellthree_1.length */
          EventBus.$emit('change-sectorInvertir', false)
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
<style scoped>

.font-weight-regular {
  color: #333;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  padding: 12% 15%;
}
.divNube{
  background-image: url("http://subirimagen.me/uploads/20181123205100.png");
  background-size: 100% ;
  margin-top: 0%;
  height: 210px;
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contentNube {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contentLeoBtn {
  display: inline-block;
  justify-content: center;
  align-items: center;
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

v-stepper-content{
  margin: 0px
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
 #bae {
   background-color: #92B0FF;
   /* background-image: url('http://subirimagen.me/uploads/20181129092953.png'); */
 }

</style>
