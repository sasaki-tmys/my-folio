<template>
    <v-container id="projectContainer">
    <h1 class="mb-4">成果物一覧</h1>
    <div v-for="language in languages" :key="language">
        <h3>{{ language }}</h3>
        <v-row scroll-x class="ma-auto">
            <v-col 
            v-for="project in filterProjectsByLanguage(language)" 
            :key="project.id"
            >
                <ProjectCard :project="project"></ProjectCard>
            </v-col>
        </v-row>
    </div>
    </v-container>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
    name: 'ProjectSection',
    props: ['projects', 'languages'],
    components: {
    ProjectCard
    },
    methods: {
    filterProjectsByLanguage(language) {
        return this.projects.filter((project) => project.language === language);
    }
    }
};
</script>