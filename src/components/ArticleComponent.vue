<template>
    <v-container class="main__article">
        <v-img :src="imagem" aspect-ratio="16/9" :width="300" class="mb-5"></v-img>

        <h1 class="home__title">Bem-vindo ao meu portfólio.</h1>

        <h2 class="article__title">Sobre mim,</h2>

        <p class="article__p">
            Meu nome é <u>Rafael</u>, tenho 38 anos, sou brasileiro/israelense. Moro na cidade de Bragança Paulista - SP
            com meus dois filhos. Sou apaixonado pelo aprendizado de novos idiomas e consigo me comunicar nas seguintes
            línguas: Inglês, Hebraico, Francês, Espanhol, Italiano. Nas horas vagas sou músico e adoro me aventurar na
            culinária japonesa.
        </p>

        <p class="article__p">
            Me considero uma pessoa muito dedicada, focada e aberta a oportunidades. Acredito no meu potencial de
            desenvolvimento, mesmo com o desafio de migrar de carreira, <strong>saindo da área da saúde</strong>, onde
            atuei por mais de 15 anos, indo agora em direção a carreira de programador.
        </p><br><br>

        <h2 class="article__title"><u>Minha trajetória</u></h2>

        <p class="article__p">
            Atuei por 15 anos na área de saúde, iniciando minha trajetória profissional como técnico em radiologia
            médica, função na qual estive por cinco anos. Após concluir minha graduação como farmacêutico, trabalhei em
            funções como farmacêutico e subgerente farmacêutico, liderando um time de mais de 15 colaboradores. Motivado
            pelo amor por novas culturas e busca de melhores condições de trabalho, imigrei para Israel como cidadão
            israelense, onde recebi a licença para atuar como farmacêutico no país após 2 anos de muito estudo e provas
            de validação. Tive a oportunidade de atuar na Ben-shimon Floris, indústria farmacêutica israelense, na
            função de analista de assuntos regulatórios. Meu retorno ao Brasil despertou meu interesse por análises de
            sistemas e programação, me motivando a estudar desenvolvimento Front-end. Iniciei meus estudos na plataforma
            Alura e hoje, faço parte do grupo de mentorados do Pedro Marins e Henrique de Andrade. Em paralelo, estou
            cursando Análise e Desenvolvimento de Sistemas pela Universidade São Francisco.
        </p><br>

        <h2 class="article__title"><u>Meus objetivos</u></h2>

        <p class="article__p">
            Busco minha primeira oportunidade como desenvolvedor “Júnior/Trainee” e estou bastante otimista com o
            desenvolvimento dessa trajetória. Gosto de salientar que independente das certificações e diploma, meu
            objetivo é mostrar trabalho e competência na prática. Estou em constante aprendizado, pois sei que o caminho
            da programação é longo e exige constante desenvolvimento, contudo, acredito que já possuo as habilidades
            necessárias para atuar como desenvolvedor <u>Junior/Trainee.</u>
        </p><br><br>

        <h2 class="article__title"><u>Tecnologias e Skills</u></h2>

        <h4 class="article__p">Este portfólio foi desenvolvido utilizando as seguintes tecnologias:</h4><br>
        <ul>
            <li>Vue.js 3: Utilizado para criar interfaces interativas e responsivas.</li>
            <li>Vuetify 3: Framework de componentes para designs e estilização.</li>
            <li>HTML5, CSS3, JavaScript: Fundamentos para uma experiência de usuário acessível, bonita e eficiente.</li>
            <li>Node.js, Express.js, MongoDB: Backend para desenvolver servidores escaláveis, APIs RESTful e gerenciamento de dados eficiente.</li>
        </ul>
        <p class="article__p">Além disso, possuo habilidades em desenvolvimento Full-Stack, criação de interfaces responsivas, e desenvolvimento de APIs RESTful.</p>
        
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
