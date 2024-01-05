import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import  {Addpatient }  from './pages/Addpatient';

function App() {
  return (
    <Router>
       
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Addpatient" element={<Addpatient/>} />
        </Routes>
        
    </Router>
  );
}

export default App;
