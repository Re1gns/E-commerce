import {Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/category/:category_slug/:category_id' element={<Products />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
