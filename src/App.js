import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Component imports
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Login} />
        <Route path='/home' Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
