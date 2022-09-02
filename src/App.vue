<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-light bg-light">
      <a class="navbar brand" href="#">
        <img
          src="https://seeklogo.com/images/I/instagram-logo-B19177A225-seeklogo.com.png"
          alt=""
          height="80"
          class="d-inline-block align-top"
          loading="lazy"
        />
      </a>
      <router-link to="/">Naslovnica</router-link> |
      <router-link to="/login">Prijava</router-link> |
      <router-link to="/signup">Registracija</router-link>
      |
      <a href="#" @click.prevent="logout()">Odjava</a>
      <form class="d-flex" role="search">
        <input
          v-model="store.searchTerm"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>

    {{ store.searchTerm }}

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  background-color: rgb(239, 223, 246) !important;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 20px;

    &.router-link-exact-active {
      color: #429db9;
    }
  }
}
</style>

<script>
import store from "@/store.js";

import { firebase } from "@/firebase";

import router from "@/router";

const currentRoute = router.currentRoute;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);
    store.currentUser = user.email;
  } else {
    console.log("No-user");
    store.currentUser = null;
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>