import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Dashboart from './components/Dashboart';
import Create from './components/dashboart/Create';
import View from './components/dashboart/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/dashboart' element={<Dashboart/>}>
          <Route path='create' element={<Create/>}/>
          <Route path='view' element={<View/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
