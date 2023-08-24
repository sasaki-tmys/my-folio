<template>
    <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
    style="bottom: 0%;"
    >
    <div>
        <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon.logo"
        variant="text"
        @click.stop="openOtherApplication(icon.link)"
        ></v-btn>
    </div>

    <div class="pt-0">
        Welcome to the virtual realm where bytes and pixels come to life! 🚀 Dive deep into the digital ocean and surf the waves of innovation with us. As you journey through, don't forget to pause and appreciate the symphony of code that dances behind every click and swipe. Here, in this nexus of creativity, we believe in mixing a pinch of magic with technology. So, go ahead, let your curiosity roam free and remember: in the world of ones and zeros, the only limit is the skyline of your imagination. Stay connected, stay inspired, and most importantly, enjoy the ride!
    </div>

    <v-divider></v-divider>

    <div>
        {{ new Date().getFullYear() }} — <strong>佐々木智康のポートフォリオ</strong>
    </div>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
    icons: [{
        logo: 'mdi-facebook',
        link: 'https://www.facebook.com/profile.php?id=100093524602921',
    },
    {
        logo: 'mdi-twitter',
        link: '',
    },
    {
        logo: 'mdi-github',
        link: 'https://github.com/sasaki-tmys',
    },
    {
        logo: 'mdi-instagram',
        link: 'https://instagram.com/ssk_tmys?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'
    }
    ],
    }),
    methods: {
        openOtherApplication(link) {
            window.open(link, '_blank')
        }
    }
}
</script>
<style default>
.v-footer{
    bottom: 0;
}
</style>