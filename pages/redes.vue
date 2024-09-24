<template>
  <div class="min-h-screen bg-[#5747a6] text-white">
    <main class="container mx-auto px-4 py-12">
      <h1 class="mb-12 text-center text-4xl font-bold">
        Nuestras Redes
      </h1>
    
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Instagram Section -->
        <div class="overflow-hidden rounded-lg bg-white shadow-lg">
          <div class="ml-14 p-6">
            <h2 class="mb-4 flex items-center text-2xl font-bold text-gray-800">
              <Icon
                icon="akar-icons:instagram-fill"
                class="mr-2 text-pink-500"
              />
              Instagram
            </h2>
            <InstagramEmbed 
              class=""
            />
          </div>
        </div>
    
        <!-- LinkedIn Section -->
        <div class="overflow-hidden rounded-lg bg-white shadow-lg">
          <div class="p-6">
            <h2 class="mb-4 flex items-center text-2xl font-bold text-gray-800">
              <Icon
                icon="akar-icons:linkedin-fill"
                class="mr-2 text-blue-700"
              />
              LinkedIn
            </h2>
            <LinkedInPreview />
            <a 
              href="https://www.linkedin.com/company/ranners/about/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              class="mt-4 block rounded bg-[#3D1E6D] px-4 py-2 text-center text-white transition-colors hover:bg-purple-900"
            >
              Visitar nuestro perfil de LinkedIn
            </a>
          </div>
        </div>
    
        <!-- Website Section -->
        <div class="overflow-hidden rounded-lg bg-white shadow-lg">
          <div class="p-6">
            <h2 class="mb-4 flex items-center text-2xl font-bold text-gray-800">
              <Icon
                icon="mdi:web"
                class="mr-2 text-green-500"
              />
              Sitio Web
            </h2>
            <div class="mb-4 overflow-hidden rounded-lg">
              <img
                src="/public/ranner_header.png"
                alt="Ranner - Tu espacio de aprendizaje interactivo"
                class="w-full"
              >
            </div>
            
            <p class="mt-4 text-gray-600">
              Explora nuestro sitio web oficial para obtener más información sobre 
              nuestros servicios, misión y cómo Ranner está transformando la educación.
            </p>
            <a 
              href="https://staging.ranner.cl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="mt-8 block rounded bg-[#3D1E6D] px-4 py-2 text-center text-white transition-colors hover:bg-purple-900"
            >
              Visitar nuestro sitio web
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
    
  <script setup>
import { Icon } from '@iconify/vue';
import InstagramEmbed from './InstagramEmbed.vue';
import LinkedInPreview from './LinkedInPreview.vue';
  </script>
    
  <style scoped>
  /* Add any additional styles here if needed */
  </style>