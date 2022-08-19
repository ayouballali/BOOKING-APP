import React from 'react'
import './mailList.css'

export default function MailList() {
  return (
    <div className='mailContainer'>
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className='mailtext' >Sign up and we'll send the best deals to you</span>
        <div className="mail">
            <input type="text" placeholder='Your Email'   />
            <button >Subscribe</button>
        </div>
    </div>
  )
}
