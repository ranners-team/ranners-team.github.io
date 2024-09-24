<template>
  <div class="linkedin-preview">
    <div
      v-for="post in recentPosts"
      :key="post.id"
      class="mb-4 rounded-lg bg-gray-100 p-4"
    >
      <div class="mb-2 flex items-center">
        <img
          :src="post.authorImage"
          alt="Author"
          class="mr-3 size-10 rounded-full"
        >
        <div>
          <h3 class="font-semibold text-gray-800">
            {{ post.authorName }}
          </h3>
          <p class="text-sm text-gray-600">
            {{ post.date }}
          </p>
        </div>
      </div>
      <p class="mb-2 text-gray-800">
        {{ post.content }}
      </p>
      <div class="flex items-center text-sm text-gray-600">
        <span class="mr-4"><Icon
          icon="mdi:thumb-up"
          class="mr-1 inline"
        /> {{ post.likes }}</span>
        <span><Icon
          icon="mdi:comment"
          class="mr-1 inline"
        /> {{ post.comments }}</span>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
  
// Mock data for recent LinkedIn posts
const recentPosts = ref([
  {
    id: 1,
    authorName: 'Ranners',
    authorImage: 'ranners1500.png',
    content: 'Ranner es un proyecto de @feriasoftware que trae una solución educativa personalizada impulsada por inteligencia artificial, transformando la forma en que aprendemos. 📚✨ Con la IA, adaptamos el contenido de aprendizaje a las necesidades únicas de cada estudiante, reduciendo la carga de trabajo de los docentes y mejorando significativamente el rendimiento académico. ',

  },

]);
  </script>
  
  <style scoped>
  .linkedin-preview {
    max-height: 400px;
    overflow-y: auto;
  }
  </style>