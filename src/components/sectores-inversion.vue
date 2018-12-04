<template>
    <div class="text-xs-center">
        <v-card-title class="headline">{{titulo}}</v-card-title>
        <v-app id="inspire" v-if="!compraVenta">
            <v-container fluid grid-list-xl>
            <v-layout wrap align-center>
                <v-flex xs12 sm6 d-flex>
                <v-select
                    :items="items"
                    :label="state"
                    outline
                    @change="changeSector"
                ></v-select>
                </v-flex>
            </v-layout>
           <!--  steppers -->
            <div id="app" v-if="changeEmpresa !== ''">
            <v-app id="inspire">
                <v-stepper v-model="e1">
                <v-stepper-header  v-show="false" >
                    <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content class="content" step="1">
                    <v-card
                        class="cardDescrip"
                        height="140"
                    >
                    <v-flex >
                    <h3 ><img :src="img" alt="" width="45px"> {{sectorTitle}}:</h3>
                     </v-flex>
                    <v-card-text>{{description}}</v-card-text>
                    </v-card>
                  <!--   template lista de imagenes -->
                    <div v-if="state=='sector'">
                            <div>
                                    <div flat  
                            v-for="(item, key) in empresas[0]"
                            :key="key"
                            >
                                        <img :src="item.src" width="80px" height="55px" alt="">
                                    
                                </div>
                            </div>
                        
                            </div>
                         <v-btn
                    class="btn-inver"
                    color="red"
                    dark
                    @click="elegirEmpresa()"
                    >
                    Confirmar
                    </v-btn>
              
                    </v-stepper-content>
                </v-stepper-items>
                </v-stepper>
            </v-app>
            </div>

            </v-container>
        </v-app>
        <!--  template venta -->
        <v-layout v-else>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-title primary-title>
                        <v-flex class="content-desccription">
                            <div class="description">
                                <h4 class="headline mb-0 red--text" color="warning">Compra: S/.{{vcompra}}</h4>
                                <h5>Indica que las personas estan comprando acciones a S/.{{vcompra}}</h5>
                            </div>
                            <div class="description">
                                <h4 class="headline mb-0 green--text">Venta: S/.{{vventa}}</h4>
                                <h5>Indica que las personas estan vendiendo sus acciones a S/.{{vventa}}</h5>
                            </div>
                        </v-flex>
                    </v-card-title>
                    <v-img
                    src="http://subirimagen.me/uploads/20181204135715.png"
                    aspect-ratio="2.75"
                    ></v-img>
                </v-card>
                <v-card class="content-input">
                    <!-- <span class="input" vmodel="countStock">{{acciones}}:</span> -->
                    <v-flex xs6 md4 class="input">
                        <v-text-field
                        v-model="valor"
                        color="blue-grey"
                        label="Acciones"
                        class='input-value'
                        ></v-text-field>
                    </v-flex>
                    <strong class="input">TOTAL: {{compra}}</strong>
                </v-card>
                <v-btn
                        class="btn-leo"
                        color="red"
                        dark
                        @click="comprar()"
                        >
                        Comprar
                </v-btn>
                <v-btn
                        class="btn-leo"
                        color="blue"
                        dark
                        @click="vender()"
                        >
                        Vender
                </v-btn>
        </v-flex>
    </v-layout>
    </div>
</template>
<script>
import dataFinaciero from '@/plugins/data_financiero.js'
import firebase from 'firebase'
import {EventBus} from '@/plugins/EventBus.js'
export default {
    name: 'sectores-inversion',
    props: ['levelFour'],
    data(){
        return {
            keyData: [],// todo el dato de firebase /sectores
            empresas: [], // informacion de las empresas del sector
            items: [], // lista de nombres para el select
            // informacion para template
            description: '',
            img: '',
            titulo: 'Seleccione el sector donde quiera invertir',
            state: 'sector',
            e1: 0,
            compraVenta: false,
            acciones: 'Comprar',
            valor: 0,
            changeEmpresa: '',
            sectorTitle: '',
            vcompra: 0,
            vventa: 0,
            sectorName:'',
        }
    },
    created(){
        this.firebaseSectores()
    },
    computed: {
        compra: function () {
            return this.valor * this.vventa;
        }
    },
    methods:{
        firebaseSectores(){
            const data = firebase.database().ref().child('sectores/')
            data.once('value', value => {
                this.keyData = value.val()
                this.items = Object.keys(value.val())
            })
        },
        elegirEmpresa(){
            if( this.state !== 'empresa'){
                this.titulo = 'Seleccione una empresa del sector ' + this.changeEmpresa
                this.state = 'empresa'
                this.items = Object.keys(this.empresas[0])
                this.changeEmpresa = ''
            }else{
                this.compraVenta = true
                this.titulo = 'Compra y venta de acciones de '+this.changeEmpresa
            }
        },
        comprar(){
            if(this.levelFour !== 'compraL4'){
               let self = this;
               this.acciones = 'Compra'
               firebase.auth().onAuthStateChanged((user) => {
                 let userUID = user.uid;
                 let userRef = firebase.database().ref('usuarios/' + userUID);
                 userRef.once('value', (snapshot) => {
                     let userData = JSON.stringify(snapshot.val(), null, 3);
                     userData = JSON.parse(userData);
                     let lastMonto = userData.monto;
                     userRef.update({
                         "monto": lastMonto - self.compra,
                     })
                     firebase.database().ref('usuarios/' + userUID + '/acciones').push({
                         sector: self.sectorName,
                         inversion: self.compra,
                         company: self.changeEmpresa,
                         cantidad: self.valor,
                     })
                 })
                 c
                 let stockRef = firebase.database().ref('sectores/' + self.sectorName + '/empresas/' + this.changeEmpresa);
                 stockRef.once('value', (snapshot) => {
                     let stockData = JSON.stringify(snapshot.val(), null, 3);
                     stockData = JSON.parse(stockData);
                     let lastCantidad = stockData.cantidad;
                     stockRef.update({
                         "cantidad": lastCantidad - this.valor,
                     })
                 })
                 EventBus.$emit('changeUserData', true)
               })
                EventBus.$emit('change-inLevelthree', false)
            }
            else{
                EventBus.$emit('change-leoFour_3', true)
            }

        },
        vender(){
            this.acciones = 'venta'
            this.compra = this.valor * 5
            EventBus.$emit('change-inLevelthree', false)
        },
        changeSector(correct){
            this.changeEmpresa = correct
            if(this.state !== 'empresa'){
              let sectorName = this.changeEmpresa;
              this.sectorTitle = this.keyData[sectorName].descripcion.titulo;
              Object.keys(this.keyData).forEach(element => {
                  if(element === correct){
                      this.description = this.keyData[element].descripcion.texto
                      this.img = this.keyData[element].descripcion.src
                      this.empresas = [this.keyData[element].empresas]
                  }
              })
              this.sectorName = sectorName;
            } else {
              this.state = 'empresa';
              this.sectorTitle = 'Empresa '+ correct;
              this.description = this.empresas[0][correct].texto;
              this.img = this.empresas[0][correct].src
              this.vcompra = this.empresas[0][correct].vcompra
              this.vventa = this.empresas[0][correct].vmercado
            }
        }
    }
}
</script>
<style scoped>
.v-card{
    box-shadow: none !important
}
.application--wrap{
    min-height: 20px !important;
    height: 50px;
}
.theme--light.application, .theme--light.v-stepper, .theme--light.v-card{
    background: none;
}

.cardDescrip{
    background-color: transparent;
    height: 90px;
}
.imgDiv{
    width: 100%;
    float: left;
}

/* .divConfirm{

} */
.content-desccription {
    display: flex;
}
.description{
    width: 50%;
}
.content-input{
    display: flex;
    flex-direction: column;
    margin: 10px 20%;
}
.input{
    margin: auto;
}
.btn-inver{
    margin-bottom: 12px;
    margin-top: 12px;
}
.input-value{
    border: 1px solid;
    border-bottom: none;
    border-radius: .8em;
}
.v-menu__content {
  margin-top: 100px !important;
  background-color: #333 !important;
  color: blue !important;
}
.content{
    height: 350px
}
</style>
