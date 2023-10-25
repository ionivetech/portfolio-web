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
    <div className='flex h-full w-full flex-col items-center justify-center space-y-12'>
      {/* Profile Picture */}
      <img
        src='/profile.jpg'
        alt='profile-picture'
        width='208'
        height='208'
        className='rounded-full'
      />

      <div className='text-center'>
        <h1 className='mb-5 text-6xl font-bold tracking-tight text-white'>Farid Nugraha</h1>

        <h2 className='bg-gradient-to-r from-blue-400 to-teal-600 bg-clip-text text-6xl font-black tracking-tighter text-transparent'>
          Frontend Developer
        </h2>
      </div>

      {/* Hire button */}
      <div className='space-x-2'>
        <button
          className='rounded-lg border border-slate-700 bg-gradient-to-br from-blue-500 to-teal-600 px-5 py-2.5 font-medium text-white'
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
    </div>
  )
}

export default HomeSection
