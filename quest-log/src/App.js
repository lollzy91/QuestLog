import { Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Login/Register';
import { Main } from './Components/Main/Main';
import { NavBar } from './Components/Nav/NavBar';


function App() {
  return (
    <Container className={'App min-vh-100 min-vw-50 d-flex justify-content-center align-items-center'}>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Row>
    </Container>
  );
}

export default App;
