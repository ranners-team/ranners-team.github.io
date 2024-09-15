<template>
  <div class="flex flex-col gap-10 bg-[#5747a6] px-4 py-10 sm:px-8 md:px-16 lg:px-24">
    <!-- Sección de "¿Qué es Ranner?" -->
    <div class="rounded-xl bg-white p-6 text-gray-800 md:p-10">
      <div class="mx-auto flex flex-col items-center justify-evenly md:flex-row md:items-start">
        <div class="mb-6 md:mb-0 md:w-1/2 md:pr-6">
          <h2 class="mb-6 text-2xl font-bold md:text-3xl">
            ¿Qué es Ranner?
          </h2>
          <p class="text-base leading-relaxed md:text-lg">
            Es la solución educativa personalizada impulsada por inteligencia artificial, transformando la forma en que aprendemos.
            <br><br>
            Con la IA, adaptamos el contenido de aprendizaje a las necesidades únicas de cada estudiante, reduciendo la carga de trabajo de los docentes y mejorando significativamente el rendimiento académico.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/sFdfRgvZk1o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="size-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Sección de Instagram -->
    <div class="rounded-xl p-6 text-gray-800 md:p-10">
      <div class="mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
        <div class="w-full md:w-1/2">
          <blockquote 
            class="instagram-media" 
            data-instgrm-captioned 
            data-instgrm-permalink="https://www.instagram.com/p/C_1cwTeOKO2/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          >
            <div style="padding:16px;">
              <a
                href="https://www.instagram.com/p/C_1cwTeOKO2/?utm_source=ig_embed&amp;utm_campaign=loading"
                target="_blank"
              >
                Ver esta publicación en Instagram
              </a>
            </div>
          </blockquote>
        </div>
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
                  name="akar-icons:instagram-fill"
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
                    name="akar-icons:linkedin-fill"
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
                  name="fluent:mail-20-filled"
                  class="mr-2 text-xl"
                />
                <a
                  href="mailto:ranners.team.ai@gmail.com"
                  class="transition-colors duration-200 hover:text-gray-300"
                >ranners.team.ai@gmail.com</a>
              </li>
              <li class="flex items-center">
                <Icon
                  name="fluent:call-20-filled"
                  class="mr-2 text-xl"
                />
                <a
                  href="tel:+56223037000"
                  class="transition-colors duration-200 hover:text-gray-300"
                >(2) 2303 7000</a>
              </li>
              <li class="flex items-center">
                <Icon
                  name="ic:round-location-on"
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
                  name="akar-icons:info-fill"
                  class="mr-2 text-xl"
                />
                <a
                  href="/aboutus"
                  class="transition-colors duration-200 hover:text-gray-300"
                >Sobre nosotros</a>
              </li>
              <li class="flex items-center">
                <Icon
                  name="mdi:contact-mail-outline"
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

</script>

  <script>

export default {
  data() {
    return {
      rannerlogo: 'path_to_your_logo_image.png',
    };
  },
  mounted() {
    // Cargar el script de Instagram
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  },
};
  </script>
  
  <style scoped>
  .aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%; /* Aspect Ratio 16:9 */
  }
  
  .aspect-w-16 > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>