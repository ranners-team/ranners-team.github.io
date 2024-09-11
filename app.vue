<template>
    <div class="flex flex-col">
        <nav class="flex gap-3 flex-col">
            <a href="/">
                ranner
            </a>
            <div class="flex flex-col">
                <NavbarLink href="/contact">
                    cntact
                </NavbarLink>
                <NavbarLink href="/aboutus">
                    about us
                </NavbarLink>
                <NavbarLink href="/team">
                    team
                </NavbarLink>
            </div>
        </nav>  
        <NuxtPage />
        <footer class="bg-black text-white flex flex-col">
            <a href="/">
                ranner
            </a>
            <div>
                <FooterLink href="/contact">
                    cntact
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