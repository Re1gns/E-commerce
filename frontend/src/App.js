import {Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Categories from './components/categories';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
