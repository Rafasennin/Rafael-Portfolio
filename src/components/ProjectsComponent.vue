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
                                <v-btn color="primary" size="small" variant="text" @click="openModal(card)">{{
            $t('learnMore') }}</v-btn>
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
    computed: {
        cards() {
            return [
            {
                    title: this.$t('cardTitle5'),
                    src: require('../assets/cogumelos_saudez.png'),
                    flex: 6,
                    text: this.$t('cardText5'),
                    url: 'https://cogumelosaudez.com.br/'
                },
                {
                    title: this.$t('cardTitle1'),
                    src: require('../assets/inventario_psicologico.png'),
                    flex: 6,
                    text: this.$t('cardText1'),
                    url: 'https://inventario-psicologico.vercel.app/'
                },
                {
                    title: this.$t('cardTitle2'),
                    src: require('../assets/lista_de_tarefas.png'),
                    flex: 6,
                    text: this.$t('cardText2'),
                    url: 'https://lista-de-tarefas-seven-red.vercel.app/'
                },
                {
                    title: this.$t('cardTitle3'),
                    src: require('../assets/cortes-e-navalhas.png'),
                    flex: 6,
                    text: this.$t('cardText3'),
                    url: 'https://projeto-de-software-one.vercel.app/#/'
                },
                {
                    title: this.$t('cardTitle4'),
                    src: require('../assets/mister-fortune-thumbnail.png'),
                    flex: 6,
                    text: this.$t('cardText4'),
                    url: 'https://mister-fortune-english-git-main-rafasennin.vercel.app/'
                }

            ];
        }
    },
   
    name: 'MainBodyComponent',

    data: () => ({
        dialog: false,
        selectedCard: {},
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
