<template>
  <div class="flex min-h-screen flex-col bg-[#5747A6]">
    <main class="grow px-4 py-16 sm:px-8 md:px-16 lg:px-24">
      <div class="flex flex-col gap-16">
        <!-- Sección de "¿Qué es Ranner?" -->
        <section
          id="about"
          class="rounded-2xl bg-white/10 p-8 text-white shadow-xl backdrop-blur-md"
        >
          <div class="mx-auto flex flex-col items-center justify-between gap-12 md:flex-row">
            <div class="md:w-1/2">
              <h2 class="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                Descubre Ranner: <br>
                <span class="text-[#8DD33E]">El Futuro del Aprendizaje</span>
              </h2>
              <p class="text-lg leading-relaxed opacity-90">
                Ranner es la solución educativa vanguardista impulsada por inteligencia artificial, 
                que está revolucionando la forma en que aprendemos. Nuestra plataforma adapta 
                el contenido de aprendizaje a las necesidades únicas de cada estudiante, 
                reduciendo significativamente la carga de trabajo de los docentes y 
                mejorando el rendimiento académico de manera exponencial.
              </p>
              <a
                href="https://staging.ranner.cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button 
                  class="mt-8 animate-pulse rounded-full bg-green-600 px-8 py-3 font-semibold text-gray-100 transition-all hover:bg-green-700"
                  :class="{ 'animate-bounce': isHovered }"
                  @mouseenter="isHovered = true"
                  @mouseleave="isHovered = false"
                >
                  Ir a RANNER
                </button>
              </a>
            </div>
            <div class="w-full md:w-1/2">
              <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/dg91_yr44jU"
                  title="Descubre Ranner"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="size-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        <!-- Sección de Características -->
      </div>
    </main>
  </div>
</template>

<script setup>

import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const isHovered = ref(false);
const currentYear = new Date().getFullYear();
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