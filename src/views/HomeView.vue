<template>
  <v-container>
    <LoginComponent />
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Rafael Portfolio</h1>
        <p>Desenvolvedor Web Full-Stack</p>
      </v-col>
    </v-row>
    <MenuBannerComponent />
    <MainBodyComponent />
    <FooterComponent />
  </v-container>
</template>

<script>
import MenuBannerComponent from "../components/MenuBanner.vue";
import MainBodyComponent from "../components/MainBody.vue";
import FooterComponent from "../components/FooterComponent.vue"
import LoginComponent from '../components/LoginComponent.vue'


export default ({
  name: 'HomeView',

  components: {
    MenuBannerComponent, MainBodyComponent, FooterComponent, LoginComponent
  },

  data() {
    return {

    };
  },
});
</script>
