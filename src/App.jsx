import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Dashboard from './components/Dashboard';
import Create from './components/dashboard/Create';
import View from './components/dashboard/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<Create/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
