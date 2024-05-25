<template>
    <v-container class="mt-n8">
        <v-dialog v-model="dialog" max-width="600px">
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
                text: 'Projeto realizado para uma barbearia utlizando o frame work Vue 3, vue-router e vuetify-3.',
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
                title: 'Cabelo + Barba',
                src: require('../assets/calculator-thubnail.png'),
                flex: 6,
                text: 'Esta é uma aplicação de calculadora simples desenvolvida em JavaScript, HTML e CSS. Ela permite realizar operações matemáticas básicas como adição, subtração, multiplicação e divisão. A interface da calculadora é composta por um display para mostrar os números e o resultado das operações, além de teclas numéricas e de operações para realizar os cálculos.',
                url: 'https://rafasennin.github.io/JavaScript-Calculator/'
            },
        ],

        projetos: [
            {
                titulo: 'Cortes e Navalhas',
                descricao: 'Projeto realizado para uma barbearia',
                imagem: ""
            },
            {
                titulo: 'Projeto 2',
                descricao: 'Descrição do projeto 2',
                imagem: ""
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
                    title: 'Projeto ddo portfolio Rafael Santos',
                    text: 'Compartilhando um projeto d ededenvolvimento web full-stack',
                    url: 'https://exemplo.com',
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