<template>
  <v-container>
    <v-layout v-if="$vuetify.display.mdAndUp"  class="overflow-visible" style="height: 60px;">
      <v-bottom-navigation class=" bg-grey-darken-4" height="100" active>
        <v-btn :to="linkAbout" class="text-decoration-none">
          <v-icon>mdi-home-city</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">{{ $t('home') }}</h1>
        </v-btn>

        <v-btn :to="linkHome" class="text-decoration-none">
          <v-icon>mdi-briefcase</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">{{ $t('projects') }}</h1>
        </v-btn>

        <v-btn :to="linkContact" class="text-decoration-none">
          <v-icon>mdi-email</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">{{ $t('contact') }}</h1>
        </v-btn>

        <v-btn :to="linkToDo" class="text-decoration-none">
          <v-icon>mdi-lightbulb-on</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">{{ $t('suggestions') }}</h1>
        </v-btn>

        <v-btn :to="linkAdmin" class="text-decoration-none">
          <v-icon>mdi-account-circle</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-flex">{{ $t('admin') }}</h1>
        </v-btn>

        <v-select v-model="selectedLanguage"
          :items="locales"
          item-title="lang"
          item-value="abbr"
          bg-color="grey-darken-4"
          class="mt-6"
          append-icon="mdi-translate"
          variant="filled"
          max-width="200"
          label="Idioma"
          persistent-hint
          hide-details
          >
        </v-select>
      </v-bottom-navigation>
    </v-layout>

    <v-app-bar color="grey-darken-4" prominent v-else>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title >Menu</v-toolbar-title>
      <v-select v-model="$i18n.locale"
          :items="locales"
          item-title="lang"
          item-value="abbr"
          class="d-flex justify-end mr-n16 ml-12"
          bg-color="grey-darken-4"
          append-icon="mdi-translate"
          max-width="200"
          variant="filled"
          label="Idioma"
          persistent-hint
          hide-details
          >
         
            <v-icon :color="item.color" class="mr-2">mdi-flag</v-icon>
            
         
      </v-select>
      
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item :to="linkAbout" prepend-icon="mdi-home-city translate" :title="$t('home')"></v-list-item>
        <v-list-item :to="linkHome" prepend-icon="mdi-briefcase" :title="$t('projects')"></v-list-item>
        <v-list-item :to="linkContact" prepend-icon="mdi-email" :title="$t('contact')"></v-list-item>
        <v-list-item :to="linkToDo" prepend-icon="mdi-lightbulb-on" :title="$t('suggestions')"></v-list-item>
        <v-list-item :to="linkAdmin" prepend-icon="mdi-account-circle" :title="$t('admin')"></v-list-item>
      </v-list>
      <v-divider :thickness="1" class="border-opacity-50" color="black"></v-divider>
      <div class="bg-black d-flex justify-center">
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
        { icoo: 'mdi-instagram', src: 'https://www.instagram.com/rafael.santosdev' },
      ],
      locales: [
      { lang: 'English', abbr: 'en', color: 'blue' },
      { lang: 'Português', abbr: 'pt', color: 'green' }
      ],

      
      selectedLanguage: this.$i18n.locale,
      
      img: require("../assets/profile.jpg")
    };
   
  },


  watch: {
    selectedLanguage(newLanguage) {
      console.log(newLanguage);
      this.$i18n.locale = newLanguage;
    }
  }

};
</script>
