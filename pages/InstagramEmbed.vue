<template>
  <div class="instagram-embed">
    <blockquote 
      class="instagram-media" 
      data-instgrm-permalink="https://www.instagram.com/p/C_1cwTeOKO2/?utm_source=ig_embed&amp;utm_campaign=loading" 
      data-instgrm-version="14"
    >
      <div style="padding:16px;">
        <a
          href="https://www.instagram.com/p/C_1cwTeOKO2/?utm_source=ig_embed&amp;utm_campaign=loading"
          target="_blank"
        >
          Ver esta publicación en Instagram
        </a>
      </div>
    </blockquote>
  </div>
</template>
  
  <script>
export default {
  name: 'InstagramEmbed',
  mounted() {
    this.loadInstagramEmbed();
  },
  methods: {
    loadInstagramEmbed() {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      document.body.appendChild(script);
          
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    },
  },
};
  </script>
  
  <style scoped>
  .instagram-embed {
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
  }
  </style>