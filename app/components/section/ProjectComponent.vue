<script lang="ts" setup>
interface Project {
  name: string
  url: string
  image: string
  description: string
  stacks: string[]
}

const { data: dataProject } = await useAsyncData<Project[]>(() => {
  return $fetch('/api/projects')
})
</script>

<template>
  <section
    id="project-section"
    class="section-container"
  >
    <div class="mb-8">
      <h2 class="title-section">
        Project
      </h2>
      <p class="subtitle-section">
        A few projects I've worked on
      </p>
    </div>

    <div class="grid grid-cols-skills-sm gap-5 md:grid-cols-skills">
      <div
        v-for="project in dataProject"
        :key="project.name"
        class="group rounded-xl border border-gray-700/60 p-3 transition-all duration-300 ease-linear hover:border-blue-400/50 hover:bg-background-soft/40 hover:shadow-card md:p-4"
      >
        <div class="mb-4 h-min overflow-hidden rounded-lg">
          <NuxtImg
            :src="project.image"
            :alt="project.name"
            quality="60"
            width="564"
            height="329"
            class="rounded-lg transition-all duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        <a
          v-if="project.url"
          class="mb-5 flex items-start space-x-1.5"
        >
          <p class="text-base font-semibold text-white group-hover:text-blue-400">
            {{ project.name }}
          </p>

          <Icon
            name="ph:arrow-up-right-bold"
            class="mt-1 w-4 text-white transition-all duration-300 ease-in-out group-hover:ml-2 group-hover:mt-0 group-hover:text-blue-400"
          />
        </a>

        <div
          v-else
          class="mb-5 flex items-start space-x-1.5"
        >
          <p class="text-base font-semibold text-white group-hover:text-blue-400">
            {{ project.name }}
          </p>
        </div>

        <p class="mb-5 text-sm leading-relaxed text-gray-400">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <div
            v-for="(stack, index) in project.stacks"
            :key="`stack-${index}`"
            class="rounded-full bg-blue-400/10 px-3.5 py-1 text-xs font-medium leading-5 tracking-wide text-blue-300"
          >
            {{ stack }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
