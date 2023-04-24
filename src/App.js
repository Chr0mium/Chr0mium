import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Profile/Login';
import SignUp from './Component/Profile/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/Home' element = {<Home/>}/>
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
