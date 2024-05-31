import React, { useState } from 'react'
import RequestManager from './RequestManager'

const ChatWindow = () => {

    const [message, setMessage] = useState('')
    function send_message(event) {
        event.preventDefault()
        setMessage('')
    }
    function update_message(event) {
        event.preventDefault()
        setMessage(event.target.value)
    }
  return (
    <div>
        <label className='chat_input_label'>Message</label>
        <input type='text' className='chat_input' onChange={update_message} value={message}></input>
        <RequestManager send_message = {send_message}/>
    </div>
  )
}

export default ChatWindow