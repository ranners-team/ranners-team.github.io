<template>
  <div class="min-h-screen flex flex-col gap-10 bg-[#5747a6] px-4 py-10 sm:px-8 md:px-16 lg:px-24">
    <!-- Sección de "¿Qué es Ranner?" -->
    <div class="rounded-xl bg-white p-6 text-gray-800 md:p-10">
      <div class="mx-auto flex flex-col items-center justify-evenly md:flex-row md:items-start">
        <div class="mb-6 md:mb-0 md:w-1/2 md:pr-6">
          <h2 class="mb-6 text-2xl font-bold md:text-3xl">
            ¿Qué es Ranner?
          </h2>
          <p class="text-base leading-relaxed md:text-lg">
            Es la solución educativa personalizada impulsada por inteligencia artificial, transformando la forma en que
            aprendemos.
            <br><br>
            Con la IA, adaptamos el contenido de aprendizaje a las necesidades únicas de cada estudiante, reduciendo la
            carga de trabajo de los docentes y mejorando significativamente el rendimiento académico.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/sFdfRgvZk1o" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen class="size-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Instagram -->
    <div class="rounded-xl p-6 text-gray-800 md:p-10">
      <div class="mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
        <div class="w-full md:w-1/2">
          <blockquote class="instagram-media" data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/C_1cwTeOKO2/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14">
            <div style="padding:16px;">
              <a href="https://www.instagram.com/p/C_1cwTeOKO2/?utm_source=ig_embed&amp;utm_campaign=loading"
                target="_blank">
                Ver esta publicación en Instagram
              </a>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
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