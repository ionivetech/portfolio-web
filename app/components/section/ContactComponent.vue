<script lang="ts" setup>
const message = ref<string>('')

const handleSendMessage = () => {
  window.open(`https://api.whatsapp.com/send/?phone=6281296464313&text=${message.value}`)
}
</script>

<template>
  <section
    id="contact-section"
    class="section-container pb-10"
  >
    <div class="mb-8">
      <h2 class="title-section">
        Let’s discuss
      </h2>
      <p class="subtitle-section">
        If you want to discuss with me, hire me, or talk about a project, please contact me
      </p>
    </div>

    <textarea
      v-model="message"
      rows="4"
      class="w-full resize-none rounded-lg border border-gray-700/60 bg-background/30 p-4 font-normal text-white transition-colors duration-300 ease-linear placeholder:text-gray-400 focus:border-blue-400 focus:outline-none"
      placeholder="Message"
    />

    <div class="mt-4 flex justify-end">
      <button
        class="btn btn-primary"
        @click="handleSendMessage"
      >
        Send Message
      </button>
    </div>

    <div class="mt-12 flex space-x-3 text-gray-400">
      <a
        href="https://github.com/ionivetech"
        aria-label="Github"
        target="_blank"
      >
        <Icon
          name="mdi:github"
          class="size-7"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/faridnugraha/"
        aria-label="Linkedin"
        target="_blank"
      >
        <Icon
          name="mdi:linkedin"
          class="size-7"
        />
      </a>
      <a
        href="mailto:fnuugraha@outlook.com"
        aria-label="Email"
        target="_blank"
      >
        <Icon
          name="mdi:email"
          class="size-7"
        />
      </a>
    </div>
  </section>
</template>
