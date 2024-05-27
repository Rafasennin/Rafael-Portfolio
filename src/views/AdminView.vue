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
    </tr>
  </tbody>
</v-table>

    <v-row class="text-center">
      <v-col cols="12">
        <v-btn color="primary" class="my-5" @click="getContatos">Fetch mongo data</v-btn>
      </v-col>
    </v-row>

    <FooterComponent />
  </v-container>
</template>

<script>
import axios from "axios";
import MenuBannerComponent from "../components/MenuBanner.vue";
import FooterComponent from "../components/FooterComponent.vue";
import LoginComponent from '../components/LoginComponent.vue'

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

  mounted() {
    this.getContatos();
  },

  methods: {
    async getContatos() {
      try {
        const response = await axios.get("http://localhost:8080/contatos");
        this.contatos = response.data;
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    },
  },
};
</script>
