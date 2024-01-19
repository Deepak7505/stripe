import React from 'react'

const Shimmer = () => {
  return (
    <div className='w-full ml-16 h-max flex flex-wrap '>
        {
            Array(6).fill("").map(() => {
                return (<div className='h-96 w-1/4 m-4  bg-gray-200'></div>)
            })
        }
    </div>
  )
}

export default Shimmer