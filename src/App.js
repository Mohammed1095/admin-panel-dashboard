import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Home/Home.jsx';
import UserList from './pages/UserList/UserList.jsx';
import User from './pages/User/User.jsx';

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
