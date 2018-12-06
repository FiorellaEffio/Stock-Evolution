<template>
  <v-container class="text-xs-center">
    <v-flex mt-4>
      <h2>¿Cómo varía el valor del
        <br>mercado?
      </h2>
    </v-flex>
    <v-flex mt-5>
      <v-btn flat large @click="changeFactor(0)" slot="activator" class="btnEco">
        <div>
          <h5>De acuerdo a factores<br>externos tales como noticias<br> y eventos</h5>
        </div>
      </v-btn>
      <v-btn flat large @click="changeFactor(1)" slot="activator" class="btnEco">
        <div>
          <h5>Lo define un cáculo en el<br>que influye factores<br> propios de la empresa</h5>
        </div>
      </v-btn>
      <v-btn flat large @click="changeFactor(2)" slot="activator" class="btnEco">
        <div>
          <h4>Lo define la oferta
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
      if (this.factorOption === 0) {
        EventBus.$emit("change-nivel", true);
      } else {
        this.snackbar = true
      }
    },
    changeFactor(factorOption) {
      this.factorOption = factorOption
      this.btnActivator = true
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