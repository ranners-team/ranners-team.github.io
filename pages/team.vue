<template>
  <div class="bg-[#5747a6] min-h-screen px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h1 class="animate-fade-in-down mb-16 bg-white bg-clip-text text-center text-5xl font-extrabold text-transparent">
        Conoce a nuestro equipo
      </h1>

      <transition-group name="team-list" tag="ul" class="grid grid-cols-1 gap-6 px-12 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(member, index) in teamMembers" :key="member.name" class="animate-fade-in flex justify-center"
          :style="{ animationDelay: `${index * 150}ms` }">
          <div class="h-auto w-80 overflow-hidden rounded-lg bg-white bg-opacity-10 shadow-lg hover:shadow-2xl">
            <img :src="member.src" :alt="member.name" class="h-48 w-full object-cover object-center">
            <div class="p-4">
              <h2 class="mb-2 flex items-center text-lg font-semibold text-white">
                {{ member.name }}
                <a :href="member.linkedin" class="ml-2 text-gray-100 hover:text-gray-200" target="_blank"
                  rel="noopener noreferrer">
                  <Icon name="mdi:linkedin" class="text-lg" />
                </a>
              </h2>
              <p class="mb-2 text-sm text-gray-100">
                {{ member.job }}
              </p>
              <p class="mb-4 text-xs text-gray-300">
                {{ member.description }}
              </p>

              <!-- Enlace de Correo con Icono -->
              <a :href="`mailto:${member.email}`"
                class="flex items-center space-x-2 text-xs text-gray-400 hover:text-gray-200" target="_blank"
                rel="noopener noreferrer">
                <Icon name="mdi:email-outline" class="mr-2 text-lg text-gray-100" />
                <span class="text-gray-100">{{ member.email }}</span>
              </a>
            </div>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const teamMembers = ref([
  {
    name: 'Matías Contreras Aid',
    job: 'Full Stack Dev',
    src: '/mati.jpg',
    email: 'matias.acontrerasa@gmail.com',
    linkedin: 'https://www.linkedin.com/in/matiascontrerasaid/',
  },
  {
    name: 'Alejandro Astudillo Hidalgo',
    job: 'AI Engineer',
    src: '/jano.jpg',
    email: 'alejandro.astudilloh@sansano.usm.cl',
    linkedin: 'https://www.linkedin.com/in/alejandro-astudillo-584a071b5/',
  },
  {
    name: 'Juan Francisco Baquedano Belmar',
    job: 'Frontend',
    src: '/juan.jfif',
    email: 'juan.baquedano@usm.cl',
    linkedin: 'https://www.linkedin.com/in/juanfra-baquedano/',
  },
  {
    name: 'Vicente Lineros Pardo',
    job: 'Full Stack Dev',
    src: '/vicho.jfif',
    email: 'vlinerospardo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vicholp/',
  },
  {
    name: 'David Álvarez Rojas',
    job: 'AI Engineer',
    src: '/kai.jpg',
    email: 'david.alvarez@usm.cl',
    linkedin: 'https://www.linkedin.com/in/dialvarezr/',
  },
  {
    name: 'Vicente Figueroa Rojas',
    job: 'Frontend',
    src: '/figura.jfif',
    email: 'vicentefigueroarojas@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vicente-figueroa-rojas/',
  },
]);
</script>

<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

.team-list-enter-active,
.team-list-leave-active {
  transition: all 0.5s ease;
}
.team-list-enter-from,
.team-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
