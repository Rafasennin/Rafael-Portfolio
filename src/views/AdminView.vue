<template>
  <v-container class="bg-black">
    <MenuBannerComponent />
    <LoginComponent />
    <v-row class="text-center mt-5">
      <v-col cols="12">
        <h1>{{ $t('portfolioTitle') }}</h1>
        <h3>{{ $t('portfolioSubtitle') }}</h3>
      </v-col>
    </v-row>

    <storageComponent />

    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="my-5">{{ $t('adminSection') }}</h1>
      </v-col>
    </v-row>

    <v-table theme="dark" class="overflow-x-auto">
      <thead>
        <tr>
          <th class="text-h5 text-center">
            {{ $t('fileIndex') }}
          </th>
          <th class="text-h5 text-center">
            {{ $t('fileName') }}
          </th>
          <th class="text-h5 text-center">
            {{ $t('fileEmail') }}
          </th>
          <th class="text-h5 text-center">
            {{ $t('fileMessage') }}
          </th>
          <th class="text-h5 text-center">
            {{ $t('fileAction') }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="text-center" v-for="(contato, index) in contatos" :key="contato._id">
          <td>
            {{ index + 1 }}
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
            <v-btn @click="openDeleteModal(contato._id, 'contato')" class="text-decoration-none bg-red-darken-4">
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

    <!-- Modal for delete-->
    <v-dialog v-model="deleteModal" max-width="350px">
      <v-card class="d-flex justify-center text-center align-center">
        <v-card-title>
          <span class="headline">{{ $t('confirmDeletePhrase') }}</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDeleteModal">{{ $t('cancelDelete') }}</v-btn>
          <v-btn color="red darken-1" text @click="confirmDelete">{{ $t('confirmDelete') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import MenuBannerComponent from "../components/MenuBanner.vue";
import FooterComponent from "../components/FooterComponent.vue";
import LoginComponent from '../components/LoginComponent.vue';
import { mapState, mapMutations } from 'vuex';
import store from '../store/index';
import storageComponent from '../components/storageComponent.vue';
import { ref } from 'vue';

export default {
  name: "AdminView",

  components: {
    MenuBannerComponent,
    FooterComponent,
    LoginComponent,
    storageComponent
  },

  data() {
    return {
      contatos: [],
      deleteModal: ref(false), 
      deleteId: ref(null), 
      deleteType: ref('') 
    };
  },

  computed: {
    ...mapState(['isFetching']),
    loadingFlag() {
      return this.isFetching;
    }
  },

  mounted() {
    this.getContatos();
    this.loadFetching();
  },

  methods: {
    async loadFetching() {
      try {
        console.log("O resultado é: " + this.isFetching + store);
        return this.isFetching;
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        return false;
      }
    },

    async getContatos() {
      try {
        this.SET_FETCHING(true);
        const response = await axios.get("https://rafael-portfolio-back-end.vercel.app/contatos");
        this.contatos = response.data;
        this.SET_FETCHING(false);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
        this.SET_FETCHING(false);
      }
    },

    async deleteContato(contatoId) { // Renomeado para deleteContato
      try {
        await axios.delete(`https://rafael-portfolio-back-end.vercel.app/contatos/${contatoId}`);
        await this.getContatos();
      } catch (error) {
        console.error("Erro ao excluir contato:", error);
      }
    },

    openDeleteModal(id, type) { // Adicionado ao método
      this.deleteId = id;
      this.deleteType = type;
      this.deleteModal = true;
    },

    closeDeleteModal() { // Adicionado ao método
      this.deleteModal = false;
      this.deleteId = null;
      this.deleteType = '';
    },

    async confirmDelete() { // Adicionado ao método
      if (this.deleteType === 'contato') {
        await this.deleteContato(this.deleteId);
      }
      this.closeDeleteModal();
    },

    ...mapMutations(['SET_FETCHING']),
  }
};
</script>
