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
    aboutParagraph3: 'My approach to work is characterized by dedication, focus, and openness to exploring new possibilities in the technology world. I am looking for opportunities to develop myself and am open to proposals that allow me to learn and contribute to innovative projects.',
    backgroundTitle: 'Background',
    skillsTitle: 'Skills',
    backgroundItem1: 'Systems Analysis and Development',
    detail1: 'Degree from São Francisco University',
    backgroundItem2: 'Bachelor in Pharmacy',
    detail2: 'Degree from São Francisco University',
    portfolioTitle: 'Rafael Santos Portfolio',
    portfolioSubtitle: 'Full-Stack Web Developer',
    projectDescription: 'Project description',
    accessProject: 'Access project',
    add: 'add',
    author: 'Author',
    title: 'Title',
    date: 'Date',
    text: 'Content',
    action: 'Action',
    send: 'send',
    close: 'Close',
    adminSection: 'Admin Section',
    learnMore: 'Learn more',
    cardTitle1: 'Psychological Inventory',
    cardText1: 'This application, "Psychological Inventory," was developed as a tool to assist in daily recording of psychological defects and virtues, promoting self-awareness. Through it, it is possible to identify the points that hinder the awakening of consciousness and the release of essence, facilitating personal development.',
    cardTitle2: 'Task List',
    cardText2: 'In this project "Task List," Vue 3 and Nuxt.js were used. I used Vuex for state management and Vuetify for interface components. I implemented a secure structure with dedicated sessions for each user, using encryption for safe data storage in MongoDB. Authentication is done through JWT tokens (JSON Web Tokens), ensuring the security and integrity of operations in the application. This project aims to apply advanced technical knowledge in creating functional and secure solutions.',
    cardTitle3: 'Cuts & Razors',
    cardText3: `This is a service scheduling platform developed with Vue.js.
                  About the Project:
                  The goal of this project was to create an intuitive and user-friendly platform for scheduling beauty services. From the beginning,
                  I focused on developing a dynamic and responsive user interface, allowing users to easily navigate through available services,
                   choose their favorite professionals, and schedule appointments with ease.
                  Technologies Used:
                  - Vue.js: As the main framework, Vue.js was the natural choice due to its flexibility and efficiency in creating interactive user interfaces.
  
                  - Vue Router: I used Vue Router to manage the different routes of the application, ensuring a smooth navigation experience.
  
                  - Reusable Vue Components: I organized the code into reusable Vue components, which facilitated the maintenance and expansion of the project.
  
                  - Vuetify: For styling, I opted for Vuetify, a Vue.js component framework that offers a wide range of pre-designed and responsive user interface elements.
  
                  - Encoding Route Information: I implemented data encoding to pass information through the application's routes, ensuring the security and integrity of transmitted data.
  
                  Skills Demonstrated:
                  - Mastery of Vue.js: This project allowed me to deepen my knowledge of Vue.js, strengthening my skills in building dynamic web applications.
  
                  - Route Management with Vue Router: I used Vue Router to create a smooth navigation experience, ensuring that users can easily access different sections of the platform.
  
                  - Styling with Vuetify: Styling with Vuetify allowed me to create an attractive and responsive user interface, significantly enhancing the user experience.
  
                  - Secure Data Handling: I implemented data encoding techniques to ensure the security and integrity of information transmitted by the application.
  
                  Creating this project highlighted the versatility and efficiency of Vue.js in building responsive web applications in an optimized, dynamic manner with a secure data structure.
                  It is important to note that the payment component is only a representation, and it is necessary to use a secure API, such as Mercado Pago or Pagar.me. Additionally,
                  the next step will be to implement user registration integrated with the MongoDB database.`,
    cardTitle4: 'Mister Fortune',
    cardText4: 'The "Mistery" project is a number guessing game developed with HTML, CSS, and JavaScript. The player is challenged to think of a number, and the game will try to guess it through a series of instructions and voice interactions. In the game, an initial greeting invites the player to think of a number. Then, the game tries to guess the number through a series of mathematical operations. The player interacts with the game through voice commands, such as "next" to advance to the next step and "result" to reveal the final number. At the end, the game displays the guessed number and offers the option to restart for a new game.',
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
    aboutParagraph3: 'Minha abordagem de trabalho é caracterizada pela dedicação, foco e abertura para explorar novas possibilidades no mundo da tecnologia. Estou em busca de oportunidades para me desenvolver e estou aberto a propostas que me permitam aprender e contribuir para projetos inovadores.',
    backgroundTitle: 'Formação Acadêmica',
    skillsTitle: 'Habilidades',
    backgroundItem1: 'Análise e Desenvolvimento de Sistemas',
    detail1: 'Graduação pela Universidade São Francisco',
    backgroundItem2: 'Bacharel em Farmácia',
    detail2: 'Graduação pela Universidade São Francisco',
    portfolioTitle: 'Portfólio de Rafael Santos',
    portfolioSubtitle: 'Desenvolvedor Web Full-Stack',
    projectDescription: 'Descrição do Projeto',
    accessProject: 'Acesse o projeto',
    add: 'Adicionar',
    author: 'Autor',
    title: 'Título',
    date: 'Data',
    text: 'Conteúdo',
    action: 'Ação',
    send: 'Enviar',
    close: 'Fechar',
    learnMore: 'Saiba mais',
    adminSection: 'Seção do Administrador',
    cardTitle1: 'Inventário Psicológico',
    cardText1: 'Este aplicativo, "Inventário Psicológico", foi desenvolvido como uma ferramenta para auxiliar no registro diário dos defeitos psicológicos e virtudes, promovendo o autoconhecimento. Através dele, é possível identificar os pontos que impedem o despertar da consciência e a liberação da essência, facilitando o desenvolvimento pessoal.',
    cardTitle2: 'Lista de Tarefas',
    cardText2: 'Neste projeto "Lista de Tarefas" foi desenvolvido utilizando Vue 3 e Nuxt.js, utilizei Vuex para gerenciamento de estado e Vuetify para componentes de interface. Implementei uma estrutura segura com sessões dedicadas para cada usuário, utilizando criptografia para armazenamento seguro dos dados no MongoDB. A autenticação é realizada através de tokens JWT (JSON Web Tokens), garantindo a segurança e integridade das operações na aplicação. Este projeto tem o objetivo de aplicar conhecimentos técnicos avançados na criação de soluções funcionais e seguras.',
    cardTitle3: 'Cortes & Navalhas',
    cardText3: `Esta é uma plataforma de agendamento de serviços, desenvolvida com Vue.js.
                Sobre o Projeto:
                O objetivo deste projeto foi criar uma plataforma intuitiva e fácil de usar para agendar serviços de beleza. Desde o início, 
                concentrei-me em desenvolver uma interface de usuário dinâmica e responsiva, permitindo que os usuários naveguem facilmente pelos serviços disponíveis,
                 escolham seus profissionais preferidos e agendem seus compromissos com facilidade.
                Tecnologias Utilizadas:
                - Vue.js: Como framework principal, o Vue.js foi a escolha natural devido à sua flexibilidade e eficiência na criação de interfaces de usuário interativas.

                - Vue Router: Utilizei o Vue Router para gerenciar as diferentes rotas da aplicação, garantindo uma experiência de navegação suave.

                - Componentes Vue Reutilizáveis: Organizei o código em componentes Vue reutilizáveis, o que facilitou a manutenção e a expansão do projeto.

                - Vuetify: Para a estilização, optei pelo Vuetify, um framework de componentes Vue.js que oferece uma ampla gama de elementos de interface do usuário pré-projetados e responsivos.

                - Codificação de Informações para Rotas: Implementei a codificação de informações para passá-las pelas rotas da aplicação, garantindo a segurança e a integridade dos dados transmitidos.

                Habilidades Demonstradas:
                - Domínio do Vue.js: Este projeto me permitiu aprofundar meu conhecimento em Vue.js, fortalecendo minhas habilidades na construção de aplicações web dinâmicas.

                - Gestão de Rotas com Vue Router: Utilizei o Vue Router para criar uma experiência de navegação fluida, garantindo que os usuários possam acessar facilmente as diferentes seções da plataforma.

                - Estilização com Vuetify: A aplicação de estilos com o Vuetify me permitiu criar uma interface de usuário atraente e responsiva, melhorando significativamente a experiência do usuário.

                - Trabalho com Dados de Forma Segura: Implementei técnicas de codificação de dados para garantir a segurança e a integridade das informações transmitidas pela aplicação.

                Criar este projeto destacou a versatilidade e eficiência do Vue.js na construção de aplicações web responsivas de forma otimizada, dinâmica e com uma estrutura segura em relação aos dados. 
                É importante ressaltar que o componente de pagamento é apenas uma representação, sendo necessário utilizar uma API segura, como Mercado Pago ou Pagar.me. Além disso, 
                o próximo passo será a implementação do cadastro de usuários, integrado ao banco de dados mondodb.`,
    cardTitle4: 'Mister Fortune',
    cardText4: 'O projeto "Mistery" é um jogo de adivinhação de números desenvolvido com HTML, CSS e JavaScript. O jogador é desafiado a pensar em um número, e o jogo tentará adivinhá-lo através de uma série de instruções e interações por voz. No jogo, uma saudação inicial convida o jogador a pensar em um número. Em seguida, o jogo tenta adivinhar o número através de uma série de operações matemáticas. O jogador interage com o jogo através de comandos de voz, como "próximo" para avançar para a próxima etapa e "resultado" para revelar o número final. Ao final, o jogo exibe o número adivinhado e oferece a opção de reiniciar para uma nova partida.',
  },
  he: {
    welcome: 'ברוך הבא',
    task: 'משימה',
    home: 'בית',
    projects: 'פרויקטים',
    contact: 'צור קשר',
    suggestions: 'הצעות',
    admin: 'מנהל',
    aboutTitle: 'על עצמי',
    aboutParagraph1: 'I am a full-stack developer with experience in freelance projects. My focus is on technologies such as Node.js, MongoDB, Vue, and Vuetify. I have dedicated my time to continuous improvement in these areas, always looking for new challenges and opportunities to develop myself.',
    aboutParagraph2: 'After more than 15 years working in the healthcare field as a pharmacist and medical radiology technician, I have been transitioning to the technology field for over 2 years, focusing on software development. I am currently completing my degree in Systems Analysis and Development with a total emphasis on full-stack development.',
    aboutParagraph3: 'My approach to work is characterized by dedication, focus, and openness to exploring new possibilities in the technology world. I am looking for opportunities to develop myself and am open to proposals that allow me to learn and contribute to innovative projects.',
    backgroundTitle: 'רקע',
    skillsTitle: 'כישורים',
    backgroundItem1: 'ניתוח ופיתוח מערכות',
    detail1: 'תואר מאוניברסיטת סאו פרנסיסקו',
    backgroundItem2: 'תואר ראשון בפארמציה',
    detail2: 'תואר מאוניברסיטת סאו פרנסיסקו',
    portfolioTitle: 'פורטפוליו של רפאל סנטוס',
    portfolioSubtitle: 'מפתח אינטרנט full-stack',
    projectDescription: 'תיאור הפרויקט',
    accessProject: 'גש לפרויקט',
    add: 'הוסף',
    author: 'מחבר',
    title: 'כותרת',
    date: 'תאריך',
    text: 'תוכן',
    action: 'פעולה',
    send: 'שלח',
    close: 'סגור',
    learnMore: 'מידע נוסף',
    adminSection: 'סקשן המנהל',
    cardTitle1: 'מלאי פסיכולוגי',
    cardText1: 'This application, "Psychological Inventory," was developed as a tool to assist in daily recording of psychological defects and virtues, promoting self-awareness. Through it, it is possible to identify the points that hinder the awakening of consciousness and the release of essence, facilitating personal development.',
    cardTitle2: 'רשימת משימות',
    cardText2: 'In this project "Task List," Vue 3 and Nuxt.js were used. I used Vuex for state management and Vuetify for interface components. I implemented a secure structure with dedicated sessions for each user, using encryption for safe data storage in MongoDB. Authentication is done through JWT tokens (JSON Web Tokens), ensuring the security and integrity of operations in the application. This project aims to apply advanced technical knowledge in creating functional and secure solutions.',
    cardTitle3: 'גילופים וסכינים',
    cardText3: `This is a service scheduling platform developed with Vue.js.
    About the Project:
    The goal of this project was to create an intuitive and user-friendly platform for scheduling beauty services. From the beginning,
    I focused on developing a dynamic and responsive user interface, allowing users to easily navigate through available services,
     choose their favorite professionals, and schedule appointments with ease.
    Technologies Used:
    - Vue.js: As the main framework, Vue.js was the natural choice due to its flexibility and efficiency in creating interactive user interfaces.

    - Vue Router: I used Vue Router to manage the different routes of the application, ensuring a smooth navigation experience.

    - Reusable Vue Components: I organized the code into reusable Vue components, which facilitated the maintenance and expansion of the project.

    - Vuetify: For styling, I opted for Vuetify, a Vue.js component framework that offers a wide range of pre-designed and responsive user interface elements.

    - Encoding Route Information: I implemented data encoding to pass information through the application's routes, ensuring the security and integrity of transmitted data.

    Skills Demonstrated:
    - Mastery of Vue.js: This project allowed me to deepen my knowledge of Vue.js, strengthening my skills in building dynamic web applications.

    - Route Management with Vue Router: I used Vue Router to create a smooth navigation experience, ensuring that users can easily access different sections of the platform.

    - Styling with Vuetify: Styling with Vuetify allowed me to create an attractive and responsive user interface, significantly enhancing the user experience.

    - Secure Data Handling: I implemented data encoding techniques to ensure the security and integrity of information transmitted by the application.

    Creating this project highlighted the versatility and efficiency of Vue.js in building responsive web applications in an optimized, dynamic manner with a secure data structure.
    It is important to note that the payment component is only a representation, and it is necessary to use a secure API, such as Mercado Pago or Pagar.me. Additionally,
    the next step will be to implement user registration integrated with the MongoDB database.`,
  },
};

// Crie uma instância do i18n
const i18n = createI18n({
  legacy: false, // use Composition API
  locale: 'pt', // idioma padrão
  fallbackLocale: 'en', // idioma de fallback
  messages, // mensagens de tradução
});

export default i18n;
