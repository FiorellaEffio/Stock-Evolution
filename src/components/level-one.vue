<template>
  <div>
    <div v-if="!stateSab">
      <leo-component v-if="stateOne" information="levelOne"></leo-component>
      <nivel-component v-else :levels = '2'></nivel-component>
    </div>
    <sab-component v-else></sab-component>
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
