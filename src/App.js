import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Test from './pages/Test'
import Loading from './pages/Loading';
import Error from './pages/Error';
import Welsh from './pages/results/Welsh';
import Poodle from './pages/results/Poodle';
import Maltese from './pages/results/Maltese';
import Pomeranian from './pages/results/Pomeranian';
import Bichon from './pages/results/Bichon';
import Yorkie from './pages/results/Yorkie';
import Dachshund from './pages/results/Dacshund';
import Happy from './pages/results/Happy';

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/loading" element={<Loading/>} />
      <Route path="/error" element={<Error />} />
      <Route path="/welsh" element={<Welsh />} />
      <Route path="/poodle" element={<Poodle />} />
      <Route path="/maltese" element={<Maltese />} />
      <Route path="/pomeranian" element={<Pomeranian />} />
      <Route path="/bichon" element={<Bichon />} />
      <Route path="/yorkie" element={<Yorkie />} />
      <Route path="/dacshund" element={<Dachshund />} />
      <Route path="/happy" element={<Happy />} />      
    </Routes>
  );
}

export default App;