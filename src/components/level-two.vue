<template>
  <div class="fondo-claro" v-bind:class="{fondooscuro: !stateOne}">
    <Nav-component v-if="stateOne"></Nav-component>
    <div v-if="showLeo">
      <leo-component v-if="stateOne" :information="informationLevelTwo"></leo-component>
      <nivel-component v-else :levels = '3'></nivel-component>
    </div>
    <div v-else>
      <!-- mejorar con clase -->
      <question-component id="view1" v-if="stateQuestion" ></question-component>
      <inform-component id= "view2" v-if="stateInform"></inform-component>
      <economista-component id= "view3" v-if="stateEconomista"></economista-component>
      <sectores-component id="view4" v-if="stateSectores"></sectores-component>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import nivel from '@/components/nivel'
import leo from '@/components/Leo'
import {EventBus} from '@/plugins/EventBus.js'
import nav from '@/components/Nav'
import question from '@/components/level-two-questions'
import inform from '@/components/Inform'
import economista from '@/components/Economistas'
import sectores from '@/components/Sectores'

export default {
  name: 'leveltwo',
  data(){
		return {
      stateOne: true,
      showLeo: true,
      stateQuestion: false,
      stateInform: false,
      stateEconomista: false,
      stateSectores: false,
      informationLevelTwo: 'levelTwo_1'
		}
  },
  created() {
    EventBus.$on('change-question', (value)=>{
        this.showLeo = false
        this.stateQuestion = true
      })
    EventBus.$on('change-leoTwo_2', (value)=>{
      this.informationLevelTwo = "levelTwo_2"
      this.showLeo = value
    })
    EventBus.$on('change-inform', (value)=>{
      this.showLeo = value
      this.stateQuestion = false
      this.stateInform = true
    })
    EventBus.$on('change-leoTwo_3', (value)=>{
      this.informationLevelTwo = "levelTwo_3"
      this.showLeo = value
    })
    EventBus.$on('change-economista', (value)=>{
      this.showLeo = value
      this.stateInform = false
      this.stateEconomista = true
    })
    EventBus.$on('change-leoTwo_4', (value)=>{
      this.informationLevelTwo = "levelTwo_4"
      this.showLeo = value
    })
    EventBus.$on('change-sectores', (value)=>{
      this.showLeo = value
      this.stateEconomista = false
      this.stateSectores = true
    })
 
    EventBus.$on('change-nivel', (value)=>{
      this.showLeo = value
      this.stateSectores = false
      this.stateOne = false
    })
  },
  methods:{

  },
  components:{
    'leo-component': leo,
    'nivel-component': nivel,
    'question-component': question,
    'inform-component': inform,
    'economista-component': economista,
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
