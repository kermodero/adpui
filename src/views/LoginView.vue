<script>
  import { adpds } from '../data/data-service'
  import { stateMgr } from '../stores/data'

  export default {
    data: function(){
      return {
        count: 0,
        username: '',
        pw: '',
        error: ''
      }
    },
    methods: {
      authenticate(username, pw) {
        stateMgr.authenticated = true
        this.$router.push('/')
      },
      loginFailed() {
        alert("no, it failed.");
      },
      login(event) {
         adpds.login(this.username, this.pw, this.authenticate, this.loginFailed)
      }
    }
}
</script>

<template>
  <section>
      <div class="subHeading">
        <h1>Log in</h1>
      </div>

      <div v-if="this.error == 'failed'" class="error">
        login failed. {{errorMessage}}
      </div>

      <div class="field">
        <w-input v-model="username" >Username</w-input>
      </div>

      <div class="field">
        <w-input v-model="pw" >Password</w-input>

      </div>

      <div class="button">
          <w-button v-on:click="login">log in</w-button>
      </div>

  </section>
</template>

<style scoped>
  section {
    padding-top: 1em;
    background: #FFF;
    grid-column: 3 / span 8;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
  }

  section h1 {
    color: #444;
  }

  div {
    grid-column: 2 / span 6;
    height: 4em;
  }

  .subHeading {
    grid-column: 2 / span 6;
  }

  .button {
    grid-column: 7 / span 1;
  }

  .error {
    color: #A22
  }

</style>
