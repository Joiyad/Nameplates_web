import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import { Suspense, useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import CPP1 from './pages/CPP1';
import CPP3 from './pages/CPP3';
import SwitchYard from './pages/SwitchYard';
import TGHouse from './pages/TGHouse';
import DGHouse from './pages/DGHouse';
import ESP from './pages/ESP';
import Search from './pages/Search';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])

  return (
    <div className='App'>
      {loading ?
       <Loader />
       :
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={
          <Suspense fallback={<Loader />}>
            <HomePage/>
          </Suspense>}/>
          <Route path="/search" element={<Search />} />
          <Route path="/cpp1" element={<CPP1 />} />
          <Route path="/cpp3" element={<CPP3 />} />
          <Route path="/cpp1/switchyard" element={<SwitchYard />} />
          <Route path="/cpp1/tg-house" element={<TGHouse />} />
          <Route path="/cpp1/dg-house" element={<DGHouse />} />
          <Route path="/cpp1/esp" element={<ESP />} />
        </Routes>
        <Footer/>
      </Router>
      }
    </div>
  );
}

export default App;
