<template>
    <div class="text-xs-center">
        <v-app id="inspire">
            <v-container fluid grid-list-xl>
            <v-card-title class="headline">¿Recuerdas que es una SAB?</v-card-title>
            <v-layout wrap align-center>
                <v-flex xs12 sm6 d-flex>                
                <v-select
                    :items="items"
                    label="Outline style"
                    outline
                    
                ></v-select>
                </v-flex>
            </v-layout>
            <div id="app">
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
                        height="100px"
                    >
                    <v-card-title class="headline">Descripcion:</v-card-title>
                    
                    <v-card-text>{{description}}</v-card-text>        
                    </v-card> 
                    <v-flex >
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
                    <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>  
                </v-stepper-items>
                </v-stepper>
            </v-app>
            </div>
            <v-btn
            class="btn-leo"
            color="red"
            dark
            @click="nextleo()"
            >
            Confirmar
            </v-btn>            
            </v-container>
        </v-app>
    </div>
</template>
<script>
import dataFinaciero from '@/plugins/data_financiero.js'
import firebase from 'firebase'
export default {
    name: 'sectores-inversion',
    data(){
        return {
            empresas: [],
            items: [],
            description: '',
            img: '',
            selectSector: 'electrico',
            e1: 0
        }
    },
    created(){
        this.firebaseSectores()
    },
    methods:{
        firebaseSectores(){
            const data = firebase.database().ref().child('sectores/')
            data.once('value', value => {
                const keyData = value.val()
                this.items = Object.keys(value.val())
                Object.keys(keyData).forEach(element => {
                    console.log(keyData[element], element)
                    if(element === this.selectSector){
                        this.description = keyData[element].descripcion.texto
                        this.empresas.push(keyData[element].empresas)
                        console.log(this.empresas, 'img')
                    }                    
                })
            })
        }
    }
}
</script>
<style scoped>

</style>

