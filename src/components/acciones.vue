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
            <div class="text-xs-center inversion" v-for="stock in userStock">
                <div class="acciones-descr">
                    <h3 class="title font-weight-light mb-2">{{stock.cantidad}} acciones en {{stock.company}}</h3>
                    <h4>S/.{{stock.inversion}} invertidos</h4>
                    <span>Compra: S/.{{stock.vcompra}}   Venta: S/.{{stock.vventa}}</span>
                </div>
                <h4>Ultima noticia hace 10 min >></h4>
                <v-flex mb-3></v-flex>
            </div>
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
                <v-btn slot="activator" color="primary" dark>Ver Noticia</v-btn>
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
import firebase from 'firebase'
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
            widgets: false,
            userStock: [],
        }
    },
    // falta arreglar propNoticia
    computed:{
        modal: function () {
            this.dialog = this.propNoticia;
            return true
        }
    },
    beforeCreate() {
      let self = this;
      firebase.auth().onAuthStateChanged((user) => {
        let userUID = user.uid;
        let userRef = firebase.database().ref('usuarios/' + userUID);
        userRef.on('value', value => {
            const keyData = value.val()
            Object.keys(keyData).forEach(element => {
              switch (element) {
                case "acciones":
                  let alternativeStock = [];
                  self.userStock = Object.values(keyData[element])
                  self.userStock.forEach(stock => {
                    let alternativeMiniStock = stock;
                    let stockRef = firebase.database().ref('sectores/' + stock.sector + '/empresas/' + stock.company);
                    stockRef.once('value', (snapshot) => {
                        let stockData = JSON.stringify(snapshot.val(), null, 3);
                        stockData = JSON.parse(stockData);
                        console.log(alternativeStock);
                        stock.vcompra = stockData.vcompra
                        stock.vventa = stockData.vmercado
                        alternativeMiniStock.cantidad = Object.values(stock)[0]
                        alternativeMiniStock.company = Object.values(stock)[1]
                        alternativeMiniStock.inversion = Object.values(stock)[2]
                        alternativeMiniStock.sector = Object.values(stock)[3]
                        alternativeMiniStock.vcompra = Object.values(stock)[4]
                        alternativeMiniStock.vventa = Object.values(stock)[5]
                        alternativeStock.push(alternativeMiniStock)
                    })
                  })
                  self.userStock = alternativeStock;
                  break;
                default:
              }
            })
        })
      })
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
