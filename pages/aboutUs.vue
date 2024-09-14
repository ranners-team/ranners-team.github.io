<template>
  <div class="flex min-h-screen items-center justify-center bg-[#5747a6] px-4 py-12 sm:px-6 lg:px-8">
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
      
      <transition-group 
        appear
        name="fade-in-list" 
        tag="div" 
        class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition duration-500 hover:scale-105"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <div class="mb-4 animate-bounce text-3xl text-white">
            <Icon
              :icon="feature.icon"
              width="48"
              height="48"
            />
          </div>
          <h3 class="mb-2 text-xl font-semibold text-white">
            {{ feature.title }}
          </h3>
          <p class="text-gray-300">
            {{ feature.description }}
          </p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


const features = ref([
  {
    icon: 'mdi:lightbulb',
    title: 'Innovación',
    description: 'Constantemente buscamos nuevas formas de resolver problemas y crear soluciones únicas.',
  },
  {
    icon: 'mdi:account-group',
    title: 'Colaboración',
    description: 'Trabajamos en estrecha colaboración con nuestros clientes para garantizar resultados excepcionales.',
  },
  {
    icon: 'mdi:rocket-launch',
    title: 'Excelencia',
    description: 'Nos esforzamos por la excelencia en cada proyecto, superando las expectativas.',
  },
]);
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