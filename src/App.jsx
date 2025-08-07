import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Dashboard from './components/Dashboard';
import Create from './components/dashboard/Create';
import View from './components/dashboard/View';
import { Toaster } from 'react-hot-toast';
import Content from './components/dashboard/Content';
import Share from './components/pages/Share';

function App() {
  return (
    <>
      <Toaster />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='' element={<Create />} />
            <Route path='content/:id' element={<Content />} />
          </Route>

          <Route path='/share/:id' element={<Share/>}/>
        </Routes>
    </>
  );
}

export default App;
