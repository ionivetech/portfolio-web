<template>
  <section
    class="relative flex h-[85vh] w-full flex-col items-center justify-center space-y-8 sm:h-screen md:space-y-10 lg:space-y-12"
  >
    <!-- Profile Picture -->
    <NuxtImg
      src="/images/profile.webp"
      alt="profile-picture"
      format="webp"
      preload
      quality="70"
      width="144"
      height="144"
      sizes="144px md:176px lg:192px"
      class="rounded-full"
    />

    <div class="flex flex-col items-center text-center">
      <h1 class="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:mb-5 lg:text-6xl">
        Farid Nugraha
      </h1>

      <div
        class="mb-7 w-max -rotate-1 rounded-xl px-3 py-2 text-xl font-bold tracking-tight text-white shadow-card ring-2 ring-blue-500 md:text-2xl lg:px-4 lg:py-3 lg:text-3xl"
      >
        Frontend Developer
      </div>

      <p class="max-w-prose text-base text-gray-400 md:text-lg">
        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that
        leads to the success of the overall product
      </p>
    </div>

    <!-- Hire button -->
    <div class="space-x-2">
      <a
        href="#contact-section"
        aria-label="Contact Section"
      >
        <button
          class="btn btn-primary"
        >
          Contact Me
        </button>
      </a>

      <a
        href="/cv_farid_nugraha.pdf"
        aria-label="CV"
        target="_blank"
      >
        <button
          class="btn btn-secondary"
        >
          Download CV
        </button>
      </a>
    </div>
  </section>
</template>
