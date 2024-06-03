import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/ChatWindow';
import './Assets/CSS/styles.css'
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:9090', {
  transportOptions: {
    polling: {
      extraHeaders: {
        "Authorization": "123Kamath123",
        "userid": '123'
      }
    },
  }
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatWindow socket={socket}/>
      </header>
    </div>
  );
}

export default App;
