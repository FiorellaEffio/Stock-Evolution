<template>
  <div id="app">
    <div id="nav">
      <h1>Sign up</h1>
      <v-content>
        <v-container>
          <v-layout align-center justify-center>
          <v-flex xs12 class="grey lighten-4">
          <v-container style="position: relative;top: 13%;" class="text-xs-center">
            <v-card flat>
              <v-card-title primary-title>
                <h4>Login</h4>
              </v-card-title>
              <v-form @submit.prevent="signUp">
              <v-text-field prepend-icon="person" name="Username" label="Username"></v-text-field>
              <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <v-btn @click="signUp" primary large block>Login</v-btn>
              </v-card-actions>
              </v-form>
            </v-card>
          </v-container>
          </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <div class="message is-danger" v-if="error">
        <div class="message-body">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import database from '@/services/database.js'
export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async signUp () {
      let result = await database.signUp(this.email, this.password)
      if(result.message) {
        this.error = result.message
      } else {
        console.log('User is created')
      }
    }
  }
}
</script>

<style lang="css">
  @import ''
</style>
