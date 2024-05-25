<template>
    <v-footer class="d-flex flex-column bg-black">
      <div class="bg-black d-flex w-100 align-center px-4">
        <strong class="text-h6 d-none d-sm-inline-block">Descubra mais nas redes profissionais!</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon.icoo"
          :href="icon.src"
          class="mx-4"
          size="small"
          variant="plain"
          target="_blank"
        ></v-btn>
      </div>
  
      <div class="px-4 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Rafael Santos - Portfolio</strong>
      </div>
    </v-footer>
  </template>

  <script>
    export default {
        name: 'FooterComponent',
      data: () => ({
        icons: [
        { icoo:'mdi-github', src:'https://github.com/Rafasennin'},
        { icoo:'mdi-linkedin', src:'https://www.linkedin.com/in/rafael-d-santos-24a1098b'},
        { icoo:'mdi-instagram', src:'https://www.instagram.com/rafasennin7/'},
        { icoo:'mdi-youtube', src:'https://youtube.com/channel/UC7cYXH0h-RylVwe6y9JIUIQ'},
        
        ],
      }),
    }
  </script>
