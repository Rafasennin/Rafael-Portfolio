<template>
    <v-container class="main__article">
      <v-parallax height="400" src="../assets/matrix_1.jpg">
        <div class="d-flex justify-center">
          <v-avatar class="ma-10 opacity-80" size="300">
            <v-img :src="imagem" aspect-ratio="16/9" fill></v-img>
          </v-avatar>
        </div>
      </v-parallax>

      <h2 class="article__title mt-10">{{ $t('aboutTitle') }}</h2><br>
  
      <p class="article__p">
        {{ $t('aboutParagraph1') }}<br>
      </p><br>
  
      <p class="article__p">
        {{ $t('aboutParagraph2') }}<br>
      </p><br>
  
      <p class="article__p">
        {{ $t('aboutParagraph3') }}
      </p>
      <v-divider :thickness="1" class="border-opacity-50 mb-5 mt-5" color="white"></v-divider>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ArticleComponent',
    data: () => ({
      imagem: require("../assets/profile.jpg")
    }),
  };
  </script>
  