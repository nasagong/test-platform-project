import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Test from './pages/Test'
import Result from './pages/Result';
import Loading from './pages/Loading';

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/result" element={<Result/>} />
      <Route path="/loading" element={<Loading/>} />
    </Routes>
  );
}

export default App;