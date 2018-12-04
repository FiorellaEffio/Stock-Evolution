<template>
<v-container>
  <v-flex>
    <h3 class="font-weight-bolder text-xs-center">Mira este otro ejemplo</h3>
  </v-flex>
  <div class="imgExample">
      <img src="http://subirimagen.me/uploads/20181202231321.png" width="285px" alt="ejemplo">
  </div>
   <div class="btnDiv">
       <v-btn
       class="btn-leo"
         color="red"
         dark
         @click="nextStteper()"
       >
         Continue
       </v-btn>
     </div>
</v-container>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'
export default {
  name:'ejemplo',
  data(){
    return {

    }
  }, 
  methods:{
    nextStteper(){
      EventBus.$emit("change-vm", true);
    }
  }
}
</script>
<style scoped>
    .imgExample{
        margin-top: 30px;
        margin-bottom: 50px;
        margin-inline-start: 9%
    }
    .btn-leo{
      border-radius: .8em;
      width: 225px;
      height: 40px;
    }
    .btnDiv{
        display: flex;
  justify-content: center;
  align-items: center;
    }
</style>