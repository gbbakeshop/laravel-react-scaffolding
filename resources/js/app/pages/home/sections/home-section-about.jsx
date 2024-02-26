import React from 'react'

export default function HomeSectionAbout() {
  return (
    <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div class="max-h-96 md:h-screen">
            <img class="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          </div>
          <div class="flex bg-gray-100 p-10">
            <div class="mb-auto mt-auto max-w-lg">
              <h1 class="text-3xl uppercase">About Me</h1>
              <p class="font-semibold mb-3">Web Developer</p>
             <p className='my-3'>
             Hey there! I'm Marlou, a passionate software engineer based in San Carlos City Negros Occidental Philippines. With 5 years of experience in the field, I thrive on crafting innovative solutions to complex problems.
             </p>
             <p className='my-3'>
             My journey in software engineering began with a love for coding, and it has since evolved into a deep understanding of various technologies and methodologies. From designing elegant algorithms to architecting scalable systems, I enjoy every aspect of the development process.
             </p>
             <p className='my-3'>
             Beyond coding, I'm a firm believer in the power of collaboration and continuous learning. I thrive in dynamic environments where ideas are shared freely and feedback is welcomed. My goal is not only to write great code but also to mentor and inspire others to do the same.
             </p>
             <p className='my-3'>
             When I'm not immersed in lines of code, you can find me exploring the latest tech trends, contributing to open-source projects, or simply enjoying the outdoors. I find inspiration in my family, and I'm always looking for new challenges to tackle.
             </p>
             <p className='my-3'>
             Let's connect and embark on a journey of innovation together!
             </p>
             <button class="bg-purple-900 rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
            </div>
          </div>
        </div>
      </div>
  )
}
