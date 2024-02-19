import React from 'react'

const InviteSection = () => {
    return (
        <div className='flex flex-col items-center gap-3 px-4 md:px-0'>
            <h1 className='text-center text-2xl md:text-4xl lg:text-6xl font-bold text-info'>Join the Community <br /> Be Part of It</h1>
            <p className='text-sm w-full md:w-[50%] lg:w-[35%] text-center mb-5'>Collaborate with creators from around the world and bring your content to a global audience.</p>
            <button className='btn btn-primary btn-outline'>Get Started</button>
        </div>
    )
}

export default InviteSection