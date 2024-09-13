<template>
    <div class="flex flex-col">

        <!-- Navbar -->
        <nav class="flex flex-row px-8 gap-3 items-center justify-between ">
            <a href="/" class="flex flex-row align-self-center">
                <img src="/assets/ranner_logo.svg"  height="50" width="50"></img>
                <p>Ranner</p>
            </a>
            <div class="flex justify-between gap-8">
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
        </nav>  

        <!-- Contenido Página-->
        <NuxtPage />

        <!-- Footer -->
        <footer class="bg-black text-white flex flex-row justify-between">
            <a href="/">
                <p>Ranner</p>
                <p>
                    Tu espacio de aprendizaje interactivo
                </p>
            </a>
            <div class="flex flex-col">
                <p>Nuestras redes</p>
                <hr>
                <FooterLink href="/">
                    <Icon name="mdi:instagram" style="color: white" />
                    Instagram
                </FooterLink>
                <FooterLink href="/">
                    <Icon name="mdi:linkedin" style="color: white" />
                    LinkedIn
                </FooterLink>
            </div>
            <div>
                <FooterLink href="/contact">
                    contact
                </FooterLink>
                <FooterLink href="/aboutus">
                    about us
                </FooterLink>
                <FooterLink href="/team">
                    team
                </FooterLink>
            </div>
        </footer>
    </div>
</template>