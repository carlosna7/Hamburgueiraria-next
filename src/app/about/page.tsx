import Section from '@/components/layout/Section'
import React from 'react'

const About = () => {
  return (
    <Section className='flex flex-col'>

      <h1 className='flex font-bold pb-24 text-5xl justify-center'>About</h1>

      <div className='flex lg:flex-row flex-col justify-between lg:items-start items-center gap-8 pb-16'>

        <div className='overflow-hidden rounded-3xl 2xl:w-[650px] xl:w-[480px] lg:w-[420px] md:w-[400px] w-[280px]'>
          <img
            className='duration-500 hover:scale-125'
            src="../about1.jpg"
            alt=""
            width={700}
            height={700}
          />
        </div>

        <div className='flex flex-col text-justify gap-4 2xl:w-[650px] xl:w-[480px] lg:w-[420px] md:w-full w-full'>

          <h2 className='flex text-3xl justify-center'>Nossa história</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor consequuntur nisi ipsa. Reiciendis quis sunt molestias tempore? Labore placeat porro sequi accusamus unde odio nemo distinctio suscipit cupiditate asperiores.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          </p>
        </div>

      </div>
      
      <div className='flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center gap-8 pb-16'>
        <div className='flex flex-col text-justify gap-4 2xl:w-[650px] xl:w-[480px] lg:w-[420px] md:w-full w-full'>

          <h2 className='flex text-3xl justify-center'>Nossa história</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor consequuntur nisi ipsa. Reiciendis quis sunt molestias tempore? Labore placeat porro sequi accusamus unde odio nemo distinctio suscipit cupiditate asperiores.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          </p>
        </div>

        <div className='overflow-hidden rounded-3xl 2xl:w-[650px] xl:w-[480px] lg:w-[420px] md:w-[400px] w-[280px]'>
          <img
            className='duration-500 hover:scale-125'
            src="../about2.jpg"
            alt=""
            width={700}
            height={700}
          />
        </div>

      </div>

      
    </Section>
  )
}

export default About