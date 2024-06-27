<template>
  <v-container class="mt-n6">
    <v-layout v-if="$vuetify.display.mdAndUp" class="overflow-visible" style="height: 60px;">
      <v-bottom-navigation class="black h-100" mode="shift">
        <v-btn :to="linkAbout" class="text-decoration-none">
          <v-icon>mdi-home-city</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">Home</h1>
        </v-btn>

        <v-btn :to="linkToDo" class="text-decoration-none">
          <v-icon>mdi-clipboard-list</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">Lista</h1>
        </v-btn>

        <v-btn :to="linkHome" class="text-decoration-none">
          <v-icon>mdi-briefcase</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">Projetos</h1>
        </v-btn>

        <v-btn :to="linkContact" class="text-decoration-none">
          <v-icon>mdi-email</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">Contato</h1>
        </v-btn>

        <v-btn :to="linkAdmin" class="text-decoration-none">
          <v-icon>mdi-account-circle</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">Admin</h1>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>


    <v-app-bar color="grey-darken-4" prominent v-else>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Menu</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item :to="linkAbout" prepend-icon="mdi-home-city" title="Home"></v-list-item>
        <v-list-item :to="linkToDo" prepend-icon="mdi-clipboard-list" title="Lista"></v-list-item>
        <v-list-item :to="linkHome" prepend-icon="mdi-briefcase" title="Projetos"></v-list-item>
        <v-list-item :to="linkContact" prepend-icon="mdi-email" title="Contato"></v-list-item>
        <v-list-item :to="linkAdmin" prepend-icon="mdi-account-circle" title="Administrador"></v-list-item>
      </v-list>
      <v-divider :thickness="1" class="border-opacity-50" color="black"></v-divider>
      <div class="bg-black d-flex align-center">
        <v-btn v-for="icon in icons" :key="icon" :icon="icon.icoo" :href="icon.src" size="small" variant="plain"
          target="_blank" class="ml-5"></v-btn>
      </div>
      <h3 class="d-flex justify-center">Rafael Santos - Portfolio &copy; </h3>
    </v-navigation-drawer>

    <!-- Cards -->
    <v-row>
      <v-col cols="12" md="4" v-for="(item, index) in background" :key="index">
        <v-card>
          <v-card-title class="d-flex justify-center text-body-1 font-weight-black">{{ item.title }}</v-card-title>
          <v-card-text class="d-flex justify-center">{{ item.details }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MenuBanner',
  data() {
    return {
      linkAbout: "/",
      linkHome: "/projects",
      linkContact: "/contact",
      linkAdmin: "/admin",
      linkToDo: "/todo",
      drawer: false,
      rail: false,
      icons: [
        { icoo: 'mdi-github', src: 'https://github.com/Rafasennin' },
        { icoo: 'mdi-linkedin', src: 'https://www.linkedin.com/in/rafael-d-santos-24a1098b' },
        { icoo: 'mdi-instagram', src: 'https://www.instagram.com/rafasennin7/' },
        { icoo: 'mdi-youtube', src: 'https://youtube.com/channel/UC7cYXH0h-RylVwe6y9JIUIQ' },
      ],

      img: require("../assets/profile.jpg")
    };
  }
};
</script>
