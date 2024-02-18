// import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-primary100 text-white rounded-xl px-10 py-3 hover:bg-[#395cb4]'>
        {props.children}
    </button>
  )
}

export default Button
