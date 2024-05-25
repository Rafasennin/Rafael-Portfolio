
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import AdminView from '../views/AdminView.vue';
import EventBus from '../helpers/EventBus';
import LoginView from '../views/LoginView.vue'

function Authorization(to, from, next) {
  const isAuthenticated = EventBus.isAuthenticated; 
  if (!isAuthenticated) {
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
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    beforeEnter: Authorization
  },
  {
    path: '/about',
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

