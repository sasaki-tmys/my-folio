<template>
    <v-app-bar
    image="https://picsum.photos/1920/1080?random"
    >
    <template v-slot:image>
        <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
    </template>
    
    <v-app-bar-title class="text-center">佐々木智康のポートフォリオ</v-app-bar-title>
    
    <v-spacer></v-spacer>

    <v-col cols="auto">
        <v-btn variant="outlined" @click.stop="scrollToTarget('AboutSection')">このサイトについて</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined" @click.stop="scrollToTarget('ProjectSection')">成果物</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined" @click.stop="scrollToTarget()">技術一覧</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined" @click.stop="scrollToTarget('CarrerSection')">経歴</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined" @click.stop="scrollToTarget('ContactSection')">お問い合わせ</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn icon >
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-col>
    </v-app-bar>
</template>
<script>
import { useScrollStore } from '../store/index'
export default {
    name: 'HeaderView',
    data: () => ({
    }),
    methods: {
      // 対象のコンテナまでスクロールする
        scrollToTarget(sectionRef) {
            const scrollStore = useScrollStore();
            scrollStore.setSectionToScroll(sectionRef);
    },
    }
}
</script>
<style scoped>

</style>
