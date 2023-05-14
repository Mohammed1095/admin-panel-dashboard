import './App.css';
import Header from './components/Header/header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <div>
      <Header />
      <div className="layout-container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
