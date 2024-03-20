import React from 'react'

const WrapperContainer = ({children}) => {
  return (
    <div className='w-full md:max-w-[70%] justify-center text-center md:mx-auto'>
        {children}
    </div>
  )
}

export default WrapperContainer