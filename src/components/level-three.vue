<template>
  <div class="fondo-claro" v-bind:class="{fondooscuro: !stateOne}">
    <Nav-component v-if="stateOne"></Nav-component>
    <div v-if="showLeo">
      <leo-component v-if="stateOne" :information="informationLevelThree"></leo-component>
      <nivel-component v-else :levels = '4'></nivel-component>
    </div>
    <div v-else>
      <sectores-component v-if="stateSectores"></sectores-component>
    </div>
  </div>
</template>
<script>
import nav from '@/components/Nav'
import nivel from '@/components/nivel'
import leo from '@/components/Leo'
import {EventBus} from '@/plugins/EventBus.js'

import sectores from '@/components/sectores-inversion'
export default {
    name: 'level-three',
    data(){
        return {
					stateOne: true,
					showLeo: true,
					stateSectores: false,
					informationLevelThree: 'levelThree_1'
        }
		},
		created() {
			EventBus.$on('change-sectorInvertir', (value)=>{
        this.showLeo = false
        this.stateSectores = true
      })
      EventBus.$on('change-inLevelthree', (value)=>{
        this.showLeo = true
        this.stateSectores = value        
        this.informationLevelThree = 'levelThree_2'
      })
      EventBus.$on('change-nivelFour', (value)=>{
        this.stateOne = false
        
      })
		},
		 components:{
    'leo-component': leo,
		'nivel-component': nivel,
		'sectores-component': sectores,
    'Nav-component' : nav
    }
}
</script>
<style scoped>
.fondo-claro {
  background-image: url('http://subirimagen.me/uploads/20181129111939.png');
}
.fondooscuro {
  background-image: url('http://subirimagen.me/uploads/20181123142846.png') !important;
}
</style>
