<template>
  <v-container class="bg-black">
    <!--Animated Background-->
    <animetedBackground />
    <MenuBannerComponent />

    <v-row class="text-center mt-5">
      <v-col cols="12">
        <h1>{{ $t('portfolioTitle') }}</h1>
        <h3>{{ $t('portfolioSubtitle') }}</h3>
      </v-col>
    </v-row>

    <form @submit.prevent="addTask" class="mt-4">
      <v-text-field v-model="taskAuthor" label="Author"></v-text-field>
      <v-text-field v-model="taskName" label="Title"></v-text-field>
      <v-text-field v-model="taskDate" label="Date" readonly></v-text-field>
      <v-textarea v-model="taskContent" label="Content"></v-textarea>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn color="deep-purple-accent-4"  type="submit">{{ $t('add') }}</v-btn>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-progress-linear v-if="isAdding" indeterminate color="primary"></v-progress-linear>
          </v-row>
        </v-col>
      </v-row>
    </form>

    <v-table theme="dark" class="overflow-x-auto">
      <thead>
        <tr>
          <th class="text-h5 text-center">{{ $t('author') }}</th>
          <th class="text-h5 text-center">{{ $t('title') }}</th>
          <th class="text-h5 text-center">{{ $t('date') }}</th>
          <th class="text-h5 text-center">{{ $t('text') }}</th>
          <th class="text-h5 text-center">{{ $t('action') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="task in tasks" :key="task._id">
          <td>{{ task.author }}</td>
          <td>{{ task.name }}</td>
          <td>{{ task.date }}</td>
          <td class="word-wrap-break">{{ task.content }}</td>
          <td>
            <v-btn v-if="loginStatus" @click="deleteTask(task._id)" class="text-decoration-none bg-red-darken-4">
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
import MenuBannerComponent from "../components/MenuBanner.vue";
import FooterComponent from "../components/FooterComponent.vue";
import axios from "axios";
import { mapState, mapMutations } from 'vuex';
import store from '../store/index';
import animetedBackground from '../components/animatedBackground.vue'

export default {
  name: 'ToDoView',

  components: {
    MenuBannerComponent,
    FooterComponent,
    animetedBackground
  },

  data() {
    return {
      taskAuthor: "",
      taskName: "",
      taskDate: this.getCurrentDate(),
      taskContent: "",
      tasks: [],
    };
  },

  computed: {
    ...mapState(['isAdding', 'isFetching', 'isLogged']),
    loadingFlag() {
      return this.isFetching;
    },

    loginStatus() {
      return this.isLogged;

    },
    ...mapState(['isLogged']),


  },

  mounted() {
    this.SET_ADDING(false);
    this.getTasks();
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

    getCurrentDate() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },

    async getTasks() {
      try {
        this.SET_FETCHING(true);

        const response = await axios.get("https://rafael-portfolio-back-end.vercel.app/tasks"); // Corrigir para tasks
        this.tasks = response.data;

        // Após concluir a busca de contatos, atualiza o estado de isFetching para false
        this.SET_FETCHING(false);
        this.taskAuthor = "";
        this.taskContent = "";
        this.taskName = ""
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        this.SET_FETCHING(false);
      }
    },

    async addTask() {
      if (this.taskName && this.taskAuthor && this.taskContent) {
        this.SET_ADDING(true);
        try {
          const task = {
            author: this.taskAuthor,
            name: this.taskName,
            date: this.getCurrentDate(),
            content: this.taskContent
          };
          await axios.post("https://rafael-portfolio-back-end.vercel.app/tasks", task);
          this.getTasks();
        } catch (error) {
          console.error("Erro ao enviar tarefa:", error);
        } finally {
          this.SET_ADDING(false);
        }
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    },

    async deleteTask(taskId) {
      try {
        await axios.delete(`https://rafael-portfolio-back-end.vercel.app/tasks/${taskId}`);

        // Atualiza a lista de tasks após a exclusão
        this.getTasks();
      } catch (error) {
        console.error("Erro ao excluir tarefa:", error);
      }
    },

    ...mapMutations(['SET_ADDING', 'SET_FETCHING', 'SET_LOGGED']),
  }
};
</script>