import { useState } from 'react';
// import Dashboard from './Dashboard';
// import './App.css';
// import Login from './Login';
// import Registration from './Registration';
// import Demo from './Demo';
import HomePage from './HomePage';

function App() {
  // const [isRegister, setIsRegister] = useState(false)
  // const [isLogin, setIsLogin] = useState(false)
  // const [userInput, setUserInput] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // })
  return (
    <>
    {/* {isRegister 
    ? isLogin 
      ? <Dashboard userInput={userInput}/>
      :<Login userInput={userInput} setIsLogin={setIsLogin}/>
    :<Registration userInput={userInput} setUserInput={setUserInput} setIsRegister={setIsRegister}/>
    } */}
    {/* <Demo/> */}
    <HomePage/>
      
    </>
  )

}
export default App;

