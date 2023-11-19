<template>
    <v-container id="carrerContainer">
        <h1 class="display-2 font-weight-bold mb-4">
        経歴
        </h1>
        <v-timeline align="start">
        <v-timeline-item v-for="career in careers" :key="career.id">
            <template v-slot:opposite>
            {{ career.date }} <br> {{ career.subtitle }}
            </template>
            <div>
            <div class="text-h6">{{ career.title }}</div>
            <p>{{ career.description }}</p>
            </div>
        </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script setup>
import { ref, } from 'vue';

const careers = ref([
    {
        id: '01',
        date: '2000/07',
        title: '生まれる',
        subtitle: '',
        description: '埼玉県で生まれる',
    },
    {
        id: '02',
        date: '2019/03',
        title: '高校卒業',
        subtitle: 'いざ東京へ',
        description: '高校卒業の数日後に新聞を配達するために上京。日経新聞社の寮という名のボロボロの販売店に配属',
    },
    {
        id: '03',
        date: '2021/03',
        title: '専門学校卒業',
        subtitle: 'いざ札幌へ',
        description: '日本工学院専門学校の情報処理科システム開発コースを卒業し同時期に新聞奨学生も卒業',
    },
    {
        id: '04',
        date: '2021/04',
        title: '第三者検証の会社に就職',
        subtitle: '就職を機に札幌へ北上',
        description: '日本ナレッジ株式会社札幌支社に就職。基幹業務システムの仕様追加等の業務に従事',
    },
    {
        id: '05',
        date: '2022/09',
        title: '転職',
        subtitle: '他の会社へ転職',
        description: 'さまざまな案件を経験するために株式会社エスプランニングへ転職',
    }
]);

</script>
