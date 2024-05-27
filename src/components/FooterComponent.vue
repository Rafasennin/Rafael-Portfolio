  <template>
      <v-footer class="d-flex flex-column bg-black">
        <div class="bg-black d-flex align-center">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon.icoo"
            :href="icon.src"
            size="small"
            variant="plain"
            target="_blank"
          ></v-btn>
        </div>
        <h3 class="d-flex justify-center">Rafael Santos - Portfolio &copy; </h3>
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
