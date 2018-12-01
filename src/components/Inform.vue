<template>
 <v-container  class="text-xs-center">
       <h1>Para invertir debes tener en cuenta estos 3 puntos</h1>
        <br>
        <h3>Presiona cada uno para ver más información</h3>
          <!-- <v-parallax
    dark
    src="http://subirimagen.me/uploads/20181201100215.png"
    height="300"
  > -->

      <div
      align-center
      column
      justify-center
      class="divParalax"
    >
     <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        color="transparent"
        dark
      >
        Mercado Local
      </v-btn>

      <v-card>


        <v-card-text>
          <h1>Mercado local</h1>

            <h3>
              Verifica cómo va la economía en tu país. Consulta las publicaciones y comentarios
              de nuestros mejores economistas tales como: Julio Verlarde, Fernando Zavala, etc.
            </h3>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

      <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="300"
    >
      <v-btn
        slot="activator"
        color="primary"
        dark
      >
        Sectores
      </v-btn>

      <v-card>


        <v-card-text>
          <h1>Sectores</h1>

            <h3>
              Elige los sectores en los cuales tengas más conocimientos y para
              los cuales se proyecte un crecimiento constante.
            </h3>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
         <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="300"
    >
      <v-btn
        slot="activator"
        color="primary "
        dark
      >
        Empresas
      </v-btn>

      <v-card>


        <v-card-text>
          <h1>Empresas</h1>

            <h3>
              Revisa datos históricos de las empresas para tomar una mejor decisión.
            </h3>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </div>

  <!-- </v-parallax> -->

      <v-btn
        class="btn-inf"
          color="red"
          dark
          @click="nextLevelTwo()"
        >
          ENTENDIDO
        </v-btn>
 </v-container>
</template>
<script>
/* eslint-disable */
import {EventBus} from '@/plugins/EventBus.js'
export default {
  name: "Inform",
  data(){
    return {
      dialog: false
    }
  },
  methods: {
    nextLevelTwo(){
      EventBus.$emit('change-leoTwo_3', true)
    }
  }


};
</script>
<style scoped>
 .btn-inf{
      border-radius: .8em;
      width: 215px
    }
  /* .divParalax{
    background-image: url('http://subirimagen.me/uploads/20181201100215.png');
    background-size: auto;
  }   */
</style>
