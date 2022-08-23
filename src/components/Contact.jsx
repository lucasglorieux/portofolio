import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/583ba0b1-d3c8-4b8f-95ea-e3f7d0aac927" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ac00ff] text-[#a4b0be]'>
                    Contact
                </p>
                <p className='text-[#a4b0be] py-4'>
                    Submit the form or send me an email - lucasglorieux.dev@gmail.com
                </p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'></input>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder="Your message"></textarea>
            <button className='text-white border-2 hover:bg-[#ac00ff] hover:border-[#ac00ff] px-4 py-3 my-8 mx-auto flex items-center'>
                Contact me!
            </button>

        </form>
        
    </div>
  )
}

export default Contact