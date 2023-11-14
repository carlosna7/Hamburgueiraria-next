import Section from '@/components/layout/Section'
import React from 'react'

const Apps = () => {
  return (
    <Section>
      <h1 className='flex justify-center font-bold pb-24 text-5xl'>Aplicativo</h1>

      <div className='flex justify-between pb-16'>

        <div className='h-[450px] w-[450px] bg-gray-400'>
          <p> 450x450</p>
        </div>
        <div className='flex flex-col gap-4 h-[450px] w-[450px]'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor consequuntur nisi ipsa. Reiciendis quis sunt molestias tempore? Labore placeat porro sequi accusamus unde odio nemo distinctio suscipit cupiditate asperiores.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          </p>
        </div>

      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-4 h-[450px] w-[450px]'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor consequuntur nisi ipsa. Reiciendis quis sunt molestias tempore? Labore placeat porro sequi accusamus unde odio nemo distinctio suscipit cupiditate asperiores.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut nemo dolor ipsum harum quod dolorum quasi deserunt aliquid doloremque labore quisquam praesentium at, laudantium assumenda reprehenderit numquam deleniti accusantium.
          </p>
        </div>

        <div className='h-[450px] w-[450px] bg-gray-400'>
          <p> 450x450</p>
        </div>

      </div>
  </Section>
  )
}

export default Apps