<template>
  <div class="flex min-h-screen flex-col">
    <!-- Navbar -->
    <nav class="bg-[#5747a6] p-4 shadow-lg">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <NuxtLink
            to="/"
            class="group flex items-center space-x-3"
          >
            <img
              src="/public/ranner_logo.svg"
              alt="Ranner Logo"
              class="size-10 transition-transform duration-300 group-hover:rotate-12"
            >
            <span class="text-2xl font-bold text-white">Ranner</span>
          </NuxtLink>
          <div class="hidden justify-between gap-8 text-white md:flex">
            <NavbarLink to="/whatis">
              ¿Qué es Ranner?
            </NavbarLink>

            <NavbarLink to="/aboutus">
              Conócenos
            </NavbarLink>
            <NavbarLink to="/team">
              Equipo
            </NavbarLink>
            <NavbarLink to="/contact">
              Contacto
            </NavbarLink>
            <NavbarLink href="/redes">
              Nuestras redes
            </NavbarLink>
          </div>
          <button
            class="text-white focus:outline-none md:hidden"
            @click="toggleMobileMenu"
          >
            <svg
              class="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
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
          <NavbarLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="block cursor-pointer text-white transition-colors duration-200 hover:text-gray-300"
            @click="toggleMobileMenu"
          >
            {{ link.text }}
          </NavbarLink>
        </div>
      </transition>
    </nav>
    <main class="grow ">
      <NuxtPage />
    </main>

    <Footer v-if="$router.currentRoute.value.path !== '/'" />
  </div>
</template>

<script setup>

const navLinks = [
  { text: 'Conócenos', href: '/aboutus' },
  { text: 'Team', href: '/team' },
  { text: 'Nuestras Redes', href: '/redes' },
  { text: 'Contacto', href: '/contact' },
];

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};


</script>
<!--
  <script>
export default {
  name: 'Footer',
};
  </script>
  -->