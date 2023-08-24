<template>
  <v-main>
    <!-- サイトの説明 -->
    <v-container class="text-center" id="aboutThisSite">
      <v-row >
        <v-col cols="12">
          <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            このサイトについて
          </h1>
          <p class="subheading font-weight-regular">
            勉強の内容や成果物を公開するサイトです。<br />あと、経歴やスキルなども公開しています。
          </p>
        </v-col>
      </v-row>
    </v-container>

  <!-- プロジェクト一覧 -->
  <v-container id="projectContainer">
    <h1 class="mb-4">成果物一覧</h1>
    <div  v-for="language in languages" :key="language">
      <h3>{{ language }}</h3>
    <v-row scroll-x class="ma-auto">
      <v-col v-for="project in filterProjectsByLanguage(language)" :key="project.id" class="ma-auto">
        <v-card class="ma-auto" max-width="344" variant="outlined">
          <v-img 
          src="../assets/sample01.png"
          height="200px" cover></v-img>
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-subtitle>{{ project.defineComponent }}</v-card-subtitle>
          <v-card-actions>
            <v-btn variant="outlined">
              詳細
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
  </v-container>

  <!-- スキル一覧 -->

  <!-- 経歴紹介 -->
  <v-container id="carrerContainer">
    <h1 class="mb-4">経歴紹介</h1>
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

  <!-- 問い合わせフォーム -->
  <v-container id="contactContainer">
    <Contact></Contact>
  </v-container>
  </v-main>
</template>

<script>
import Contact from './ContactForm.vue'

export default {
  name: 'HomeView',
  components: {
      Contact,
    },
  data: () => ({
    projects: [{
      id: '01',
      language: 'JavaScript',
      title: '〇〇アプリ',
      subtitle: '〇〇を行うwebアプリです。',
      image: '../assets/sample01.png'
    },
    {
      id: '02',
      language: 'JavaScript',
      title: '〇〇アプリ',
      subtitle: '〇〇を行うwebアプリです。',
      image: '../assets/sample01.png'
    },
    {
      id: '03',
      language: 'JavaScript',
      title: '〇〇アプリ',
      subtitle: '〇〇を行うwebアプリです。',
      image: '../assets/sample01.png'
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
      image: '../assets/sample01.png'
    },
    {
      id: '06',
      language: 'Python',
      title: '〇〇アプリ',
      subtitle: '〇〇を行うwebアプリです。',
      image: '../assets/sample01.png'
    }
    ],
    careers: [{
      id: '01',
      date: '2021/03',
      title: '専門学校卒業',
      subtitle: 'いざ札幌へ',
      description: '日本工学院専門学校の情報処理科システム開発コースを卒業し同時期に新聞奨学生も卒業',
    },
      {
      id: '02',
      date: '2021/04',
      title: '第三者検証の会社に就職',
      subtitle: '就職を機に札幌へ北上',
      description: '日本ナレッジ株式会社札幌支社に就職。基幹業務システムの仕様追加等の業務に従事',
    },
  {
    id: '03',
    date: '2022/09',
    title: '転職',
    subtitle: '他の会社へ転職',
    description: '多くの案件を経験するために株式会社エスプランニングへ転職',
  }],
    languages: ['JavaScript', 'Python', 'Unity',],
  }),
  return: {
      name: '',
      email: '',
      message: '',
    },
  methods: {
    filterProjectsByLanguage(language) {
      return this.projects.filter((project) => project.language === language);
    },
  },
};
</script>
