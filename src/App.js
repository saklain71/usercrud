//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Shared/Login';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';
import Signup from './Pages/Shared/Signup';
import Products from './Pages/Products/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddItems from './Pages/Home/AddItems';
import Update from './Pages/Products/Update';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="signUp" element={<Signup></Signup>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="additem" element={<AddItems></AddItems>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
