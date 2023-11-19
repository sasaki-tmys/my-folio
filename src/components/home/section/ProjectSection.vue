<template>
    <v-container id="projectContainer">
        <h1 class="display-2 font-weight-bold mb-4">
        成果物
        </h1>
        <v-row>
            <v-col 
            cols="12"
            md="4"
            v-for="project in projects" 
            :key="project.id"
            >
                <ProjectCard :project="project"></ProjectCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from '@/components/home/parts/ProjectCard.vue';

const projects = ref([
    {
        id: '01',
        language: 'JavaScript',
        title: '〇〇アプリ',
        subtitle: '〇〇を行うwebアプリです。',
        image: '../../assets/sample01.png'
    },
    {
        id: '02',
        language: 'JavaScript',
        title: '〇〇アプリ',
        subtitle: '〇〇を行うwebアプリです。',
        image: '../../assets/sample01.png'
    },
    {
        id: '03',
        language: 'JavaScript',
        title: '〇〇アプリ',
        subtitle: '〇〇を行うwebアプリです。',
        image: '../../assets/sample01.png'
    },
    {
        id: '04',
        language: 'Unity',
        title: '〇〇アプリ',
        subtitle: '〇〇を行うwebアプリです。',
        image: '../assets/sample01.png'
    },
    {
        id: '05',
        language: 'Python',
        title: '〇〇アプリ',
        subtitle: '〇〇を行うwebアプリです。',
        image: '../../assets/sample01.png'
    },
    {
        id: '06',
        language: 'Python',
        title: '〇〇アプリ',
        subtitle: '〇〇を行うwebアプリです。',
        image: '../../assets/sample01.png'
    }
]);

// const filterProjectsByLanguage = (language) => {
//     return projects.value.filter((project) => project.language === language);
// };

</script>