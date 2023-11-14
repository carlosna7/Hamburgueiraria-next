import Section from '@/components/layout/Section'
import React from 'react'

const About = () => {
  return (
    <Section className='flex flex-col'>

      <h1 className='font-bold pb-16 text-5xl'>About</h1>

      <div className='flex justify-between pb-16'>

        <div className='w-[600px] overflow-hidden rounded-3xl'>
          <img
            className='duration-500 hover:scale-125'
            src="../about1.jpg"
            alt=""
            width={600}
            height={600}
          />
        </div>

        <div className='flex flex-col gap-4 w-[600px]'>

          <h2 className='flex text-3xl justify-center'>Nossa história</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor consequuntur nisi ipsa. Reiciendis quis sunt molestias tempore? Labore placeat porro sequi accusamus unde odio nemo distinctio suscipit cupiditate asperiores.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          </p>
        </div>

      </div>

      <div className='flex justify-between'>

        <div className='flex flex-col gap-4 w-[600px]'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor consequuntur nisi ipsa. Reiciendis quis sunt molestias tempore? Labore placeat porro sequi accusamus unde odio nemo distinctio suscipit cupiditate asperiores.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          </p>
        </div>

        <div className='w-[600px] overflow-hidden rounded-3xl'>
          <img
            className='duration-500 hover:scale-125'
            src="../about2.jpg"
            alt=""
            width={600}
            height={600}
          />
        </div>
          
      </div>
    </Section>
  )
}

export default About