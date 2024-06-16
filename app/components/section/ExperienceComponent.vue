<script lang="ts" setup>
interface Experience {
  role: string
  company: string
  url: string
  start: string
  end: string
  description: string
  responsibilities: string[]
  stacks: string[]
}

const { data: dataExperience } = await useAsyncData<Experience[]>(() => {
  return $fetch('/api/experiences')
})
</script>

<template>
  <section
    id="experience-section"
    class="section-container"
  >
    <div class="mb-8">
      <h2 class="title-section">
        Experience
      </h2>
      <p class="subtitle-section">
        I have some work experience in companies
      </p>
    </div>

    <!-- Experience List -->
    <div class="grid w-full grid-cols-1 gap-5">
      <div
        v-for="(experience, index) in dataExperience"
        :key="`experience-${index}`"
        class="grid grid-cols-1 gap-6 md:grid-cols-[min-content,143px,1fr]"
      >
        <!-- Dots and line step -->
        <div class="hidden h-[calc(100%+20px)] flex-col items-center md:flex">
          <!-- Dots for first index -->
          <div
            v-if="index === 0"
            class="my-4 size-2.5 min-h-[10px] min-w-[10px] rounded-full bg-blue-400 ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900"
          />
          <!-- Dots for other index -->
          <div
            v-if="index > 0"
            class="my-4 size-3 min-h-[12px] min-w-[12px] rounded-full bg-slate-400"
          />
          <!-- Line between dots -->
          <div
            v-if="index !== dataExperience.length - 1"
            class="h-full w-px bg-slate-600/50"
          />
        </div>

        <!-- Start and end date -->
        <div class="mt-3 hidden whitespace-nowrap text-sm font-medium text-gray-400 md:block">
          {{ experience.start }} - {{ experience.end }}
        </div>

        <!-- Detail Experience -->
        <div
          class="group flex flex-col gap-4 rounded-lg border border-gray-700/60 p-5 transition-all duration-300 ease-in-out hover:border-blue-400/50 hover:bg-background-soft/40 hover:shadow-card md:flex-row md:p-6"
        >
          <!-- Start and end date -->
          <div class="mt-0.5 block min-w-[143px] max-w-[143px] whitespace-nowrap text-sm font-medium text-gray-400 md:hidden">
            {{ experience.start }} - {{ experience.end }}
          </div>

          <div class="space-y-5">
            <div>
              <a
                v-if="experience.url"
                :href="experience.url"
                :target="experience.url"
                rel="noreferrer"
                class="mb-1 flex items-center space-x-1.5"
              >
                <p class="whitespace-nowrap text-base font-semibold text-white group-hover:text-blue-400">
                  {{ experience.role }}
                </p>

                <Icon
                  name="ph:arrow-up-right-bold"
                  class="w-4 text-white transition-all duration-300 ease-in-out group-hover:-mt-1 group-hover:ml-2 group-hover:text-blue-400"
                />
              </a>

              <div
                v-else
                class="mb-1 flex items-center space-x-1.5"
              >
                <p class="whitespace-nowrap text-base font-semibold text-white group-hover:text-blue-400">
                  {{ experience.role }}
                </p>
              </div>

              <p class="text-base font-normal text-gray-400">
                {{ experience.company }}
              </p>
            </div>

            <p class="text-sm leading-loose text-gray-400">
              {{ experience.description }}
            </p>

            <div>
              <p class="mb-1 text-sm font-semibold text-gray-300 sm:text-base">
                Responsibilities:
              </p>
              <ul class="list-disc pl-3 text-sm leading-loose text-gray-400 sm:leading-9">
                <li
                  v-for="(responsibility, idx) in experience.responsibilities"
                  :key="`responsibility-${idx}`"
                >
                  {{ responsibility }}
                </li>
              </ul>
            </div>

            <div class="flex flex-wrap gap-2">
              <div
                v-for="(stack, stackIdx) in experience.stacks"
                :key="`stack-${stackIdx}`"
                class="rounded-full bg-blue-400/10 px-3.5 py-1 text-xs font-medium leading-5 tracking-wide text-blue-300"
              >
                {{ stack }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
