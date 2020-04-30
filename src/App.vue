<template>
  <div>
    <header class="navbar container">
      <a class="navbar-brand">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
             width="30px"
             height="30px" />
        Vuex-test
      </a>
      <button type="button"
              class="btn btn-success"
              v-if="$store.getters.isUserAuth"
              @click="$store.commit('logOut')">
              Выйти
      </button>
    </header>
    <main class="container">
      <loginForm v-if="!$store.getters.isUserAuth" />
      <h2 v-else>Аккаунт пользователя</h2>
    </main>
  </div>
</template>

<script>
import loginForm from './pages/login';
export default {
  name: 'App',
  components: {
    loginForm
  },
  mounted () {
    if (sessionStorage.getItem('access_token')) {
      this.$store.commit('getDataFromSessionStorage');
    }
  }
}
</script>

<style>

</style>
