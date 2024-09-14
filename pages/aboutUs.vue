<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-[#5747a6] px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-4xl space-y-8">
      <transition
        appear
        name="fade-in"
      >
        <div class="text-center">
          <h1 class="animate-slide-down mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-5xl font-extrabold text-transparent">
            Quiénes Somos
          </h1>
          <p class="animate-slide-up mt-4 text-xl leading-relaxed text-gray-300">
            Somos un equipo apasionado y dedicado, comprometido con la innovación y la excelencia en el mundo digital. Nuestra misión es transformar ideas en soluciones tecnológicas que impulsen el éxito de nuestros clientes.
          </p>
        </div>
      </transition>
      <transition
        appear
        name="fade-in"
      >
        <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div class="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition duration-500">
            <div class="mb-4 flex items-center">
              <div class="mr-4 animate-pulse text-white">
                <Icon
                  icon="mdi:target"
                  width="48"
                  height="48"
                />
              </div>
              <h2 class="text-3xl font-bold text-white">
                Nuestra Misión
              </h2>
            </div>
            <p class="text-gray-300">
              Nuestra misión es transformar el proceso educativo mediante la integración de inteligencia artificial, proporcionando soluciones personalizadas que se adapten a las necesidades individuales de cada estudiante. Buscamos aliviar la carga de trabajo de los docentes y mejorar el rendimiento académico al ofrecer una experiencia de aprendizaje más efectiva, ajustada a cada necesidad y con disponibilidad 24 horas.
            </p>
          </div>
          <div class="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition duration-500">
            <div class="mb-4 flex items-center">
              <div class="animate-spin-slow mr-4 text-white">
                <Icon
                  icon="mdi:eye"
                  width="48"
                  height="48"
                />
              </div>
              <h2 class="text-3xl font-bold text-white">
                Nuestra Visión
              </h2>
            </div>
            <p class="text-gray-300">
              Aspiramos a ser una referencia en el ámbito educativo, facilitando el aprendizaje adaptado y el apoyo docente mediante tecnología innovadora. Queremos crear un entorno educativo donde cada estudiante pueda alcanzar su máximo potencial y cada docente cuente con herramientas eficientes para enriquecer su labor educativa.
            </p>
          </div>
        </div>
      </transition>
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
import { Icon } from '@iconify/vue';

</script>

<style scoped>
@keyframes slideDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-slide-down {
  animation: slideDown 0.5s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-spin-slow {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.5s ease-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in-list-enter-active,
.fade-in-list-leave-active {
  transition: all 0.5s ease-out;
}

.fade-in-list-enter-from,
.fade-in-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-list-move {
  transition: transform 0.5s ease-out;
}
</style>