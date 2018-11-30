<template>
    <div class="text-xs-center">
        <v-card-title class="headline">{{titulo}}</v-card-title>
        <v-app id="inspire" v-if="!compraVenta">
            <v-container fluid grid-list-xl>           
            <v-layout wrap align-center>
                <v-flex xs12 sm6 d-flex>
                <!--     <select>
                        <option v-for="item in items" :key="item" @change="changeSector(item)">{{item}}</option>
                    </select>  -->            
                <v-select
                    v-model="option"
                    :items="items"
                    :label="state"
                    outline
                    @change="changeSector"
                ></v-select>
                </v-flex>
            </v-layout>
           <!--  steppers -->
            <div id="app" v-if="option !== ''">
            <v-app id="inspire">
                <v-stepper v-model="e1">
                <v-stepper-header  v-show="false" >
                    <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>  
                </v-stepper-header>  
                <v-stepper-items>
                    <v-stepper-content step="1">
                    <v-card
                        class="mb-5"
                        color="grey lighten-1"
                        height="250px"
                    >
                    <v-flex >
                            <v-btn flat large class="btnEco"
                            >
                                <div>
                                    <v-avatar
                                        slot="activator"
                                        size="80px"
                                        >
                
                                        <img :src="img" alt="">
                                        </v-avatar>
                                    </div>
                                </v-btn>
                    </v-flex>
                    <v-card-title class="headline">Descripcion:</v-card-title>
                    <v-card-text>{{description}}</v-card-text>        
                    </v-card> 
                  <!--   template lista de imagenes -->
                    <v-flex v-if="state=='sector'">
                            <v-btn flat large class="btnEco"
                            v-for="(item, key) in empresas[0]"
                            :key="key"
                            >
                                <div>
                                    <v-avatar
                                        slot="activator"
                                        size="45px"
                                        >
                
                                        <img :src="item.src" alt="">
                                        </v-avatar>
                                    </div>
                                </v-btn>
                            </v-flex> 
                     <v-btn
                    class="btn-leo"
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
                        <v-flex>
                            <div>
                                <h4 class="headline mb-0">Compra: $5.1</h4>
                                <div>Indica que las personas estan comprando acciones a $5.1</div>
                            </div>
                            <div>
                                <h4 class="headline mb-0">Compra: $5</h4>
                                <div>Indica que las personas estan vendiendo sus acciones a $5</div>
                            </div>
                        </v-flex>
                    </v-card-title>
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                    ></v-img>  
                </v-card>
                <v-card>
                    <span>{{accion}}:</span>
                    <v-flex xs12 md6>
                        <v-text-field
                        v-model="valor"
                        box
                        color="blue-grey"
                        label="Acciones"
                        ></v-text-field>
                    </v-flex>
                    <strong>TOTAL: {{compra}}</strong>
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
export default {
    name: 'sectores-inversion',
    data(){
        return {
            keyData: [],
            empresas: [],
            items: [],
            description: '',
            img: '',
            selectSector: 'electrico',
            titulo: 'Seleccione el sector donde quiera invertir',
            state: 'sector',
            e1: 0,
            showDescripcion: true,
            compraVenta: false,
            acciones: 0,
            compra: 0,
            valor: 0,
            option: ''
        }
    },
    created(){
        this.firebaseSectores()
    },
    computed: {
        select: function () {
            console.log(this.option)
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
                this.showDescripcion = false
                this.titulo = 'Seleccione una empresa del sector industrial'
                this.state = 'empresa'
                this.items = Object.keys(this.empresas[0]) 
                Object.keys(this.empresas[0]).forEach(element => {
                    if(element === 'ELECTROPERU'){
                        this.description = this.empresas[0][element].texto
                        this.img = this.empresas[0][element].src
                    }
                })
               
            }else{
                this.compraVenta = true
                this.titulo = 'Compra y venta de acciones de Alicorp'
            }
        },
        comprar(){
            this.acciones = 'compra'
            this.compra = this.valor * 5.1
        },
        venta(){
            this.acciones = 'venta'
            this.compra = this.valor * 5
        },
        changeSector(correct){
            Object.keys(this.keyData).forEach(element => {
                    if(element === correct){
                        this.description = this.keyData[element].descripcion.texto
                        this.img = this.keyData[element].descripcion.src 
                        this.empresas.push(this.keyData[element].empresas)
                    }                    
                })
            
        }
        /* solo falta emitir un evento para mostrar la el ultimo mensaje de leo en el level 3 y escoger dinammicamente el select */
    }
}
</script>
<style scoped>
.application--wrap{
    min-height: 20px !important;
    height: 50px;
}
.theme--light.application, .theme--light.v-stepper{
    background: none;
}  

</style>

