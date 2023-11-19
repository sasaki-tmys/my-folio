<template>
  <SmokeAnimation/>
    <v-container>
      <v-row>
        <!-- Introduction Section -->
        <v-col cols="12" md="4">
          <section id="introduction">
            <h2>Introduction</h2>
            <p>...ここに紹介文...</p>
          </section>
        </v-col>
  
        <!-- Project Showcase Section -->
        <v-col cols="12" md="4">
          <section id="project-showcase">
            <h2>Project Showcase</h2>
            <!-- プロジェクトのカードリスト -->
            <v-row>
              <v-col cols="12" sm="4" v-for="project in projects" :key="project.id">
                <v-card>
                  <v-card-title>{{ project.title }}</v-card-title>
                  <v-card-text>{{ project.description }}</v-card-text>
                  <!-- その他のプロジェクト情報 -->
                </v-card>
              </v-col>
            </v-row>
          </section>
        </v-col>
  
        <!-- Skills and Expertise Section -->
        <v-col cols="12" md="4">
          <section id="skills">
            <h2>Skills and Expertise</h2>
            <!-- スキルセットのリスト -->
            <v-list>
              <v-list-item v-for="skill in skills" :key="skill.name">
                <v-list-item-content>
                  <v-list-item-title>{{ skill.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import SmokeAnimation from '@/components/home/parts/HomeSmoke.vue';
  import { ref } from 'vue'
  
  // ダミーデータ
  const projects = ref([
    { id: 1, title: 'Project 1', description: 'Description 1' },
    { id: 2, title: 'Project 2', description: 'Description 2' },
    // ...その他のプロジェクト
  ])
  
  const skills = ref([
    { name: 'Skill 1' },
    { name: 'Skill 2' },
    // ...その他のスキル
  ])
  </script>
  