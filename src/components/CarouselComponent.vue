<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12" class="mb-5 mt-4">
                <h1>{{ $t('portfolioTitle') }}</h1>
                <h3>{{ $t('portfolioSubtitle') }}</h3>
            </v-col>
        </v-row>

        <v-carousel height="150" :show-arrows="false" cycle hide-delimiters>
            <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src" cover></v-carousel-item>
        </v-carousel>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            images: [
                {
                    src: require('../assets/img_banner/express_img.png')
                },
                {
                    src: require('../assets/img_banner/javascritp_1.png')
                },
                {
                    src: require('../assets/img_banner/MongoDB_img.png')
                },
                {
                    src: require('../assets/img_banner/mongoose_img.png')
                },
                {
                    src: require('../assets/img_banner/nodejs_2.jpg')
                },
                {
                    src: require('../assets/img_banner/vouerouter_1.png')
                },
                {
                    src: require('../assets/img_banner/vue_img.jpg')
                },
                {
                    src: require('../assets/img_banner/vuetify_2.png')
                },
                {
                    src: require('../assets/img_banner/vuetify_3.png')
                }
            ],
        }
    },
}
</script>