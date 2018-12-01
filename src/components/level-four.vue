<template>
    <div>
        <h1>fourrrrrrrrrr</h1>
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
export default {
    name: 'level-four',
    data(){
        return {

        }
    }
}
</script>

