import React from 'react'

export const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='Name'/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder='Email'/>
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" required placeholder='Message'/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}
