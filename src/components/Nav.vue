  <template>
    <v-toolbar
      app
       color=#1B2A6F
    >

      <a @click="userSignOut">
        <img src="http://subirimagen.me/uploads/20181129103140.png">
      </a>

      <v-btn icon @click.stop="clipped = !clipped" >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
    </v-toolbar>
  </template>
  <script>
  import firebase from 'firebase'

  export default {
    name: 'nav',
    data() {
      return {}
    },
      methods: {
        userSignOut(){
          self = this;
          firebase.auth().signOut().then(function() {
            self.$router.push('/landing')
          }, function(error) {
            alert('Sign Out Error', error);
          });
        }
      }
  }
  </script>
