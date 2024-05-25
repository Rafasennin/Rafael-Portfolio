<template>
    <v-container class="mt-5">
      <v-layout class="overflow-visible" style="height: 60px;">
        <v-bottom-navigation class="black h-100" mode="shift">
          <v-btn :to="linkHome" class="text-decoration-none">
            <v-icon>mdi-home</v-icon>
            <h1 class="text-h6 d-none d-sm-inline-block">Home</h1>
          </v-btn>
  
          <v-btn :to="linkAbout" class="text-decoration-none">
            <v-icon>mdi-information</v-icon>
            <h1 class="text-h6 d-none d-sm-inline-block">Sobre</h1>
          </v-btn>
  
          <v-btn :to="linkContact" class="text-decoration-none">
            <v-icon>mdi-email</v-icon>
            <h1 class="text-h6 d-none d-sm-inline-block">Contato</h1>
          </v-btn>

          <v-btn :to="linkAdmin" class="text-decoration-none">
            <v-icon>mdi-account-circle</v-icon>
            <h1 class="text-h6 d-none d-sm-inline-block">Admin</h1>
          </v-btn>

        </v-bottom-navigation>
      </v-layout>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'MenuBanner',
    data() {
      return {
        linkHome: "/",
        linkAbout: "/about",
        linkContact: "/contact",
        linkAdmin: "/admin"
      };
    }
  };
  </script>
  