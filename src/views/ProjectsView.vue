<template>
  <v-container class="bg-black">
     <!--Animated Background-->
     <animetedBackground />

    <MenuBannerComponent />
    <v-row class="text-center mt-5">
      <v-col cols="12">
        <h1>{{ $t('portfolioTitle') }}</h1>
        <h3>{{ $t('portfolioSubtitle') }}</h3>
      </v-col>
    </v-row>
    <ProjectsComponent />
    <FooterComponent />
  </v-container>
</template>

<script>
import MenuBannerComponent from "../components/MenuBanner.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import animetedBackground from '../components/animatedBackground.vue'


export default ({
  name: 'ProjectsView',

  components: {
    MenuBannerComponent, ProjectsComponent, FooterComponent, animetedBackground
  },

  data() {
    return {

    };
  },
});
</script>
