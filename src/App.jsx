
// React Router DOM
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

// React Redux tools
import { useSelector } from 'react-redux';

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";

// Components
import Header from './components/Header';

const App = () => {
  const { user } = useSelector((state) => state.login);
  const Authentication = () => {
    return user ? <Outlet /> : <Navigate to='/' />;
  };  

return (
  <Router>
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Authentication/>}>
          <Route path='/home' element={<Home/>} />  
        </Route>
    </Routes>
    </div>
  </Router>
)
};

export default App;