<template>
  <a
    :href="href"
    class=""
  >
    <slot />
  </a>
</template>
<script>

export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>