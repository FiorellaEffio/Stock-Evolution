<template>
    <v-container class="text-xs-center">
        <v-flex mt-4>
            <h2>¿Qué factores debes tener en cuenta al momento de invertir?</h2>
        </v-flex>
        <v-flex mt-4>
          <v-flex b-5>
            <v-btn flat large
                       slot="activator"
               class="btnEco">
                <div>
                    <h4>Sectores, empresas y otros</h4>
                </div>
            </v-btn>
          </v-flex>

          <v-btn flat large
                     slot="activator"
             class="btnEco">
              <div>
                  <h4>Sectores, empresas y otros</h4>
              </div>
          </v-btn>
          <v-btn flat large
                     slot="activator"
             class="btnEco">
              <div>
                  <h4>Sectores, empresas y otros</h4>
              </div>
          </v-btn>
        </v-flex>
        <v-flex mt-4>
          <v-btn
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
/* eslint-disable */
import {EventBus} from '@/plugins/EventBus.js'
 export default {
  name: "Inform",
  data() {
      return {
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
