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
          <div class="flex justify-between gap-8 text-white">
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
            :to="link.href"
            class="block cursor-pointer text-white transition-colors duration-200 hover:text-gray-300"
            @click="toggleMobileMenu"
          >
            {{ link.text }}
          </NavLink>
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
  { text: 'Inicio', href: '/' },
  { text: 'Contact', href: '/contact' },
  { text: 'Conócenos', href: '/aboutus' },
  { text: 'Team', href: '/team' },
  { text: 'Nuestras Redes', href: '/redes' },
];
</script>
<!--
  <script>
export default {
  name: 'Footer',
};
  </script>
  -->