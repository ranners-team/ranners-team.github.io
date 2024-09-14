<template>
  <div class="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#5747a6] p-8 text-white md:flex-row">
    <div class="z-10 mb-10 ml-10 max-w-xl md:mb-0">
      <h1 class="mb-4 text-4xl font-bold md:text-5xl">
        <span class="typing-effect">Comienza con la innovación.</span>
      </h1>
      <p
        class="mb-8 translate-y-4 text-xl opacity-0 transition-all duration-1000 ease-out"
        :class="{ 'translate-y-0 opacity-100': showContent }"
      >
        Conéctate con nosotros y juntos exploraremos nuevas formas de aprendizaje que marcan la diferencia en el futuro de la educación.
      </p>
      <a
        href="/whatis"
      >
        <button 
          class="pulse-effect rounded-full bg-green-600 px-8 py-3 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-green-500 hover:shadow-lg"
          @mouseover="startButtonPulse"
          @mouseleave="stopButtonPulse"
        >
          ¡Conócenos!
        </button>
      </a>
    </div>
          
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="animate-float absolute text-4xl transition-all duration-300 ease-in-out"
        :style="{ 
          top: `${icon.top}%`, 
          left: `${icon.left}%`, 
          animationDelay: `${icon.delay}s`,
          transform: `translateY(${parallaxOffset * icon.parallaxFactor}px)`
        }"
      >
        {{ icon.emoji }}
      </div>
    </div>
  </div>
</template>
      
  <script setup>
import { ref, onMounted, onUnmounted } from 'vue';
  
const showContent = ref(false);
const parallaxOffset = ref(0);
let buttonPulseInterval = null;
  
const icons = [
  { emoji: '📱', top: 10, left: 10, delay: 0, parallaxFactor: 0.2 },
  { emoji: '💬', top: 20, left: 80, delay: 1.5, parallaxFactor: 0.3 },
  { emoji: '📊', top: 80, left: 15, delay: 3, parallaxFactor: 0.1 },
  { emoji: '🚀', top: 70, left: 80, delay: 4.5, parallaxFactor: 0.4 },
  { emoji: '✏', top: 60, left: 20, delay: 4.5, parallaxFactor: 0.2 },
  { emoji: '🚀', top: 25, left: 50, delay: 4.5, parallaxFactor: 0.3 },
  { emoji: '📚', top: 50, left: 55, delay: 1, parallaxFactor: 0.25 },
  { emoji: '📝', top: 40, left: 70, delay: 2.5, parallaxFactor: 0.35 },
];
  
onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 500);
    
  window.addEventListener('mousemove', handleMouseMove);
    
  // Load Instagram embed script
  const script = document.createElement('script');
  script.async = true;
  script.src = '//www.instagram.com/embed.js';
  document.body.appendChild(script);
});
  
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
  
const handleMouseMove = (e) => {
  const mouseY = e.clientY;
  parallaxOffset.value = (mouseY - window.innerHeight / 2) * 0.1;
};
  
const startButtonPulse = () => {
  if (!buttonPulseInterval) {
    buttonPulseInterval = setInterval(() => {
      const button = document.querySelector('.pulse-effect');
      button.classList.add('animate-pulse');
      setTimeout(() => {
        button.classList.remove('animate-pulse');
      }, 1000);
    }, 2000);
  }
};
  
const stopButtonPulse = () => {
  if (buttonPulseInterval) {
    clearInterval(buttonPulseInterval);
    buttonPulseInterval = null;
  }
};
  </script>
  
  <style scoped>
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  .typing-effect {
    display: inline-block;
    overflow: hidden;
    border-right: .15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
      typing 1.5s steps(40, end),
      blink-caret .75s step-end infinite;
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }
  
  .pulse-effect {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
  
  .youtube-embed-container,
  .instagram-embed-container {
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
  }
  
  .youtube-embed-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
  }
  
  .youtube-embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    .youtube-embed-container,
    .instagram-embed-container {
      max-width: 100%;
    }
  }
  </style>
  