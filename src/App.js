import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import States from './components/States';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';



function App() {
  let number = -28
  const checkNumber = () => {
    if(number>0){
      return <h1>Positive Number</h1>
    }else if(number<0){
      return <h1>Negative Number</h1>
    } else {
      return <h1>ZERO</h1>
    }
  }

  return (
    <div className="App"> 
    {checkNumber()}
    </div>
  );
}

export default App;
