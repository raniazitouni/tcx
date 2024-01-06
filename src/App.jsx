import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/signup';
import Addpatient from './pages/Addpatient';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Listpatient from './pages/Listpatient'


function App() {
  return (
    <Router>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Addpatient" element={<Addpatient/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Listpatient" element={<Listpatient/>} />

          
          
          
        </Routes>
        
    </Router>
  );
}

export default App;
