<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Farid Nugraha | Frontend Developer',
  meta: [
    { name: 'description', content: 'Farid Nugraha | Frontend Developer | Vue Developer | React Developer | Angular Developer' },
  ],
})
</script>

<template>
  <main>
    <NavbarComponent />

    <!-- Section content -->
    <div class="container">
      <slot />
    </div>
  </main>
</template>
