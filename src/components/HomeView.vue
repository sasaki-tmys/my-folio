<template>
  <v-main>
    <!-- サイトの説明 -->
    <AboutSection ref="AboutSection"></AboutSection>

    <!-- プロジェクト一覧 -->
    <ProjectSection ref="ProjectSection" :projects="projects" :languages="languages"></ProjectSection>

  <!-- スキル一覧 -->

    <!-- 経歴紹介 -->
    <CarrerSection ref="CarrerSection"></CarrerSection>

    <!-- 問い合わせフォーム -->
    <ContactSection ref="ContactSection"></ContactSection>
  </v-main>
</template>

<script>
import ContactSection from '../sections/ContactSection.vue'
import ProjectSection from '../sections/ProjectSection.vue';
import AboutSection from '../sections/AboutSection.vue';
import CarrerSection from '../sections/CarrerSection.vue';
import { watch } from 'vue';
import { useScrollStore } from '../store/index';

export default {
  name: 'HomeView',
  components: {
      ContactSection,
      ProjectSection,
      AboutSection,
      CarrerSection,
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
    languages: ['JavaScript', 'Python', 'Unity',],
    }),
  return: {
      name: '',
      email: '',
      message: '',
    },
  methods: {
    
  },
  mounted() {
    const scrollStore = useScrollStore();

    watch(
      () => scrollStore.sectionToScroll,
      (newSection) => {
        if (newSection) {
          const targetSection = this.$refs[newSection];
          if (targetSection) {
            window.scrollTo({
              top: targetSection.$el.offsetTop - 50,
              behavior: 'smooth',
            });
          }
          // 任意でセクションをリセットする
          scrollStore.setSectionToScroll('');
        }
      }
    );
  },
};
</script>
