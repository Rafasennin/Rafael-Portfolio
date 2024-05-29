<template>
  <v-container class="bg-black"> 
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Rafael Portfolio</h1>
        <p>Desenvolvedor Web Full-Stack</p>
      </v-col>
    </v-row>

    <MenuBannerComponent />

    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Contato</h1>
      </v-col>
    </v-row>
<v-container>
    <v-row>
      <v-col cols="12">
        <v-form class="mb-10" ref="form">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Nome" v-model="contato.name" :rules="nameRules"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Email" v-model="contato.email" :rules="emailRules"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Mensagem" v-model="contato.message"></v-textarea>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn color="primary" @click="sendContact">Enviar</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-progress-linear v-if="isLoading" indeterminate color="primary"></v-progress-linear>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
    <FooterComponent />
  </v-container>
</template>

<script>
import MenuBannerComponent from "../components/MenuBanner.vue";
import FooterComponent from "../components/FooterComponent.vue";
import axios from "axios";
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ContactView',

  components: {
    MenuBannerComponent,
    FooterComponent
  },

  data() {
    return {
      nameRules: [
        value => !!value || 'Digite seu nome.',
        value => (value && value.length >= 3) || 'Digite um nome válido.'
      ],
      emailRules: [
        value => !!value || 'Digite um email.',
        value => /.+@.+\..+/.test(value) || 'O E-mail deve ser válido.'
      ],
      contato: {
        name: "",
        email: "",
        message: ""
      }
    };
  },

  computed: {
    ...mapState(['isLoading']), // Mapeie o estado de carregamento para o componente
  },

  methods: {
    async sendContact() {
      // Verificar se os campos obrigatórios estão preenchidos
      if (this.contato.name && this.contato.email) {
        this.SET_LOADING(true);
        try {
          await axios.post("https://rafael-portfolio-back-end.vercel.app/contatos", this.contato);
          this.$router.push({ name: 'about' });
          console.log("Contato enviado:", this.contato);
        } catch (error) {
          console.error("Erro ao enviar contato:", error);
        }
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    },
    ...mapMutations(['SET_LOADING']), // Mapeie a mutação para o componente
  }  
}
</script>
