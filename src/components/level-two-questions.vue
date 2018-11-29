<template>
    <v-card class="text-xs-center">
        <v-card-title class="headline">¿Recuerdas que es una SAB?</v-card-title>
        <v-card-text>Una sociedad Agente de Bolsa (SAB) es la única _________ financiera _______________ del mercado bursátil que esta autorizada a la compra y venta que los ____________ solicitan; a cambio cobran una comisión, que es determinada libremente por cada una de ellas.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-radio-group v-model="radioGroup">
            <v-radio
                v-for="(item, n) in radio"
                :key="n"
                :label="item"
                :value="item"
            >
						</v-radio>
          </v-radio-group>
					<v-spacer></v-spacer>
				
        </v-card-actions>
        	<v-btn
        class="btn-leo"
          color="red"
          dark
          @click="nextleo()"
        >
          Continue
        </v-btn>
      </v-card>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'
export default {
  name: 'questions',
  data(){
      return {
				radioGroup: 1,
				radio: ['entidad/intermediaria/inversionista', 'intermediaria/intermediaria/señores', 'entidad/acompañada/bancos']
			}
  },
  methods: {
		nextleo(){
			console.log('envie leo')
			EventBus.$emit('change-leoTwo_2', true)
		}
  }
}
</script>
<style scoped>

</style>

