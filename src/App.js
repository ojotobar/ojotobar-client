import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './components/pages/public/Home';
import About from './components/pages/public/About';
import Portfolio from './components/pages/public/Portfolio';
import Contact from './components/pages/public/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
