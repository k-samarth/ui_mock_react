import React, { useState, useEffect } from 'react'
import RequestManager from './RequestManager'
import socketIOClient from 'socket.io-client';

const ChatWindow = (props) => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    
    useEffect(() => {

        props.socket.on('message_get', (message) => {
            setMessages(prev => prev = [...messages, message])
        });
    }, [props.socket]);
    
    function send_message(event) {
        event.preventDefault()
        props.socket.emit('message_send',message)
        setMessages(prev => prev = [...messages, message]);
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
        <button className='chat_send_button' onClick={send_message}>Send</button>
        <ul>
            {messages.map((data) => (
                        <li key={data}>{data}</li>
                    ))}
        </ul>
    </div>
  )
}

export default ChatWindow