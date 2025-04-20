import logo from './logo.svg';
import './App.css';
import Form from './Form';
import LoginForm from './LoginForm';
import ValidationForm from './ValidationForm';
import FeedbackForm from './FeedbackForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FeedbackForm/>
        {/* <ValidationForm/> */}
        {/* <LoginForm/> */}
          {/* <Form/> */}
      </header>
    </div>
  );
}

export default App;
