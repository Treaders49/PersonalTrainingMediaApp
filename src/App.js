
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Menu from './components/menu';
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/menu/:username" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
