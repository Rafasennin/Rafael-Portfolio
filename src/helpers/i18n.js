// i18n.js
import { createI18n } from 'vue-i18n';

// Defina suas traduções
const messages = {
  en: {
    welcome: 'Welcome',
    task: 'Task',
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
    suggestions: 'Suggestions',
    admin: 'Admin',
    aboutTitle: 'About me,',
    aboutParagraph1: 'I am a full-stack developer with experience in freelance projects. My focus is on technologies such as Node.js, MongoDB, Vue, and Vuetify. I have dedicated my time to continuous improvement in these areas, always looking for new challenges and opportunities to develop myself.',
    aboutParagraph2: 'After more than 15 years working in the healthcare field as a pharmacist and medical radiology technician, I have been transitioning to the technology field for over 2 years, focusing on software development. I am currently completing my degree in Systems Analysis and Development with a total emphasis on full-stack development.',
    aboutParagraph3: 'My approach to work is characterized by dedication, focus, and openness to exploring new possibilities in the technology world. I am looking for opportunities to develop myself and am open to proposals that allow me to learn and contribute to innovative projects.'
  },
  pt: {
    welcome: 'Bem-vindo',
    task: 'Tarefa',
    home: 'Início',
    projects: 'Projetos',
    contact: 'Contato',
    suggestions: 'Sugestões',
    admin: 'Administrador',
    aboutTitle: 'Sobre mim,',
    aboutParagraph1: 'Sou desenvolvedor full-stack com experiência em projetos freelancers. Meu foco se concentra em tecnologias como Node.js, MongoDB, Vue e Vuetify. Tenho dedicado meu tempo ao aprimoramento contínuo nessas áreas, buscando sempre novos desafios e oportunidades para desenvolver-me.',
    aboutParagraph2: 'Após mais de 15 anos atuando na área da saúde como farmacêutico e técnico em radiologia médica, há mais de 2 anos venho realizando a transição de carreira para a área de tecnologia, com foco no desenvolvimento de software. Atualmente, estou concluindo a faculdade de Análise e Desenvolvimento de Sistemas com ênfase total em desenvolvimento full-stack.',
    aboutParagraph3: 'Minha abordagem de trabalho é caracterizada pela dedicação, foco e abertura para explorar novas possibilidades no mundo da tecnologia. Estou em busca de oportunidades para me desenvolver e estou aberto a propostas que me permitam aprender e contribuir para projetos inovadores.'
  }
};

// Crie uma instância do i18n
const i18n = createI18n({
  legacy: false, // use Composition API
  locale: 'pt', // idioma padrão
  fallbackLocale: 'en', // idioma de fallback
  messages, // mensagens de tradução
});

export default i18n;
