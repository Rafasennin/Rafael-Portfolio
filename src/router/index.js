
import { createRouter, createWebHashHistory } from 'vue-router'
import ProjecstView from '../views/ProjectsView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import AdminView from '../views/AdminView.vue';
import LoginView from '../views/LoginView.vue'
import { useStore } from 'vuex';  

function Authorization(to, from, next) {
  const store = useStore();
  const isLogged = store.state.isLogged; 
  if (!isLogged) {
    next({ name: 'login' }); // Chamando a próxima rota com o objeto de localização
  } else {
    next(); // Chamando a próxima rota sem parâmetros
  }
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjecstView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    beforeEnter: Authorization
  },
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

