<template>
    <v-container class="text-xs-center">
        <v-flex mt-4>
            <h2>¿Qué factores debes tener en cuenta al momento de invertir?</h2>
        </v-flex>
        <v-flex mt-4>
          <v-btn flat large @click="changeFactor(0)"
                     slot="activator"
             class="btnEco">
              <div>
                  <h4>Sectores, empresas y otros</h4>
              </div>
          </v-btn>
          <v-btn flat large @click="changeFactor(1)"
             slot="activator"
             class="btnEco">
              <div>
                  <h4>Mercado y recomendaciones</h4>
              </div>
          </v-btn>
          <v-btn  flat large @click="changeFactor(2)"
                     slot="activator"
             class="btnEco">
              <div>
                  <h4>Mercado local, sectores y empresas</h4>
              </div>
          </v-btn>
        </v-flex>
        <v-flex mt-4>
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
    </v-container>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'
 export default {
  name: "Inform",
  data() {
      return {
        btnActivator: false,
        factorOption: '',
      }
  },
  methods: {
      nextLevelTwo(){
        if(this.factorOption === 2) {
          EventBus.$emit('change-leoTwo_5', true)
        } else {
          console.log('te equivocaste')
        }
      },
      changeFactor(factorOption) {
        this.factorOption = factorOption;
        this.btnActivator = true;
        console.log(this.factorOption)
      }
  }
};
</script>
<style>

.btnEco {
  width: 80%;
  padding: 12%;
  border: 3px solid #1B2A6F;
 border-radius: 10px

}
.btn-Eco{
      width: 100%;
      border-radius: 8rem
    }
</style>
