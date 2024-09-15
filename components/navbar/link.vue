<template>
  <NuxtLink
    :to="to"
    class=""
  >
    <slot />
  </NuxtLink>
</template>
<script>

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>