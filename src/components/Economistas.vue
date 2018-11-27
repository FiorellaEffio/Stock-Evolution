<template>
    <v-container class="text-xs-center">
        <div>
            <h2>Estos son los economistas que debes escuchar</h2>
        </div>
        <br>
        <br>
        <div>          
            <v-flex >
                 <v-btn flat large class="btnEco">
                     <div>
                         <h4>Julio<br>Velarde</h4>
                         <v-avatar
              slot="activator"
              size="75px"
            >
 
                        <img src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2017/11/08/000461860W.jpg" alt="">
                         </v-avatar>
                     </div>
                 </v-btn>
                  <v-btn flat large class="btnEco">
                     <div>
                         <h4>Humberto<br>Chavez</h4>
                         <v-avatar
              slot="activator"
              size="75px"
            >
 
                        <img src="http://subirimagen.me/uploads/20181126011113.jpg" alt="">
                         </v-avatar>
                     </div>
                 </v-btn>
            </v-flex>              
             <v-flex>
                         <v-btn flat large class="btnEco">
                     <div>
                         <h4>Fernando<br> Zavala</h4>
                         <v-avatar
              slot="activator"
              size="75px"
            >
 
                        <img src="http://subirimagen.me/uploads/20181126011359.jpg" alt="">
                         </v-avatar>
                     </div>
                 </v-btn>
         <v-btn flat large class="btnEco">
                     <div>
                         <h4>Santiago<br> Mendoza</h4>
                         <v-avatar
              slot="activator"
              size="75px"
            >
 
                        <img src="http://subirimagen.me/uploads/20181126011458.jpg" alt="">
                         </v-avatar>
                     </div>
                 </v-btn>

            </v-flex>
        </div>
         <v-btn
        class="btn-Eco"
          color="red"
          dark
        
        >
          Continue
        </v-btn>
    </v-container>
</template>

<script>
export default {
  data() {}
};
</script>
<style>

.btnEco {
  width: 125px;
  height: 135px;
  border: 3px solid #1B2A6F;
  border-radius: 10px
}
.btn-Eco{
      border-radius: .8em;
      width: 215px
    }

</style>
