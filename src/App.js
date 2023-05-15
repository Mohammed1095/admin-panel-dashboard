import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Home/Home.jsx';
import UserList from './pages/UserList/UserList.jsx';
import User from './pages/User/User.jsx';
import NewUser from './pages/newUser/NewUser.jsx';
import ProductList from './pages/productList/ProductList.jsx';
import Product from './pages/product/Product.jsx';
import NewProduct from './pages/newProduct/NewProduct.jsx';

/*test */

function App() {
  return (
    <div>
      <Header />
      <div className="layout-container">
        <Sidebar />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
