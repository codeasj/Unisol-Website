import React from 'react'

export default function Support() {
    return (
        <div style={{ backgroundImage: 'url("/assets/images/contact-us-bg.png")' }}
            className='w-full h-96 bg-cover bg-no-repeat relative z-10'
        >

            <div className='absolute z-20 w-full h-full text-white px-4 md:pl-40 flex flex-col gap-5 justify-center'>
                <p className='text-lg font-medium'>Let's Try! to <span className='text-primary font-bold'> Support</span> </p>

                <h3 className='text-2xl font-semibold'>Be Ready for the Ever-Changing World.</h3>

                <div className='flex gap-10 mt-10'>
                    <button className='bg-primary p-3 w-32 font-medium rounded-md'>Contact Us</button>

                    <button className='border border-primary p-3 w-32 font-medium rounded-md'>Talk to Us</button>
                </div>

            </div>
        </div>
    )
}
