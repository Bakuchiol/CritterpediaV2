import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Description from './pages/Description/Description';
import Gallery from './pages/Gallery/Gallery';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/description' element={<Description />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
