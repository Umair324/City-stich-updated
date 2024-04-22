import { 
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';
import {
  LoginPage,
  RegisterPage,
  Error404Page,
  HomePage
} from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="*" Component={Error404Page} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
