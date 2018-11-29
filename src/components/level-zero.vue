<template>
 <!-- leo y nivel -->
 <div id="back">
    <leo-component v-if="stateOne">{{state}}}</leo-component>
    <nivel v-else :levels = '1'></nivel>
    <router-view/>
 </div>

</template>

<script>
/* eslint-disable */
import {EventBus} from '@/plugins/EventBus.js'
import leo from '@/components/Leo'
import nivel from '@/components/nivel'
import firebase from 'firebase'
export default {
  name: 'level_zero',
  data () {
    return {
      alert: false,
      stateOne: true,
    }
  },
  computed: {
    state: function () {
      EventBus.$on('change-state', value => {
        this.stateOne = false;
        return true;
      })/*
      EventBus.$off('change-state'); */
    }
  },
  components:{
      'leo-component': leo,
      nivel
    }

}
</script>

<style media="screen" scoped>
#back {
  background-image: url('http://subirimagen.me/uploads/20181129092953.png');
}
</style>
