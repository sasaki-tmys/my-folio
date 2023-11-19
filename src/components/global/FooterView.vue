<template>
    <v-footer
    color="background"
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

    <div>
        <p>A blog posting platform is a place to share creative ideas and information. </p>
        <p>Here you can post articles on a variety of topics and exchange ideas with other users. </p>
        <p>Use our blog posting platform as a place to present new ideas, share your expertise, and interact with the community. </p>
        <p>Come on, write a new article. We look forward to seeing you soon! </p>
    </div>

    <v-divider></v-divider>

    <div>
        {{ new Date().getFullYear() }} — <strong>佐々木智康のポートフォリオ</strong>
    </div>
    </v-footer>
</template>

<script setup>
import { ref } from 'vue';
const icons = ref([
    {logo: 'mdi-facebook', link: 'https://www.facebook.com/profile.php?id=100093524602921'},
    {logo: 'mdi-twitter', link: ''},
    {logo: 'mdi-github', link: 'https://github.com/sasaki-tmys'},
    {logo: 'mdi-instagram', link: 'https://instagram.com/ssk_tmys?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'},
]);

const openOtherApplication = (link) => {
    window.open(link, '_blank')
};
</script>

<style scoped>
.v-footer {
    text-align: center;
    display: flex;
    padding: 0%;
    flex-direction: column;
}
</style>