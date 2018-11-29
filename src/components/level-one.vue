<template>

  <div>

    <div v-if="!stateSab">
<<<<<<< HEAD
      <leo-component v-if="stateOne" information="levelOne"></leo-component>
=======
   
               <Nav-component></Nav-component>

             <leo-component v-if="stateOne" :information="true">
             </leo-component>
>>>>>>> b39dd777df3132a9d2c74b3cd1e5a7ee8e087895
      <nivel-component v-else :levels = '2'></nivel-component>
 
  
      
    </div>
    <sab-component v-else></sab-component>
  </div>
</template>
<script>
/* eslint-disable */
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
    stae: function () {

    }
  },
  components:{
    'leo-component': leo,
    'nivel-component': nivel,
    'sab-component': sab,
    'Nav-component' : nav
        }
}
</script>
