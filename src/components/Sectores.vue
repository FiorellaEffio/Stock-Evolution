<template>
    <v-container class="text-xs-center">
        <div>
            <h2>Estos son los economistas que debes escuchar</h2>
        </div>
        <br>
        <div>          
            <div class="text-xs-center">
                <v-dialog
                 v-model="dialog"
                 width="500"
                >
                    <v-btn flat large 
                            slot="activator"

                    class="btnEco">
                     <div>
                         <h4>Fondo de<br>pensiones</h4>
                        <img src="http://subirimagen.me/uploads/20181126125307.png" width="60">
                       
                     </div>
                 </v-btn>
                </v-dialog>
                 
                <v-dialog 
                v-model="dialog"
                >
                      <v-btn flat large 
                      class="btnEco"
                      slot="activator"
                      >
                     <div>
                         <h4>Agrario</h4>
                        <img src="http://subirimagen.me/uploads/20181126130800.png" width="60" alt="">
                     </div>
                 </v-btn>
                
                </v-dialog>
            </div>              
             
                 <v-dialog>
                         <v-btn flat large class="btnEco" slot="activator">
                     <div>
                         <h4>Industrias</h4>
                        <img src="http://subirimagen.me/uploads/20181126131034.png" width="70" alt="">
                     </div>
                 </v-btn>
                  <v-card>
                     <v-card-title>
                         <h1>Industrias</h1>
                     </v-card-title>
                     <v-card-text>
                         <h3>Descripción<br>muajajajajjaa</h3>
                     </v-card-text>
                     <v-card-media>
                         <img src="http://subirimagen.me/uploads/20181126130800.png" width="60" />
                     </v-card-media>
                 </v-card>
                 </v-dialog>
        <v-dialog>
             <v-btn flat large class="btnEco" slot="activator">
                     <div>
                         <h4>Bancos y<br>finanzas</h4>
                        <img src="http://subirimagen.me/uploads/20181126131305.png" width="60" />
                     </div>
                 </v-btn>

        </v-dialog>
        <v-dialog>
            <v-btn flat large class="btnEco" slot="activator">
                     <div>
                         <h4>Mineras</h4>
                        <img src="http://subirimagen.me/uploads/20181126132144.png" width="60" alt=""/>
                     </div>
                 </v-btn>
        </v-dialog>
                <v-dialog> 
                  <v-btn flat large class="btnEco" slot="activator">
                     <div>
                         <h4>diversas</h4>
                        <img src="http://subirimagen.me/uploads/20181126132301.png" width="60" alt=""/>
                     </div>
                 </v-btn>
            </v-dialog>  
        </div>
         <v-btn
        class="btn-Eco"
          color="red"
          dark
        @click="nextLevelTwo()"
        >
          Continue
        </v-btn>
    </v-container>
</template>
<script>
/* eslint-disable */
import {EventBus} from '@/plugins/EventBus.js'
 export default {
  name: "Inform",  
  data() {
      return {
          dialog: false
      }
  },
  methods: {
      nextLevelTwo(){
          EventBus.$emit('change-leoTwo_5', true)
      }
  }

};
</script>
<style>

.btnEco {
  width: 135px;
  height: 125px;
  border: 3px solid #1B2A6F;
 border-radius: 10px

}
.btn-Eco{
      width: 215px;
      border-radius: 8rem
    }
</style>