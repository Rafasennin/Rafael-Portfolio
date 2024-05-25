<template>
    <v-container class="main__article">
        <div class="d-flex justify-center">
            <v-img :src="imagem" aspect-ratio="16/9" :width="300" height="300" class="my-10 "></v-img>
        </div>
        <h2 class="article__title">Sobre mim,</h2><br>

        <p class="article__p">
            Meu nome é Rafael e sou desenvolvedor full-stack com experiência em projetos freelancers. Minha expertise
            se concentra em tecnologias como Node.js, MongoDB, Vue e Vuetify. Tenho me dedicado meu tempo ao
            aprimoramento
            contínuo nessas áreas, buscando sempre novos desafios e oportunidades para aplicar se desenvolver.
        </p>

        <p class="article__p">
            Após mais de 15 anos atuando na área da saúde como farmacêutico e técnico em radiologia médica, há mais de 2
            anos venho realizando a transição de carreira para a área de tecnologia, com foco no desenvolvimento de
            software. Atualmente, estou concluindo a faculdade de Análise e Desenvolvimento de Sistemas com ênfase total
            em desenvolvimento full-stack.
        </p>

        <p class="article__p">
            Minha abordagem de trabalho é caracterizada pela dedicação, foco e abertura para explorar novas
            possibilidades no mundo da tecnologia. Estou em busca de oportunidades para me desenvolver e estou aberto a
            propostas que me permitam aprender e contribuir para projetos.
        </p><br>
        <v-divider :thickness="1" class="border-opacity-50 mb-5 mt-5" color="black"></v-divider>
    </v-container>
</template>

<script>
export default {
    name: 'ArticleComponent',
    data: () => ({
        imagem: require("../assets/profile.jpg")
    })
};
</script>
