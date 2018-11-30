<template>
 <div class="fondo-color" v-bind:class="{fondo: !stateOne}">
   <v-flex mt-4 ml-5 pl-4 v-if="stateOne">
     <img src="http://subirimagen.me/uploads/20181123143029.png" width="75%">
   </v-flex>
   <v-flex class="level-zero">
     <leo-component v-if="stateOne"></leo-component>
     <nivel v-else :levels='1'></nivel>
   </v-flex>
 </div>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'
import leo from '@/components/Leo'
import nivel from '@/components/nivel'
import firebase from 'firebase'
export default {
  name: 'level_zero',
  data () {
    return {
      alert: false,
      stateOne: true,
    }
  },
  created(){
    EventBus.$on('change-state', (value)=>{
      this.stateOne = false;
      console.log(this.stateOne)
    })
  },
  components:{
      'leo-component': leo,
      nivel
    }
}
</script>

<style media="screen" scoped>
.fondo-color {
  background-color: #92B0FF;
}
.fondo {
  background-image: url('http://subirimagen.me/uploads/20181123142846.png');
}
.level-zero {
  margin-top: -10%;
}
</style>
