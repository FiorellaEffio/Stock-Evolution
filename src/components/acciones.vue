<template>
    <div id="app">
        <v-app id="inspire">
            <v-card
            class="mx-auto"
            max-width="600"
            >
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-window v-model="step">
        <v-spacer></v-spacer>
      <v-window-item :value='1'>
          <div class="pa-3 text-xs-center">
            <h3 class="title font-weight-light mb-2">Estas son tus acciones</h3>
            <v-spacer></v-spacer>
            <v-img
              class="mb-3"
              contain
              height="250"
              src='http://subirimagen.me/uploads/20181123161725.png'
            ></v-img>
            <div class="text-xs-center inversion" >
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>                
                <div class="acciones-descr">
                    <h3 class="title font-weight-light mb-2">200 acciones en Alicorp</h3>
                    <h4>$1000 invertidos</h4>
                    <span>Compra: $5   Venta: $5.1</span>
                </div>
                <h4>Ultima noticia hace 10 min >></h4>
            </div>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            
            <span class="caption grey--text">*Recuerda tomar acciones si crees que es necesario</span>
          </div>
        </v-window-item>
      </v-window>
        
    </v-card>
    <v-card-actions class="text-xs-center">
        <v-spacer></v-spacer>
        <v-btn
          color="red"
          dark
          @click="regresarLevelThree()"
        >
            Invertir
        </v-btn>
      </v-card-actions>
      <!-- modal -->
  </v-app>
    <div id="app">
        <v-app id="inspire">
            <v-layout row justify-center>
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
                <v-card class="modal">
                    <v-toolbar dark color="primary">                        
                    <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn icon dark @click="dialog = false">
                            <v-icon>close</v-icon>
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                    </v-list>
                    <div class="text-xs-center modal" >
                        <v-spacer></v-spacer>
                        <v-spacer></v-spacer>                
                        <div class="description-modal">
                            <h3 class="title mb-4">Noticia Importante</h3>
                            <h3 class="title font-weight-light mb-2">Alicorp aprovecha bajas tasas de interés y emite con exito US$ 450 millones de bonos. El monto recaudado será destinado para financiar futuras adquisiciones de empresas</h3>
                            <v-spacer></v-spacer>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="text-xs-center">
                    <v-btn
                    color="red"
                    dark
                    @click="help()"
                    >
                        AYUDA
                    </v-btn>
                    <v-btn
                    color="blue"
                    dark
                    @click="close()"
                    >
                        CERRAR
                    </v-btn>
                    </div>
                </v-card>
            </v-dialog>
            </v-layout>
        </v-app>
    </div>
</div>
</template>
<script>
import {EventBus} from '@/plugins/EventBus.js'
export default {
    name: 'acciones',
    props: ['propNoticia'],
    data(){
        return {
            step: 1,
            dialog: true,
            notifications: false,
            sound: true,
            widgets: false
        }
    },
    // falta arreglar propNoticia
    computed:{
        modal: function () {
            this.dialog = this.propNoticia;
            return true
        }
    },
    methods: {
        regresarLevelThree(){
            EventBus.$emit('view-sectoresInversion', true)
        },
        help(){
            EventBus.$emit('change-LevelFour_2', true)
        },
        close(){
            this.dialog = false
        }
    }
}
</script>
<style scoped>
.theme--light.application, .theme--light.v-stepper, .theme--light.v-card{
    background: none;
}
.v-card{
    box-shadow: none !important
}
.inversion, .acciones-descr {
    border-radius: .5em
}
.inversion{
    color: #fff;
    background: red;    
}
.acciones-descr{
    background: #ee798c
}
.modal{
    background: #fff !important
}
.modal{
    margin: 20px 10% 40px;
}
</style>

