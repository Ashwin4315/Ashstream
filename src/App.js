import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Signin from './components/Signin';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/Search' element={<Search />}/>
      <Route path='/Signin' element={<Signin />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Detail/:id' element={<Detail />}/>
      
    
    </Routes>
    </div>
  );
}

export default App;
