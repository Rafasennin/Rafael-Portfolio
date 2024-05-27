<template>
  <v-container class="bg-black">
    <LoginComponent />
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Rafael Portfolio</h1>
        <p>Desenvolvedor Web Full-Stack</p>
      </v-col>
    </v-row>
    <MenuBannerComponent />
    <ProjectsComponent />
    <FooterComponent />
  </v-container>
</template>

<script>
import MenuBannerComponent from "../components/MenuBanner.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue";
import FooterComponent from "../components/FooterComponent.vue"
import LoginComponent from '../components/LoginComponent.vue'


export default ({
  name: 'ProjectsView',

  components: {
    MenuBannerComponent, ProjectsComponent, FooterComponent, LoginComponent
  },

  data() {
    return {

    };
  },
});
</script>
