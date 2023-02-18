import React from 'react'

const HomeCards = ({Number,stateCourse,NameCourse ,srcIcon}) => {
  return (
    <div className='w-full  transition-shadow  '>
       <div class="p-4 w-full hover:scale-105 duration-500">
          <div class=" flex items-center  justify-between p-4  rounded-2xl bg-white shadow-indigo-50 shadow-md">
            <div
              class=" w-32 h-32  rounded-full shadow-sm  border-white  border-dashed border-2  flex justify-center items-center ">
              <div>
               {srcIcon}
              </div>
            </div>
            <div>
              <h2 class="text-gray-900 text-end text-lg font-bold"><span className='text-2xl font-bold'>+</span>{Number}K</h2>
              <h3 class="mt-2 text-xl font-bold text-indigo-500 text-left">{stateCourse}</h3>
              <p class="text-sm font-semibold text-end text-gray-400">{NameCourse}</p>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default HomeCards
