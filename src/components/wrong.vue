<template>
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
</template>
<script type="text/javascript">
import {EventBus} from '@/plugins/EventBus.js'
  export default {
    el: 'wrong',
    data () {
      return {
        snackbar: false,
        color: 'error',
        mode: 'vertical',
        timeout: 6000,
        text: 'Respuesta incorrecta :(, intenta de nuevo'
      }
    },
    created() {
      EventBus.$on('wrong-answer', (value)=>{
        this.snackbar = true
      })
    }
  }
</script>
