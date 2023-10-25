const HomeSection = () => {
  // Function send message to whatsapp
  const sendMessage = () => {
    window.open('https://api.whatsapp.com/send/?phone=6281296464313')
  }

  // Function download cv
  const downloadCV = () => {
    window.open(
      'https://drive.google.com/file/d/1NveH7q-EP9w9FNyFn93JJwDTlGdxTed7/view?usp=sharing'
    )
  }

  return (
    <section
      id='homeSection'
      className='container relative flex h-[85vh] w-full flex-col items-center justify-center space-y-8 sm:h-screen md:space-y-10 lg:space-y-12'
    >
      {/* Profile Picture */}
      <img
        src='/profile.jpg'
        alt='profile-picture'
        width='192'
        height='192'
        className='h-36 w-36 rounded-full md:h-44 md:w-44 lg:h-48 lg:w-48'
      />

      <div className='text-center'>
        <h1 className='mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:mb-5 lg:text-6xl'>
          Farid Nugraha
        </h1>

        <h2 className='mb-7 bg-gradient-to-r from-blue-400 to-teal-600 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl md:tracking-tighter lg:text-6xl'>
          Frontend Developer
        </h2>

        <p className='prose text-base text-gray-400 md:text-lg'>
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications
          that leads to the success of the overall product
        </p>
      </div>

      {/* Hire button */}
      <div className='space-x-2'>
        <button
          className='rounded-lg bg-gradient-to-br from-blue-500 to-teal-600 px-5 py-2.5 font-medium text-white'
          onClick={() => sendMessage()}
        >
          Contact Me
        </button>

        <button
          className='rounded-lg bg-background-soft px-5 py-2.5 font-medium text-white transition-colors duration-200 ease-linear hover:bg-background-soft/70'
          onClick={() => downloadCV()}
        >
          Download CV
        </button>
      </div>

      <div className='absolute bottom-14 hidden h-10 w-6 rounded-full border-2 border-gray-400 sm:block'>
        <div className='animate-wheel absolute left-2/4 top-1.5 h-1.5 w-1.5 -translate-x-2/4 rounded-full bg-gray-200' />
      </div>
    </section>
  )
}

export default HomeSection
