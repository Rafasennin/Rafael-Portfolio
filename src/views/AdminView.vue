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

    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="mb-5">Seção do Administrador</h1>
      </v-col>
    </v-row>

    <v-table theme="dark" class="overflow-x-auto">
      <thead>
        <tr>
          <th class="text-h5">
            ID
          </th>
          <th class="text-h5">
            Nome
          </th>
          <th class="text-h5">
            Email
          </th>
          <th class="text-h5">
            Mensagem
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="text-center" v-for="contato in contatos" :key="contato._id">
          <td>
            {{ contato._id }}
          </td>
          <td>
            {{ contato.name }}
          </td>
          <td>
            {{ contato.email }}
          </td>
          <td class="word-wrap-break">
            {{ contato.message }}
          </td>
          <td>
            <v-btn @click="deleteContat(contato._id)" class="text-decoration-none bg-red-darken-4">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <tr class="d-flex justify-center">
      <v-progress-circular v-if="loadingFlag" color="primary" indeterminate :size="74" :width="8"></v-progress-circular>

    </tr>
    <FooterComponent />
  </v-container>
</template>

<script>
import axios from "axios";
import MenuBannerComponent from "../components/MenuBanner.vue";
import FooterComponent from "../components/FooterComponent.vue";
import LoginComponent from '../components/LoginComponent.vue';
import { mapState, mapMutations } from 'vuex';
import store from '../store/index'

export default {
  name: "AdminView",

  components: {
    MenuBannerComponent,
    FooterComponent,
    LoginComponent
  },

  data() {
    return {
      contatos: [],
    };
  },

  computed: {
    ...mapState(['isFetching']), // Mapeie o estado de carregamento para o componente
    loadingFlag() {
      return this.isFetching
    }
  },

  mounted() {
    this.getContatos();
    this.loadFetching();
    

  },

  methods: {
    async loadFetching() {
      try {
        console.log("O resultado é: " + this.isFetching + store)
        return this.isFetching;
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        return false; // Retorne false em caso de erro
      }
    },

    async getContatos() {
      try {
        // Antes de iniciar a busca de contatos, atualiza o estado de isFetching para true
        this.SET_FETCHING(true);

        const response = await axios.get("http://localhost:8080/contatos"); // Trocar por URL deploy
        this.contatos = response.data;

        // Após concluir a busca de contatos, atualiza o estado de isFetching para false
        this.SET_FETCHING(false);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
        // Em caso de erro, também atualiza o estado de isFetching para false
        this.SET_FETCHING(false);
      }
    },

    async deleteContat(contatoId) {
      try {
        await axios.delete(`https://rafael-portfolio-back-end.vercel.app/contatos/${contatoId}`);

        // Atualiza a lista de contatos após a exclusão
        this.getContatos();
      } catch (error) {
        console.error("Erro ao excluir contato:", error);
      }
    },
    ...mapMutations(['SET_FETCHING']),
  }
};
</script>
