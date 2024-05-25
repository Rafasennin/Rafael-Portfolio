<template>
  <v-container>
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

    <v-table theme="dark">
      <thead>
        <tr>
          <th class=" text-h5">
            <v-row justify="center">
              <v-col cols="12" sm="4" md="4" lg="4">ID</v-col>
            </v-row>
          </th>
          <th class=" text-h5">
            <v-row justify="center">
              <v-col cols="12" sm="4" md="4" lg="4">Nome</v-col>
            </v-row>
          </th>
          <th class="text-h5">
            <v-row justify="center">
              <v-col cols="12" sm="4" md="4" lg="4">Email</v-col>
            </v-row>
          </th>
          <th class="text-h5">
            <v-row justify="center">
              <v-col cols="12" sm="4" md="4" lg="4" class="mr-16">Mensagem</v-col>
            </v-row>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="text-center" v-for="contato in contatos" :key="contato._id">
          <td>
            <v-row justify="center">
              <v-col cols="12" sm="3" md="3" lg="3" class="mr-16 ml-n16">{{ contato._id }}</v-col>
            </v-row>
          </td>
          <td>
            <v-row justify="center">
              <v-col cols="12" sm="3" md="3" lg="3">{{ contato.name }}</v-col>
            </v-row>
          </td>
          <td>
            <v-row justify="center">
              <v-col cols="12" sm="3" md="3" lg="3" class="mr-16">{{ contato.email }}</v-col>
            </v-row>
          </td>
          <td>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="6" lg="6" style="word-wrap: break-word;">{{ contato.message }}</v-col>
            </v-row>
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
        console.log("contatos recebidos: " + this.contatos)
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    },
  },
};
</script>
