<script lang="ts" setup>
interface Skill {
  icon: string
  name: string
  description: string
}

const { data: dataSkills } = await useAsyncData<Skill[]>(() => {
  return $fetch('/api/skills')
})
</script>

<template>
  <section
    id="skill-section"
    class="section-container"
  >
    <div class="mb-8">
      <h2 class="title-section">
        Skills
      </h2>
      <p class="subtitle-section">
        I have skills in web development, familiar using javascript, typescript, and frontend
        development frameworks such as Vue and React
      </p>
    </div>

    <div class="grid grid-cols-skills-sm gap-5 md:grid-cols-skills">
      <div
        v-for="skill in dataSkills"
        :key="skill.name"
        class="group flex space-x-4 rounded-lg border border-gray-700/60 p-3 transition-all duration-300 ease-linear hover:border-blue-400/50 hover:bg-background-soft/40 hover:shadow-card md:p-4"
      >
        <div class="flex size-12 min-w-[48px] max-w-[48px] items-center justify-center rounded-full bg-background-soft">
          <Icon
            :name="skill.icon"
            class="size-6"
          />
        </div>

        <div>
          <p class="mb-2 text-sm font-semibold text-gray-200 transition-colors duration-300 ease-linear group-hover:text-blue-400">
            {{ skill.name }}
          </p>
          <p class="text-sm leading-relaxed text-gray-400">
            {{ skill.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
