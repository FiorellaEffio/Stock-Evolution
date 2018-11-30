<template>
  <div>
    <div v-if="showLeo">
      <leo-component v-if="stateOne" :information="informationLevelThree"></leo-component>
      <nivel-component v-else :levels = '4'></nivel-component>
    </div>
    <div v-else>
      <sectores-component  v-if="stateSectores"></sectores-component>
    </div>
  </div>
</template>
<script>
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
					informationLevelTwo: 'levelThree_1'
        }
		},
		created() {
			EventBus.$on('change-sectorInvertir', (value)=>{
        this.showLeo = false
        this.stateSectores = true
      })
		},
    methods:{

		},
		 components:{
    'leo-component': leo,
		'nivel-component': nivel,
		'sectores-component': sectores,
    }
}
</script>
