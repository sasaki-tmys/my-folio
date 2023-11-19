<template>
  <Header></Header>
  <v-main class="pt-0">
    <!-- サイトの説明 -->
    <section ref="aboutRef">
      <AboutSection name="AboutSection"></AboutSection>
    </section>
    
    <!-- プロジェクト一覧 -->
    <section ref="projectRef" class="padding">
      <ProjectSection name="ProjectSection"></ProjectSection>
    </section>

    <!-- スキル一覧 -->
    <section ref="skillRef" class="padding">
      <SkillSection name="SkillSection"></SkillSection>
    </section>

    <!-- ブログリスト -->
    <section ref="blogRef" class="padding">
      <BlogSection name="BlogSection"></BlogSection>
    </section>

    <!-- ギャラリー -->
    <section ref="galleryRef" class="padding">
      <GallerySection name="GallerySection"></GallerySection>
    </section>

    <!-- 経歴紹介 -->
    <section ref="carrerRef" class="padding">
      <CarrerSection name="CarrerSection"></CarrerSection>
    </section>

    <!-- 問い合わせフォーム -->
    <section ref="contactRef" class="padding">
      <ContactSection name="ContactSection" ></ContactSection>
    </section>
  </v-main>
</template>

<script setup>
import Header from '@/components/home/parts/HomeHeader.vue';
import AboutSection from '@/components/home/section/AboutSection.vue';
import ProjectSection from '@/components/home/section/ProjectSection.vue';
import SkillSection from '@/components/home/section/SkillSection.vue'
import BlogSection from '@/components/home/section/BlogSection.vue';
import GallerySection from '@/components/home/section/GallerySection.vue';
import CarrerSection from '@/components/home/section/CarrerSection.vue';
import ContactSection from '@/components/home/section/ContactSection.vue';

import { ref, watch,  } from 'vue';
import { useScrollStore } from '@/store'

const store = useScrollStore()

const aboutRef = ref(null);
const projectRef = ref(null);
const skillRef = ref(null);
const galleryRef = ref(null);
const carrerRef = ref(null);
const contactRef = ref(null);

watch(() => store.sectionToScroll, (newSection) => {
  if (newSection) {
    let targetElement;
    switch (newSection) {
      case 'About':
        targetElement = aboutRef.value;
        break;
      case 'Project':
        targetElement = projectRef.value;
        break;
      case 'Skill':
        targetElement = skillRef.value;
        break;
      case 'Gallery':
        targetElement = galleryRef.value;
        break;
      case 'Carrer':
        targetElement = carrerRef.value;
        break;
      case 'Contact':
        targetElement = contactRef.value;
        break;
    }

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }

    // セクションをリセットする
    store.setSectionToScroll('');
  }
});
</script>

<style scoped>
.background-image1 {
  background-image: url('@/assets/img/Backgrand/backgrand1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;

}
.background-image2 {
  background-image: url('@/assets/img/Backgrand/backgrand2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.background-image3 {
  background-image: url('@/assets/img/Backgrand/backgrand3.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.background-image4 {
  background-image: url('@/assets/img/Backgrand/backgrand4.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.fixed-bg {
  height: 300px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.sec-title {
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 4.5rem;
  filter: drop-shadow(1px 1px 10px #c0c0c0);
  position: absolute;
  top: 30%;
}
#bg-video {
  width: 100%;
  max-height: 960px;
  object-fit: cover;
}
.padding {
  padding-top: 100pt;
  padding-bottom: 100pt;
}
</style>