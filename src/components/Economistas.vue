<template>
    <v-container class="text-xs-center">
      <v-flex mt-4>
        <h2>Selecciona un economista que debes escuchar al momento de invertir:</h2>
      </v-flex>
      <v-flex mt-5>
          <v-flex >
               <v-btn @click="changeEconomist('Julio Velarde')" flat large class="btnEco">
                   <div>
                       <h4>Julio<br>Velarde</h4>
                       <v-avatar
            slot="activator"
            size="75px"
          >
                      <img src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2017/11/08/000461860W.jpg" alt="">
                       </v-avatar>
                   </div>
               </v-btn>
                <v-btn @click="changeEconomist('wrong')" flat large class="btnEco">
                   <div>
                       <h4>Humberto<br>Chavez</h4>
                       <v-avatar
            slot="activator"
            size="75px"
          >
                      <img src="http://subirimagen.me/uploads/20181126011113.jpg" alt="">
                       </v-avatar>
                   </div>
               </v-btn>
          </v-flex>
           <v-flex>
                       <v-btn @click="changeEconomist('wrong')" flat large class="btnEco">
                   <div>
                       <h4>Fernando<br> Zavala</h4>
                       <v-avatar
            slot="activator"
            size="75px"
          >

                      <img src="http://subirimagen.me/uploads/20181126011359.jpg" alt="">
                       </v-avatar>
                   </div>
               </v-btn>
       <v-btn @click="changeEconomist('wrong')" flat large class="btnEco">
                   <div>
                       <h4>Santiago<br> Mendoza</h4>
                       <v-avatar
            slot="activator"
            size="75px"
          >

                      <img src="http://subirimagen.me/uploads/20181126011458.jpg" alt="">
                       </v-avatar>
                   </div>
               </v-btn>

          </v-flex>
      </v-flex>
      <v-flex mt-5>
        <v-btn
        :disabled="!btnActivator"
       class="btn-Eco"
         color="red"
         dark
           @click="nextLevelTwo()"
       >
         Continue
       </v-btn>
      </v-flex>
      <v-snackbar
        v-model="snackbar"
        :color="color"
        :multi-line="mode === 'multi-line'"
        :timeout="timeout"
        :vertical="mode === 'vertical'"
      >
        {{ text }}
        <v-btn
          dark
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
</template>

<script>
import wrong from '@/components/wrong'
import {EventBus} from '@/plugins/EventBus.js'
export default {
    name: 'economista',
  data() {
      return {
        btnActivator: false,
        economistName: '',
        snackbar: false,
        color: 'red',
        mode: 'vertical',
        timeout: 6000,
        text: 'Respuesta incorrecta :(, intenta de nuevo'
      }
  },
  components: {
  },
  methods: {
      nextLevelTwo(){
        if(this.economistName === "Julio Velarde") {
          EventBus.$emit('change-leoTwo_4', true)
        } else {
          this.snackbar = true;
          console.log('te equivocaste')
        }
      },
      changeEconomist(ecoName) {
        this.economistName = ecoName;
        this.btnActivator = true;
        console.log(this.economistName)
      }
  }
}
</script>
<style scoped>

.btnEco {
  width: 125px;
  height: 135px;
  border: 3px solid #1B2A6F;
  border-radius: 10px
}
.btn-Eco{
      border-radius: .8em;
      width: 215px
    }

</style>
