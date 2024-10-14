
import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signin from './components/signup_sign/Signin';
import Signup from './components/signup_sign/Signup';
import { Routes,Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';

function App() {
  return (
    <>
   <Navbaar />
   <Newnav />
   <Routes>
    <Route path="/" element={<Maincomp />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/cart/:id" element={<Cart />} />
    <Route path="/buynow" element={<Buynow />} />
   </Routes>
  
   <Footer />
 
    </>
  );
}

export default App;

 
