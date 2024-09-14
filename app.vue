<template>
  <div class="flex min-h-screen flex-col">
    <!-- Navbar -->
    <nav class="bg-[#5747a6] p-4 shadow-lg">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <a
            href="/"
            class="group flex items-center space-x-3"
          >
            <img
              src="/assets/ranner_logo.svg"
              alt="Ranner Logo"
              class="size-10 transition-transform duration-300 group-hover:rotate-12"
            >
            <span class="text-2xl font-bold text-white">Ranner</span>
          </a>
          <div class="flex justify-between gap-8 text-white">
            <NavbarLink href="/">
              Inicio
            </NavbarLink>
            <NavbarLink href="/contact">
              Contact
            </NavbarLink>
            <NavbarLink href="/aboutus">
              About us
            </NavbarLink>
            <NavbarLink href="/team">
              Team
            </NavbarLink>
          </div>
        </div>
      </div>
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="mt-4 space-y-2 md:hidden"
        >
          <NavLink
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block cursor-pointer text-white transition-colors duration-200 hover:text-gray-300"
            @click="toggleMobileMenu"
          >
            {{ link.text }}
          </NavLink>
        </div>
      </transition>
    </nav>
    
    <!-- Contenido Página-->
    <main class="grow overflow-x-hidden">
      <NuxtPage />
    </main>
    <!-- Footer -->
    <footer class="bg-[#262433] py-8 text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <!-- Logo and Tagline -->
          <div class="mb-6 w-full md:mb-0 md:w-1/4">
            <a
              href="/"
              class="mb-4 inline-flex items-center"
            >
              <img
                src="/assets/ranner_logo.svg"
                alt="Ranner Logo"
                class="mr-3 size-10"
              >
              <span class="text-2xl font-bold">Ranner</span>
            </a>
            <p class="text-sm">
              Tu espacio de aprendizaje interactivo
            </p>
          </div>
        
          <!-- Social Links -->
          <div class="mb-6 w-full md:mb-0 md:w-1/4">
            <h3 class="mb-4 text-lg font-semibold">
              Nuestras redes
            </h3>
            <div class="space-y-2">
              <a
                href="https://www.instagram.com"
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
                  href="https://www.linkedin.com"
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
        
          <!-- Contact Information -->
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
                  href="mailto:info@ranner.com"
                  class="transition-colors duration-200 hover:text-gray-300"
                >ranners.team.ai@gmail.com</a>
              </li>
              <li class="flex items-center">
                <Icon
                  icon="fluent:call-20-filled"
                  class="mr-2 text-xl"
                />
                <a
                  href="tel:+1234567890"
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
        
          <!-- Useful Links -->
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
        
        <!-- Copyright -->
        <div class="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {{ currentYear }} Ranner. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
  
  <script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
  
const navLinks = [
  { text: 'Inicio', href: '/' },
  { text: 'Contact', href: '/contact' },
  { text: 'About Us', href: '/aboutus' },
  { text: 'Team', href: '/team' },
];
  
const currentYear = computed(() => new Date().getFullYear());
  </script>
  
  <script>
export default {
  name: 'Footer',
};
  </script>
  