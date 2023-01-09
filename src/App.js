import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Signin from './components/Signin';
import Detail from './components/Detail';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/Signin' element={<Signin />}/>
      <Route path='/Search' element={<Search />}/>
      <Route path='/Detail/:id' element={<Detail />}/>
      
    </Routes>
    </div>
  );
}

export default App;
