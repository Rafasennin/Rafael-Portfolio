<template>
    <v-container class="mt-n10">
        <v-dialog v-model="dialog" max-width="auto">
            <v-card>
                <v-img :src="selectedCard.src" aspect-ratio="16/9" cover></v-img>
                <v-card-title>{{ selectedCard.title }}</v-card-title>
                <v-card-text>
                    <strong>Descrição do projeto: </strong> <br>
                    {{ selectedCard.text }}
                    <br><br>
                    <h4>Acesse o projeto no link abaixo:</h4>
                    <a :href="selectedCard.url" target="_blank">{{ selectedCard.url }}</a>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Seção de Projetos -->
        <v-row>
            <v-col cols="12" class="text-center mt-5">
                <h1>Projetos</h1>
            </v-col>
        </v-row>

        <v-card class="mx-auto" max-width="auto">
            <v-container fluid>
                <v-row dense class="d-flex justify-center">
                    <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4" lg="3" class="text-center">
                        <v-card>
                            <v-card-title class="text-black" v-text="card.title"></v-card-title>
                            <v-img :src="card.src" class="align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                            </v-img>

                            <v-card-actions>
                                <v-btn color="primary" size="small" variant="text" @click="openModal(card)">Saiba
                                    mais</v-btn>
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
            {
                title: 'Calculadora Javascript',
                src: require('../assets/calculator-thubnail.png'),
                flex: 6,
                text: 'Esta é uma aplicação de calculadora simples desenvolvida em JavaScript, HTML e CSS. Ela permite realizar operações matemáticas básicas como adição, subtração, multiplicação e divisão. A interface da calculadora é composta por um display para mostrar os números e o resultado das operações, além de teclas numéricas e de operações para realizar os cálculos.',
                url: 'https://rafasennin.github.io/JavaScript-Calculator/'
            },
            {
                title: 'Pokedex',
                src: require('../assets/pokedex_thumbnail.png'),
                flex: 6,
                text: 'Uma API de busca por pokemons.',
                url: 'https://pokedex-nine-wheat.vercel.app/'
            },
            {
                title: 'Calculadora de Gorjetas',
                src: require('../assets/calculadora_gorjetas_thumbnail.png'),
                flex: 6,
                text: 'Uma aplicação simples e prática para calcular as gorjetas e divir pelo número de pagantes.',
                url: 'https://calculadora-de-gorjetas-pi.vercel.app/'
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