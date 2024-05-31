import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:9090', {
    transportOptions: {
        polling: {
            extraHeaders: { "Authorization": "123Kamath123",
                "userid" : '123'
            }
        },
    }
});

const RequestManager = (props) => {
  return (
    <button className='chat_send_button' onClick={props.send_message}>Send</button>
  )
}

export default RequestManager