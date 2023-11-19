<template>
    <v-container id="skillContainer">
        <h1 class="display-2 font-weight-bold mb-4">
        技術一覧
        </h1>
        <v-row>
            <!-- フロントエンドのスキルセット -->
            <v-col cols="12" md="6">
                <SkillChart title="フロントエンドスキル" :skills="frontendSkills" />
            </v-col>

            <!-- バックエンドのスキルセット -->
            <v-col cols="12" md="6">
                <SkillChart title="バックエンドスキル" :skills="backendSkills" />
            </v-col>

            <!-- データベースのスキルセット -->
            <v-col cols="12" md="6">
                <SkillChart title="データベーススキル" :skills="databaseSkills" />
            </v-col>
            
            <!-- AWSのスキルセット -->
            <v-col cols="12" md="6">
                <SkillChart title="AWSサービススキル" :skills="awsSkills" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import SkillChart from '@/components/home/parts/SkillChart.vue';
import { ref } from 'vue';

// 各カテゴリのスキルデータ
const frontendSkills = ref([
    { name: 'Vue.js', level: 90, likes: 80, },
    { name: 'React', level: 85, likes: 10, },
    { name: 'HTML/CSS', level: 95, likes: 50, },
    { name: 'Nuxt.js', level: 95, likes: 80, },
    { name: 'PHP', level: 95, likes: 0, },
]);

const backendSkills = ref([
    { name: 'Node.js', level: 80, likes: 30, },
    { name: 'Python', level: 75, likes: 50, },
    { name: 'Ruby on Rails', level: 70, likes: 0, },
    { name: 'PHP', level: 70, likes: 40, },
    { name: 'C#', level: 70, likes: 0, },
]);

const databaseSkills = ref([
    { name: 'MySQL', level: 85, likes: 90, },
    { name: 'PostgreSQL', level: 80, likes: 50, },
    { name: 'SQL Server', level: 75, likes: 80, },
    { name: 'MongoDB', level: 75, likes: 0, },
    { name: 'Oracle', level: 75, likes: 0, },
]);

const awsSkills = ref([
    { name: 'EC2', level: 80, likes: 50, },
    { name: 'S3', level: 88, likes: 80, },
    { name: 'Lambda', level: 73, likes: 70, },
    { name: 'CloudFront', level: 73, likes: 0, },
]);
</script>
