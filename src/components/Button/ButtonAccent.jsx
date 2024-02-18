// import React from 'react'

const Button = (props) => {
    return (
      <button className='bg-accent100 text-white rounded-xl px-10 py-3 hover:bg-accent200 duration-300'>
          {props.children}
      </button>
    )
  }
  
  export default Button
  