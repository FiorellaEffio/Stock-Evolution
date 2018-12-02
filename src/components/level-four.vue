<template>
    <div class="fondo-claro" v-bind:class="{fondooscuro: !stateOne}">
        <nav-component v-if="stateOne"></nav-component>
        <div v-if="showLeo">
            <leo-component v-if="stateOne" :information="informationLevelFour"></leo-component>
            <nivel-component v-else :levels = '5'></nivel-component>
        </div>
        <div v-else>
            <sectores-component v-if="stateSectores" levelFour="compraL4"></sectores-component>
            <acciones-component v-else :propNoticia="propNoticia"></acciones-component>
        </div>
    </div>    
</template>
<script>
import nivel from '@/components/nivel'
import leo from '@/components/Leo'
import {EventBus} from '@/plugins/EventBus.js'
import acciones from '@/components/acciones'
import nav from '@/components/Nav'
import sectores from '@/components/sectores-inversion'
export default {
    name: 'level-four',
    data(){
        return {
            stateOne: true,
            showLeo: true,
            stateSectores: false,
            informationLevelFour: 'levelThFour_1',
            propNoticia: ''
        }
    },
    created() {
        EventBus.$on('change-inforAcciones', (value)=>{
        this.showLeo = false
        this.stateSectores = false
        }),
        EventBus.$on('view-sectoresInversion', (value)=>{
        this.stateSectores = value
        }), 
        EventBus.$on('change-LevelFour_2', (value)=>{
            this.showLeo = true
            this.stateSectores = false,
            this.informationLevelFour = 'levelThFour_2'
        })
        EventBus.$on('change-inversion', value => {
            this.showLeo = value
            this.propNoticia = false
        })
        EventBus.$on('change-leoFour_3', (value)=>{
            this.showLeo = true
            this.stateSectores = false,
            this.informationLevelFour = 'levelThFour_3'
        })
        EventBus.$on('change-nivelFive', (value)=>{
            this.stateOne = false
        })
    },
     components:{
        'leo-component': leo,
        'nivel-component': nivel,
        'acciones-component': acciones,
        'nav-component' : nav,
        'sectores-component': sectores,
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

