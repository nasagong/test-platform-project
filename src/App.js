import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Test from './pages/Test'
import Result from './pages/Result';
import Loading from './pages/Loading';
import Error from './pages/Error';

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/result" element={<Result/>} />
      <Route path="/loading" element={<Loading/>} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;