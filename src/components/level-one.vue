<template>
  <div class="fondo-claro" v-bind:class="{fondooscuro: !stateOne}">
    <Nav-component v-if="stateOne"></Nav-component>
      <div v-if="!stateSab">
        <leo-component v-if="stateOne" :information="'levelOne'">
        </leo-component>
        <nivel-component v-else :levels = '2'>
        </nivel-component>
      </div>
      <v-flex v-else mt-4>
        <sab-component ></sab-component>
      </v-flex>
  </div>
</template>
<script>
import leo from '@/components/Leo'
import nivel from '@/components/nivel'
import nav from '@/components/Nav'
import sab from '@/components/Sab'
import {EventBus} from '@/plugins/EventBus.js'
export default {
    name: 'levelOne',
    data(){
        return {
            stateOne: true,
            stateSab: false
        }
    },
    created(){
      EventBus.$on('change-sab', (value)=>{
        this.stateSab = true;
        console.log('llego')
      })
      EventBus.$on('change-state-sab', (value)=>{
        this.stateSab =false;
        this.stateOne = false
        console.log('llego sab')
      })
    },
  computed: {
  },
  components:{
    'leo-component': leo,
    'nivel-component': nivel,
    'sab-component': sab,
    'Nav-component' : nav
  }
}
</script>
<style media="screen" scoped>
  .fondo-claro {
    background-image: url('http://subirimagen.me/uploads/20181129111939.png');
  }
  .fondooscuro {
    background-image: url('http://subirimagen.me/uploads/20181123142846.png') !important;
  }

  @media only screen and (min-width: 600px){
    .fondooscuro {
    background-image: url('http://subirimagen.me/uploads/20181123142846.png') !important;
    width: 100vw;
    /* height: 100vh; */
  
  }
  }
</style>
