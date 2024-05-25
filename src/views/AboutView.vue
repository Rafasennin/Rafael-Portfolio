<template>
  <v-container>
    <LoginComponent />
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Rafael Portfolio</h1>
        <p>Desenvolvedor Web Full-Stack</p>
      </v-col>
    </v-row>

    <!-- Menu Banner -->
    <MenuBannerComponent />
    <v-row>
            <v-col cols="12" class="text-center">
              <h1 class="home__title">Bem-vindo ao meu portfólio.</h1>
            </v-col>
        </v-row>
    <ArticleComponent />

    <!-- Seção de Sobre -->
    <v-row class="text-center mt-5">
      <v-col cols="12">
        <h2>Background</h2>
      </v-col>
    </v-row>

    <!-- Background -->
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="4" v-for="(item, index) in background" :key="index">
        <v-card>
          <v-card-title class="d-flex justify-center">{{ item.title }}</v-card-title>
          <v-card-text class="d-flex justify-center">{{item.details}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider :thickness="2" class="border-opacity-50 mb-5 mt-5" color="black"></v-divider>
    <!-- Certificações -->
    <v-row class="d-flex justify-center mb-5">
      <v-col cols="12" class="d-flex justify-center">
        <h2>Certificações</h2>
      </v-col>
      <v-col cols="12" md="4" v-for="(certification, index) in certifications" :key="index">
        <v-card>
          <v-card-title class="d-flex justify-center">{{ certification.title }}</v-card-title>
          <v-card-text>{{ certification.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Skills -->
    <v-divider :thickness="2" class="border-opacity-50 mb-5" color="black"></v-divider>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <h2>Skills</h2>
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
import LoginComponent from '../components/LoginComponent.vue'

export default {
  name: 'AboutView',

  components: {
    MenuBannerComponent, ArticleComponent, FooterComponent, LoginComponent
  },

  data() {
    return {
      background: [
        {
          title: 'Analise e Desenvolvimento de Sistemas',
          details: 'Graduação pela Universidade São Francisco',  
        },
        {
          title: 'Bacharel em Farmácia',
          details: 'Graduação pela Universidade São Francisco',  
        }
      ],
      certifications: [
        {
          title: 'HTML e CSS: responsividade com mobile-first',
          description: 'Descrição da certificação HTML e CSS'
        },
        {
          title: 'CSS: dispondo elementos com Flexbox e Grid',
          description: 'Descrição da certificação CSS'
        },
        // Adicione mais certificações conforme necessário
      ],
      technologies: [
        'Node.js',
        'Express.js',
        'Vue.js',
        'Socket.IO',
        'MySQL',
        'MongoDB',
        'TDD',
        'Javascript Avançado',
        'Vue Router',
        'Vuex',
        'Vuetify',
        'Express'
      ]
    };
  },

  methods: {
    
  }
};
</script>
