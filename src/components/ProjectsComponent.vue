<template>
    <v-container>
        <v-dialog v-model="dialog" max-width="auto">
            <v-card>
                <v-img :src="selectedCard.src" aspect-ratio="16/9" cover></v-img>
                <v-card-title>{{ selectedCard.title }}</v-card-title>
                <v-card-text>
                    <strong>{{ $t('projectDescription') }}: </strong> <br>
                    {{ selectedCard.text }}
                    <br><br>
                    <h4>{{ $t('accessProject') }}:</h4>
                    <a :href="selectedCard.url" target="_blank">{{ selectedCard.url }}</a>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">{{ $t('close') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Seção de Projetos -->
      

        <v-card class="mx-auto bg-grey-darken-4" max-width="auto">
            <v-container fluid>
                <v-row dense class="d-flex justify-center">
                    <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4" lg="3" class="text-center">
                        <v-card class="ma-4">
                            <v-card-title class="text-black" v-text="card.title"></v-card-title>
                            <v-img :src="card.src" class="align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                            </v-img>

                            <v-card-actions>
                                <v-btn color="primary" size="small" variant="text" @click="openModal(card)">{{ $t('learnMore') }}</v-btn>
                                <v-spacer></v-spacer>

                                <v-btn color="surface-variant" icon="mdi-share-variant" size="small" variant="text"
                                    @click="shareLink"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>

export default {
    name: 'MainBodyComponent',

    data: () => ({
        dialog: false,
        selectedCard: {},
        cards: [
            {
                title: 'Inventário Psicológico',
                src: require('../assets/inventario_psicologico.png'),
                flex: 6,
                text: 'Este aplicativo, "Inventário Psicológico", foi desenvolvido como uma ferramenta para auxiliar no registro diário dos defeitos psicológicos e virtudes, promovendo o autoconhecimento. Através dele, é possível identificar os pontos que impedem o despertar da consciência e a liberação da essência, facilitando o desenvolvimento pessoal.',
                url: 'https://inventario-psicologico.vercel.app/'
            },
            {
                title: 'Lista de Tarefas',
                src: require('../assets/lista_de_tarefas.png'),
                flex: 6,
                text: 'Neste projeto "Lista de Tarefas" foi desenvolvido utilizando Vue 3 e Nuxt.js, utilizei Vuex para gerenciamento de estado e Vuetify para componentes de interface. Implementei uma estrutura segura com sessões dedicadas para cada usuário, utilizando criptografia para armazenamento seguro dos dados no MongoDB. A autenticação é realizada através de tokens JWT (JSON Web Tokens), garantindo a segurança e integridade das operações na aplicação. Este projeto tem o objetivo de aplicar conhecimentos técnicos avançados na criação de soluções funcionais e seguras.',
                url: 'https://lista-de-tarefas-seven-red.vercel.app/'
            },
            {
                title: 'Cortes & Navalhas',
                src: require('../assets/cortes-e-navalhas.png'),
                flex: 12,
                text: `Esta é uma plataforma de agendamento de serviços, desenvolvida com Vue.js.
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
                url: 'https://projeto-de-software-one.vercel.app/#/'

            },
            {
                title: 'Mister Fortune',
                src: require('../assets/mister-fortune-thumbnail.png'),
                flex: 6,
                text: 'O projeto "Mistery" é um jogo de adivinhação de números desenvolvido com HTML, CSS e JavaScript. O jogador é desafiado a pensar em um número, e o jogo tentará adivinhá-lo através de uma série de instruções e interações por voz. No jogo, uma saudação inicial convida o jogador a pensar em um número. Em seguida, o jogo tenta adivinhar o número através de uma série de operações matemáticas. O jogador interage com o jogo através de comandos de voz, como "próximo" para avançar para a próxima etapa e "resultado" para revelar o número final. Ao final, o jogo exibe o número adivinhado e oferece a opção de reiniciar para uma nova partida.',
                url: 'https://mister-fortune-english-git-main-rafasennin.vercel.app/'
            },

        ],
    }),
    methods: {
        openModal(card) {
            this.selectedCard = card;
            this.dialog = true;
        },

        shareLink() {
            if (navigator.share) {
                navigator.share({
                    title: 'Projeto do portfolio Rafael Santos',
                    text: 'Compartilhando um projeto de desenvolvimento web full-stack',
                    url: 'http://rafael-portfolio-azure.vercel.app/#/projects',
                }).then(() => {
                    console.log('Conteúdo compartilhado com sucesso!');
                }).catch((error) => {
                    console.error('Erro ao compartilhar:', error);
                });
            } else {
                console.log('A API de Web Share não está disponível neste navegador.');
                // Implementar uma lógica alternativa de compartilhamento
            }
        }

    },

    
}
</script>
