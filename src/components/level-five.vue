<template>
    <div class="fondo-claro" v-bind:class="{fondooscuro: !stateOne}">
        <nav-component v-if="stateOne"></nav-component>
        <div v-if="showLeo">
            <leo-component v-if="stateOne" :information="informationLevelFive"></leo-component>
            <nivel-component v-else :levels = '6'></nivel-component>
        </div>
        <div v-else>
            <vf-component v-if="stateVF"></vf-component>
            <vm-component v-if="stateVM"></vm-component>
            <ejemplo-component v-if="stateEjm"></ejemplo-component>
            <ejemplo2-component v-if="stateEjm2"></ejemplo2-component>
        </div>
    </div>
</template>
<script>
import nivel from '@/components/nivel'
import leo from '@/components/Leo'
import {EventBus} from '@/plugins/EventBus.js'
import vf from '@/components/valor-fundamental'
import vm from '@/components/valor-mercado'
import ejemplo from '@/components/ejemplo'
import ejemplo2 from '@/components/ejemplo2'
import nav from '@/components/Nav'
import levelFourVue from './level-four.vue';
export default {
    name: 'level-five',
    data(){
        return {
            stateOne: true,
            showLeo: true,
            stateVF: false,
            stateVM: false,
            stateEjm: false,  
            stateEjm2: false, 
            informationLevelFive: 'levelFive_1',
            propNoticia: ''
        }
    },
    created() {
        EventBus.$on('change-valorFundamental', (value)=>{
        this.showLeo = false
        this.stateVF = value
        })
        EventBus.$on('change-leoFive2', (value)=>{
            this.showLeo = value
            this.stateVF = false
            this.informationLevelFive = 'levelFive_2'
        })
        EventBus.$on('change-ejemplo', (value)=>{
            this.showLeo = value
            this.stateEjm = true
        })
        EventBus.$on('change-ejemplo2', (value)=>{
            this.stateEjm = false
            this.stateEjm2 = true
        })
        EventBus.$on('change-vm', (value)=>{
            this.stateEjm2 = false
            this.stateVM = true
        })
        EventBus.$on('change-nivel', (value)=>{
            this.stateVM = false
            this.showLeo = true
            this.stateOne = false
        })
        },
    components:{
        'leo-component': leo,
        'nivel-component': nivel,
        'vf-component': vf,
        'nav-component' : nav,
        'vm-component': vm,
        'ejemplo-component': ejemplo,
        'ejemplo2-component': ejemplo2,
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
