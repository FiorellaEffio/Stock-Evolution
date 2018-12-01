<template>
  <v-container class="text-xs-center">
    <v-flex mt-4>
      <h2>¿Qué factores debes tener en
        <br>cuenta al momento de
        <br>invertir?
      </h2>
    </v-flex>
    <v-flex mt-5>
      <v-btn flat large @click="changeFactor(0)" slot="activator" class="btnEco">
        <div>
          <h4>Sectores, empresas
            <br>y otros
          </h4>
        </div>
      </v-btn>
      <v-btn flat large @click="changeFactor(1)" slot="activator" class="btnEco">
        <div>
          <h4>Mercado y recomendaciones</h4>
        </div>
      </v-btn>
      <v-btn flat large @click="changeFactor(2)" slot="activator" class="btnEco">
        <div>
          <h4>Mercado local, sectores
            <br>y empresas
          </h4>
        </div>
      </v-btn>
    </v-flex>
    <div>
      <v-btn :disabled="!btnActivator" color="red" @click="nextLevelTwo()" class="btnSec">Continue</v-btn>
    </div>
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
import { EventBus } from "@/plugins/EventBus.js";
export default {
  name: "Inform",
  data() {
    return {
      color:'red',
      btnActivator: false,
      factorOption: "",
      snackbar: false,
      mode: 'vertical',
      timeout: 6000,
      text: 'Respuesta incorrecta :(, intenta de nuevo'
    };
  },
  methods: {
    nextLevelTwo() {
      if (this.factorOption === 2) {
        EventBus.$emit("change-leoTwo_5", true);
      } else {
        this.snackbar = true;
        console.log("te equivocaste");
      }
    },
    changeFactor(factorOption) {
      this.factorOption = factorOption;
      this.btnActivator = true;
      console.log(this.factorOption);
    }
  }
};
</script>
<style scoped>
.btnSec {
  border-radius: 0.8em;
  width: 225px;
  height: 40px;
}

.textBtn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnEco {
  width: 270px;
  height: 75px;
  padding: 5px;
  border: 2px solid #1b2a6f;
  border-radius: 8rem;
}
.btn-Eco {
  width: 100%;
  border-radius: 8rem;
}
</style>
