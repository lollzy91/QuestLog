import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Login/Register';
import { Main } from './Components/Main/Main';
import { NavBar } from './Components/Nav/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
