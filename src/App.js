import './App.css';
import Home from "./Pages/Home";
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import { Route, Routes } from 'react-router-dom';
import UnknownPath from './Pages/UnknownPath';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path='*' element={<UnknownPath/>}/>
      </Routes>
    </div>
  );
}

export default App;
