<template>
    <div class="text-center">
        <h1 class="text-4xl font-bold">
            Conoce a nuestro equipo
          </h1>
    </div>
    <div>
        <!-- No sé por qué no me agarraba el path de la img, tuve que ponerle _nuxt manualmente-->
        <ul class="grid grid-cols-3 pt-6">
            <li>
                <ProfilePerfil src="/_nuxt/assets/Untitled.jpg">
                    <template #name>
                        Matías Contreras
                    </template>
                    <template #job>
                        DevOps
                    </template>            
                    <template #description>
                        Esta es una descripción
                    </template>
                </ProfilePerfil>
            </li>
            <li>
                <ProfilePerfil src="/_nuxt/assets/Untitled.jpg">
                    <template #name>
                        Alejandro Astudillo
                    </template>
                    <template #job>
                        IA
                    </template>            
                    <template #description>
                        Esta es una descripción
                    </template>
                </ProfilePerfil>
            </li>
            <li>
                <ProfilePerfil src="/_nuxt/assets/Untitled.jpg">
                    <template #name>
                        Juan Francisco Baquedano
                    </template>
                    <template #job>
                        Front-End
                    </template>            
                    <template #description>
                        Esta es una descripción
                    </template>
                </ProfilePerfil>
            </li>
            <li>
                <ProfilePerfil src="/_nuxt/assets/Untitled.jpg">
                    <template #name>
                        Vicente Lineros
                    </template>
                    <template #job>
                        Full Stack Dev
                    </template>            
                    <template #description>
                        Esta es una descripción
                    </template>
                </ProfilePerfil>
            </li>
            <li>
                <ProfilePerfil src="/_nuxt/assets/Untitled.jpg">
                    <template #name>
                        David Álvarez
                    </template>
                    <template #job>
                        IA
                    </template>            
                    <template #description>
                        Esta es una descripción
                    </template>
                </ProfilePerfil>
            </li>
            <li>
                <ProfilePerfil src="/_nuxt/assets/Untitled.jpg">
                    <template #name>
                        Vicente Figueroa
                    </template>
                    <template #job>
                        Front-End
                    </template>            
                    <template #description>
                        Esta es una descripción
                    </template>
                </ProfilePerfil>
            </li>
        </ul>
    </div>
</template>