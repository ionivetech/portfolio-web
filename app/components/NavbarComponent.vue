<script lang="ts" setup>
const menuLists: { url: string, label: string }[] = [
  { url: '#about-section', label: 'About' },
  { url: '#skill-section', label: 'Skills' },
  { url: '#experience-section', label: 'Experience' },
  { url: '#project-section', label: 'Project' },
  { url: '#contact-section', label: 'Contact' },
]
const showDropdown = ref<boolean>(false)
</script>

<template>
  <nav class="fixed w-full top-5 z-50">
    <div class="container">
      <div
        class="min-h-14 w-full rounded-xl border border-slate-300/10 bg-gradient-to-r from-[rgb(29,39,56)]/80 to-[rgb(21,27,38)]/80 backdrop-blur  sm:min-h-16 md:rounded-2xl"
      >
        <div class="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 md:px-8">
          <img
            src="/images/logo.svg"
            alt="logo"
            width="24"
            height="24"
            class="h-auto w-8 sm:w-10"
          >
  
          <!-- Menu List -->
          <div class="hidden space-x-5 sm:block">
            <a
              v-for="menu in menuLists"
              :key="menu.url"
              :href="menu.url"
              :aria-label="menu.label"
              class="text-sm font-medium text-gray-300 transition-colors duration-200 ease-linear hover:text-blue-400 md:text-base"
            >
              {{ menu.label }}
            </a>
          </div>
  
          <div
            class="block cursor-pointer sm:hidden"
            role="button"
          >
            <Icon
              :name="showDropdown ? 'heroicons:x-mark-20-solid' : 'heroicons:bars-3-20-solid'"
              class="size-6 cursor-pointer text-gray-400"
              @click="showDropdown = !showDropdown"
            />
          </div>
        </div>
  
        <!-- Dropdown Menu -->
        <Transition name="slidedown">
          <div
            v-if="showDropdown"
            class="flex flex-col border-t border-slate-300/10 py-2"
          >
            <a
              v-for="menu in menuLists"
              :key="menu.url"
              :href="menu.url"
              :aria-label="menu.label"
              class="w-full p-3 text-sm font-medium text-gray-400 transition-colors duration-200 ease-linear hover:bg-gray-700/70 hover:text-blue-400 md:text-base"
              @click="showDropdown = false"
            >
              {{ menu.label }}
            </a>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>
