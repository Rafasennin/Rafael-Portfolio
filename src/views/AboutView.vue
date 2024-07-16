<template>
  <v-container class="bg-black">
    <!--Animated Background-->
    <animetedBackground />
    
    <!-- Menu Banner -->
    <MenuBannerComponent />

    <!-- Carousel Component -->
    <CarouselComponent />

    <!-- Article Component --->
    <ArticleComponent />

    <!-- Seção de Sobre -->
    <v-row class="text-center mt-5">
      <v-col cols="12">
        <h2>{{ $t('backgroundTitle') }}</h2>
      </v-col>
    </v-row>

    <!-- Background -->
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="d-flex justify-center text-body-1 font-weight-black">{{
          $t('backgroundItem1') }}</v-card-title>
          <v-card-text class="d-flex justify-center">{{ $t('detail1') }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="d-flex justify-center text-body-1 font-weight-black">{{
          $t('backgroundItem2') }}</v-card-title>
          <v-card-text class="d-flex justify-center">{{ $t('detail2') }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider :thickness="1" class="border-opacity-50 mb-5 mt-5" color="white"></v-divider>

    <!-- Skills -->
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <h2>{{ $t('skillsTitle') }}</h2>
      </v-col>
      <v-col cols="12" md="4" v-for="(technology, index) in technologies" :key="index">
        <v-card>
          <v-card-title>{{ technology }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <FooterComponent />
  </v-container>
</template>

<script>
import MenuBannerComponent from "../components/MenuBanner.vue";
import ArticleComponent from "../components/ArticleComponent.vue"
import FooterComponent from "../components/FooterComponent.vue"
import CarouselComponent from "../components/CarouselComponent.vue"
import animetedBackground from '../components/animatedBackground.vue'



export default {
  name: 'AboutView',

  components: {
    MenuBannerComponent, ArticleComponent, FooterComponent, CarouselComponent, animetedBackground
  },

  data() {
    return {
      technologies: [
        'Nuxt 3',
        'Vue 3',
        'Node.js',
        'Express.js',
        'Socket.IO',
        'MySQL',
        'MongoDB',
        'Mongoose',
        'Javascript Avançado',
        'Vue Router',
        'Vuex',
        'Vuetify',
      ]
    };
  },

  methods: {

  }
};
</script>
