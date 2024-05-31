import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/ChatWindow';
import './Assets/CSS/styles.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatWindow/>
      </header>
    </div>
  );
}

export default App;
