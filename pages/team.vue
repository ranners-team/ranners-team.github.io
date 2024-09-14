<template>
  <div class="min-h-screen bg-[#5747a6] px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h1 class="animate-fade-in-down mb-16 bg-white bg-clip-text text-center text-5xl font-extrabold text-transparent">
        Conoce a nuestro equipo
      </h1>
        
      <transition-group 
        name="team-list" 
        tag="ul" 
        class="grid grid-cols-1 gap-6 px-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li
          v-for="(member, index) in teamMembers"
          :key="member.name"
          class="animate-fade-in flex justify-center"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="h-auto w-80 overflow-hidden rounded-lg bg-white bg-opacity-10 shadow-lg hover:shadow-2xl">
            <img
              :src="member.src"
              :alt="member.name"
              class="h-48 w-full object-cover object-center"
            >
            <div class="p-4">
              <h2 class="mb-2 flex items-center text-lg font-semibold text-white">
                {{ member.name }}
                <a 
                  :href="member.linkedin"
                  class="ml-2 text-gray-100 hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon 
                    icon="mdi:linkedin" 
                    class="text-lg"
                  />
                </a>
              </h2>
              <p class="mb-2 text-sm text-gray-100">
                {{ member.job }}
              </p>
              <p class="mb-4 text-xs text-gray-300">
                {{ member.description }}
              </p>
        
              <!-- Enlace de Correo con Icono -->
              <a 
                :href="`mailto:${member.email}`"
                class="flex items-center space-x-2 text-xs text-gray-400 hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon 
                  icon="mdi:email-outline" 
                  class="mr-2 text-lg text-gray-100"
                />
                <span class="text-gray-100">{{ member.email }}</span>
              </a>
            </div>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
  <!-- Footer -->
  <footer class="bg-[#262433] py-8 text-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <div class="mb-6 w-full md:mb-0 md:w-1/4">
          <a
            href="/"
            class="mb-4 inline-flex items-center"
          >
            <img
              src="/public/ranner_logo.svg"
              alt="Ranner Logo"
              class="mr-3 size-10"
            >
            <span class="text-2xl font-bold">Ranner</span>
          </a>
          <p class="text-sm">
            Tu espacio de aprendizaje interactivo
          </p>
        </div>
        
   
        <div class="mb-6 w-full md:mb-0 md:w-1/4">
          <h3 class="mb-4 text-lg font-semibold">
            Nuestras redes
          </h3>
          <div class="space-y-2">
            <a
              href="https://www.instagram.com/ranner.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center transition-colors duration-200 hover:text-gray-300"
              aria-label="Síguenos en Instagram"
            >
              <Icon
                icon="akar-icons:instagram-fill"
                class="mr-2 text-2xl"
              />
              <span>Instagram</span>
            </a>
            <div>
              <a
                href="https://www.linkedin.com/company/ranners/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center transition-colors duration-200 hover:text-gray-300"
                aria-label="Síguenos en LinkedIn"
              >
                <Icon
                  icon="akar-icons:linkedin-fill"
                  class="mr-2 text-2xl"
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
    
        <div class="mb-6 w-full md:mb-0 md:w-1/4">
          <h3 class="mb-4 text-lg font-semibold">
            Contacto
          </h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <Icon
                icon="fluent:mail-20-filled"
                class="mr-2 text-xl"
              />
              <a
                href="mailto:ranners.team.ai@gmail.com"
                class="transition-colors duration-200 hover:text-gray-300"
              >ranners.team.ai@gmail.com</a>
            </li>
            <li class="flex items-center">
              <Icon
                icon="fluent:call-20-filled"
                class="mr-2 text-xl"
              />
              <a
                href="tel:+56223037000"
                class="transition-colors duration-200 hover:text-gray-300"
              >(2) 2303 7000</a>
            </li>
            <li class="flex items-center">
              <Icon
                icon="ic:round-location-on"
                class="mr-2 text-xl"
              />
              <p>Av. Vicuña Mackenna 3939</p>
            </li>
          </ul>
        </div>
        
  
        <div class="mb-6 w-full md:mb-0 md:w-1/4">
          <h3 class="mb-4 text-lg font-semibold">
            Enlaces útiles
          </h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <Icon
                icon="akar-icons:info-fill"
                class="mr-2 text-xl"
              />
              <a
                href="/aboutus"
                class="transition-colors duration-200 hover:text-gray-300"
              >Sobre nosotros</a>
            </li>
              
            <li class="flex items-center">
              <Icon
                icon="mdi:contact-mail-outline"
                class="mr-2 text-xl"
              />
              <a
                href="/contact"
                class="transition-colors duration-200 hover:text-gray-300"
              >Contacto</a>
            </li>
          </ul>
        </div>
      </div>
        
  
      <div class="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; {{ currentYear }} Ranner. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const teamMembers = ref([
  { 
    name: 'Matías Contreras', 
    job: 'DevOps', 
    src: '/_nuxt/public/mati.jpg', 
    email: 'matias.acontrerasa@gmail.com', 
    linkedin: 'https://www.linkedin.com/in/matiascontrerasaid/', 
  },
  { 
    name: 'Alejandro Astudillo', 
    job: 'IA', 
    src: '/_nuxt/public/jano.jpg', 
    email: 'alejandro.astudilloh@sansano.usm.cl', 
    linkedin: 'https://www.linkedin.com/in/alejandro-astudillo-584a071b5/', 
  },
  { 
    name: 'Juan Francisco Baquedano', 
    job: 'Front-End', 
    src: '/_nuxt/public/juanfra.jpg', 
    email: 'juan.baquedano@usm.cl', 
    linkedin: 'https://www.linkedin.com/in/juanfra-baquedano/', 
  },
  { 
    name: 'Vicente Lineros', 
    job: 'Full Stack Dev', 
    src: '/_nuxt/public/vicho.jfif', 
    email: 'vlinerospardo@gmail.com', 
    linkedin: 'https://www.linkedin.com/in/vicholp/', 
  },
  { 
    name: 'David Álvarez', 
    job: 'IA', 
    src: '/_nuxt/public/kai.jpg', 
    email: 'david.alvarez@example.com', 
    linkedin: 'https://www.linkedin.com/in/dialvarezr/', 
  },
  { 
    name: 'Vicente Figueroa', 
    job: 'Front-End', 
    src: '/_nuxt/public/figura.jfif', 
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
