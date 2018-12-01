<template>
    <div class="text-xs-center divSab">
      <v-card-title class="headline">¿Recuerdas que es una SAB?</v-card-title>
      <v-card-text>Una sociedad Agente de Bolsa (SAB) es la única _________ financiera _______________ del mercado bursátil que esta autorizada a la compra y venta que los ____________ solicitan; a cambio cobran una comisión, que es determinada libremente por cada una de ellas.</v-card-text>

        <button v-for="(item, index) in radio" class="divRadio">
        <span><input type="radio" class="inlineinput" name="tr" :value="index" v-model="answer">{{item}}</span>
        </button>

      	<v-btn
      class="btn-leo"
        color="red"
        dark
        @click="nextleo()"
      >
        Continue
      </v-btn>
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
    </div>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'
export default {
  name: 'questions',
  data(){
      return {
        snackbar: false,
        color:'red',
        mode: 'vertical',
        timeout: 6000,
        text: 'Respuesta incorrecta :(, intenta de nuevo',
				radioGroup: 1,
        selected: false,
        answer: 0,
				radio: ['entidad/intermediaria/ inversionista', 'intermediaria/intermediaria/ señores', 'entidad/acompañada/bancos']
			}
  },
  methods: {
		nextleo(){
      console.log(this.answer)
      if(this.answer === 0) {
        console.log('envie leo')
        EventBus.$emit('change-leoTwo_2', true)
      } else {
        this.snackbar = true;
      }
		}
  }
}
</script>
<style scoped>
input{
  width: 20px
}
.divRadio{
  display: inline-block;
  width: 90%;
  font-size: 16px;
  border: 2px solid navy;
  margin: 3px;
  padding: 2px;
  border-radius: 8rem
}

.divSab{
  padding: 5%;
  /* text-align: justify; */
  font-size: 18px
}

.inlineinput{
  float: left;
}

</style>
