<template>
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
                href="/about"
                class="transition-colors duration-200 hover:text-gray-300"
              >Sobre nosotros</a>
            </li>
            <li class="flex items-center">
              <Icon
                icon="mdi:tools"
                class="mr-2 text-xl"
              />
              <a
                href="/services"
                class="transition-colors duration-200 hover:text-gray-300"
              >Servicios</a>
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
            <li class="flex items-center">
              <Icon
                icon="mdi:shield-check"
                class="mr-2 text-xl"
              />
              <a
                href="/privacy-policy"
                class="transition-colors duration-200 hover:text-gray-300"
              >Política de privacidad</a>
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

<script>
export default {
  props: {
  },
};
  </script>