<template>
  <div>
    <div v-if="!stateQuestions">
      <leo-component v-if="stateOne" information="levelTwo"></leo-component>
    <nivel-component v-else :levels = '2'></nivel-component>
    </div>    
    <question-component v-else></question-component>  
  </div>
</template>
<script>
/* eslint-disable */ 
import nivel from '@/components/nivel'
import leo from '@/components/Leo'
import question from '@/components/level-two-questions'
import {EventBus} from '@/plugins/EventBus.js'
export default {
  name: 'leveltwo',
  data(){
		return {
      stateOne: true,
      stateQuestions: false
		}
  },
  created() {
    EventBus.$on('change-question', (value)=>{        
        this.stateQuestions = true
      })
  },
  methods:{

  },
  components:{
    'leo-component': leo,
    'nivel-component': nivel,
    'question-component': question
    }

}
</script>
<style scoped>

</style>
