<script setup lang="ts">
// Props
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

// Emits
const emits = defineEmits(['update:modelValue'])

// Variables
const menuLists: { url: string; label: string }[] = [
  { url: '#about-section', label: 'About' },
  { url: '#skill-section', label: 'Skills' },
  { url: '#experience-section', label: 'Experience' },
  { url: '#project-section', label: 'Project' },
  { url: '#contact-section', label: 'Contact' }
]
</script>

<template>
  <div
    :class="{ '-translate-y-[150%]': !modelValue }"
    class="fixed left-0 right-0 top-[56px] z-10 block w-full border-b border-slate-300/10 bg-slate-900/80 backdrop-blur transition-all duration-300 ease-linear sm:hidden"
  >
    <div class="flex flex-col space-y-4 py-4">
      <a
        v-for="menu in menuLists"
        :key="menu.url"
        :href="menu.url"
        :aria-label="menu.label"
        class="px-3 py-2 text-sm font-medium text-gray-400 transition-colors duration-200 ease-linear hover:text-blue-400 md:text-base"
        @click="emits('update:modelValue', false)"
      >
        {{ menu.label }}
      </a>
    </div>
  </div>
</template>
