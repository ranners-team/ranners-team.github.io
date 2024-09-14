<template>
  <div class="min-h-screen bg-[#5747a6] px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <transition
        appear
        name="fade-in"
      >
        <div class="mb-12 text-center">
          <h1 class="animate-slide-down mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-5xl font-extrabold text-transparent">
            ¡Contáctanos!
          </h1>
          <p class="animate-slide-up mt-4 text-xl leading-relaxed text-white">
            Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta, sugerencia o colaboración. Tu opinión es importante para nosotros.
          </p>
        </div>
      </transition>
    
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <transition
          appear
          name="fade-slide-right"
        >
          <div class="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition-transform duration-300 ">
            <h2 class="mb-4 text-2xl font-semibold text-white">
              Envíanos un mensaje
            </h2>
            <form
              class="space-y-4"
              @submit.prevent="submitForm"
            >
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-white"
                >Nombre</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-gray-600 bg-gray-100 p-1 text-gray-800 transition-all duration-300 hover:bg-gray-200 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50"
                >
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-white"
                >Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="mt-1 block w-full rounded-md border-gray-600 bg-gray-100 p-1 text-gray-800 transition-all duration-300 hover:bg-gray-200 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50"
                >
              </div>
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-white"
                >Mensaje</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="mt-1 block w-full rounded-md border-gray-600 bg-gray-100 p-1 text-gray-800 transition-all duration-300 hover:bg-gray-200 focus:border-white focus:ring focus:ring-white focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                class="w-full animate-pulse rounded bg-teal-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-white hover:text-teal-500"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </transition>
    
        <transition
          appear
          name="fade-slide-left"
        >
          <div class="rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition-transform duration-300">
            <h2 class="mb-4 text-2xl font-semibold text-white">
              Encuéntranos
            </h2>
            <div class="space-y-4 text-white">
              <div
                class="animate-fade-in flex items-center"
                style="animation-delay: 200ms;"
              >
                <Icon
                  icon="mdi:map-marker"
                  class="mr-2 text-white transition-transform duration-300 hover:scale-110"
                  width="24"
                  height="24"
                />
                <span>Av. Vicuña Mackenna 3939, 8940897 San Joaquín, Región Metropolitana</span>
              </div>
              <div
                class="animate-fade-in flex items-center"
                style="animation-delay: 400ms;"
              >
                <Icon
                  icon="mdi:phone"
                  class="mr-2 text-white transition-transform duration-300 hover:scale-110"
                  width="24"
                  height="24"
                />
                <span>+1 234 567 890</span>
              </div>
              <div
                class="animate-fade-in flex items-center"
                style="animation-delay: 600ms;"
              >
                <Icon
                  icon="mdi:email"
                  class="mr-2 text-white transition-transform duration-300 hover:scale-110"
                  width="24"
                  height="24"
                />
                <span>ranners.team.ai@gmail.com</span>
              </div>
            </div>
            <div class="mt-6">
              <h3 class="mb-2 text-xl font-semibold text-white">
                Visítanos en la feria
              </h3>
              <div
                class="aspect-w-16 aspect-h-9 animate-fade-in"
                style="animation-delay: 800ms;"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.757328869742!2d-70.61835458482683!3d-33.49772808076461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59d0fa5bf9d%3A0x45a11c8a8c92ab47!2sAv.%20Vicu%C3%B1a%20Mackenna%203939%2C%20San%20Joaqu%C3%ADn%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2sus!4v1694614518415!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  class="rounded-lg transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
  
const form = ref({
  name: '',
  email: '',
  message: '',
});
  
const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value);
  // Reset form after submission
  form.value = { name: '', email: '', message: '' };
  // You might want to show a success message to the user here
};
  </script>
  
  <style scoped>
  /* Required for aspect ratio of iframe */
  .aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%;
  }
  .aspect-w-16 > * {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  /* Animations */
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
  
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  /* Vue transitions */
  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-in-enter-from,
  .fade-in-leave-to {
    opacity: 0;
  }
  
  .fade-slide-right-enter-active,
  .fade-slide-right-leave-active,
  .fade-slide-left-enter-active,
  .fade-slide-left-leave-active {
    transition: all 0.5s ease-out;
  }
  
  .fade-slide-right-enter-from,
  .fade-slide-right-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }
  
  .fade-slide-left-enter-from,
  .fade-slide-left-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
  
  /* Tailwind animations */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  </style>