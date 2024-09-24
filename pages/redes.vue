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