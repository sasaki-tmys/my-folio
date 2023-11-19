<template>
    <v-app-bar
    flat
    class="v-app-bar-transparent"
    style="background-color: transparent !important; box-shadow: none !important;"
    >
    
    <v-spacer></v-spacer>

    <v-row align-content="center" >
        <v-col cols="auto" v-for="section in sections" :key="section.id" max-width="100%">
        <v-btn 
        variant="outlined" 
        color="secondary-darken-1"
        @click.stop="scrollToTarget(section.target)"
        >{{section.title}}
        </v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn 
        variant="outlined"
        to="/blog"
        target="_blank"
        color="secondary-darken-1"
        >日記</v-btn>
    </v-col>
    </v-row>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import { useScrollStore } from '@/store'

const store = useScrollStore()
const sections = ref([
    {title: 'このサイトについて', target: 'About'},
    {title: '成果物', target: 'Project'},
    {title: '技術一覧', target: 'Skill'},
    {title: '生成画像', target: 'Gallery'},
    {title: '経歴', target: 'Carrer'},
    {title: 'お問い合わせ', target: 'Contact'},
]);
const  scrollToTarget = (sectionRef) => {
    store.setSectionToScroll(sectionRef);
}
</script>