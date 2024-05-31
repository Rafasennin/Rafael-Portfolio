<template>
  <v-container class="bg-black">
    <div v-if="loginStatus" class="d-flex justify-end">
      <v-btn color="red-darken-2" @click="logOut">
        <v-icon icon="mdi-arrow-left" start></v-icon>
        Logout
      </v-btn>
    </div>
    <div v-else class="d-flex justify-end">
      <v-btn color="green-darken-2" @click="singIn">
        Login
        <v-icon icon="mdi-arrow-right" end></v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'LoginComponent',
  data() {
    return {
      store: this.$store
    };
  },

  computed: {
    loginStatus() {
     return this.store;
   },
    ...mapState(['isLogged']),
  },
  
  methods: {
    singIn() {
      this.$router.push({
        name: 'login',
        query: {}
      });
    },

    logOut() {
      this.store = false;
      this.SET_LOGGED(false);
      this.$router.push('/');
    },
    ...mapMutations(['SET_LOGGED']),
  }
}
</script>
