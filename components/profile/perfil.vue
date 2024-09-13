<template>
    <div class="flex items-center gap-x-6 flex-col">
        <img :src="src" height="150" width="150"></img>
        <span class="text-center text-lime-800"> <!-- Falta ajustar según colores de ranner-->
            <slot name="name"></slot>
        </span>
        <span class="text-center">
            <slot name="job"></slot>
        </span>
        <span class="text-center">
            <slot name="description"></slot>
        </span>
    </div>
</template>
<script>

export default {
    props: {
        src: {
            type: String,
            required: true
        }
    }
}
</script>