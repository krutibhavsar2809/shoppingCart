import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<div>Product</div>} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
