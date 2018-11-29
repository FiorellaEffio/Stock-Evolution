<template>
    <v-container id="sab" class="text-xs-center">
        <div>
            <h2>Ahora que ya sabes que es <br> una SAB, debes
            elegir la que más vaya contigo</h2>
        </div>
        <br>
        <div>
            <div class="text-xs-center">
                <v-btn flat large @click="changeSab('Credicorp')"
                            slot="activator"
                    class="btnSab">
                     <div>
                         <h4>Credicorp</h4>
                        <img src="http://subirimagen.me/uploads/20181127144531.png" width="80" height="95">
                     </div>
                 </v-btn>
                 <v-btn flat large @click="changeSab('Kallpa')"
                      class="btnSab"
                      slot="activator"
                      >
                     <div>
                         <h4>Kallpa</h4>
                        <img src="http://subirimagen.me/uploads/20181127145204.png" width="80" alt="">
                     </div>
                 </v-btn>
            </div>
              <div class="text-xs-center">
                    <v-btn flat large @click="changeSab('Magot')"
                            slot="activator"

                    class="btnSab">
                     <div>
                         <h4>Magot</h4>
                        <img src="http://subirimagen.me/uploads/20181127150026.png" width="65">
                     </div>
                 </v-btn>
                      <v-btn flat large @click="changeSab('BTG Pactual')"
                      class="btnSab"
                      slot="activator"
                      >
                     <div>
                         <h4>BTG Pactual</h4>
                        <img src="http://subirimagen.me/uploads/20181127150838.png" width="80" alt="">
                     </div>
                 </v-btn>
            </div>
        </div>
         <v-btn
          class="btn-sab"
          color="red"
          dark
          @click="nextLeveltwo()"
        >
          Continue
        </v-btn>
    </v-container>
</template>
<script>
import firebase from 'firebase'
import {EventBus} from '@/plugins/EventBus.js'
export default {
    name: 'sab',
    data(){
        return{
          sabName: '',
        }
    },
    methods: {
        nextLeveltwo(){
            firebase.auth().onAuthStateChanged((user) => {
            let userUID = user.uid;
            let userRef = firebase.database().ref('usuarios/' + userUID);
            userRef.update({
                "sab": this.sabName
                })
            })
            EventBus.$emit('change-state-sab', {state: false})
        },
        changeSab(sabName) {
          this.sabName = sabName;
          console.log(this.sabName)
        }
    }
}
</script>

<style scoped>

.btnSab {
  width: 135px;
  height: 140px;
  border: 3px solid #1B2A6F;
 border-radius: 10px

}
.btn-sab{
    width: 215px;
    border-radius: 8rem
    }

 #sab {
   background-image: url('http://subirimagen.me/uploads/20181129111939.png');
 }
</style>
