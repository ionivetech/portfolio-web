<script setup lang="ts">
import { ref } from 'vue'
import MenuDropdown from 'components/MenuDropdown.vue'

const isScrollingDown = ref<boolean>(false)
const menuLists: { url: string; label: string }[] = [
  { url: '#about-section', label: 'About' },
  { url: '#skill-section', label: 'Skills' },
  { url: '#experience-section', label: 'Experience' },
  { url: '#project-section', label: 'Project' },
  { url: '#contact-section', label: 'Contact' }
]
const showDropdown = ref<boolean>(false)

const scrollingDown = () => {
  let scrolling
  let lastScrollTop
  window.onscroll = function () {
    const scrollTop = window.pageYOffset
    window.clearTimeout(scrolling)

    if (scrollTop > lastScrollTop) isScrollingDown.value = true

    scrolling = setTimeout(() => {
      isScrollingDown.value = false
    }, 350)

    lastScrollTop = scrollTop
  }
}

scrollingDown()
</script>

<template>
  <div
    :class="isScrollingDown && !showDropdown ? '-top-20' : 'top-0 w-full border-b'"
    class="fixed inset-x-0 z-50 mx-auto h-[56px] border-slate-300/10 bg-slate-900/80 py-4 backdrop-blur transition-all duration-300 ease-linear md:h-16"
  >
    <div class="container flex h-full items-center justify-between">
      <img
        src="logo.svg"
        alt="logo"
        width="40"
        height="24"
        class="w-8 sm:w-10 h-auto"
      />

      <div class="hidden space-x-5 sm:block">
        <a
          v-for="menu in menuLists"
          :key="menu.url"
          :href="menu.url"
          class="text-sm font-medium text-gray-400 transition-colors duration-200 ease-linear hover:text-blue-400 md:text-base"
        >
          {{ menu.label }}
        </a>
      </div>

      <img
        src="/icons/bars.svg"
        alt="menu-icon"
        width="24"
        height="24"
        class="block sm:hidden cursor-pointer"
        @click="showDropdown = !showDropdown"
      />
    </div>
  </div>

  <MenuDropdown v-model="showDropdown" />
</template>
