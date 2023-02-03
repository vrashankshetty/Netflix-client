import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Watch from './pages/watch/Watch';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const user=true;
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={user?<Home type="movie"/>: <Navigate to="/register"/>}/>
      <Route path="/login" element={!user?<Login/>:<Navigate to="/"/>} />
      <Route path="/register" element={!user?<Register/>:<Navigate to="/"/>}/>
      {user &&(
        <>
        <Route path="/movie" element={<Home type="movie"/>} />
        <Route path="/Series" element={<Home type="series"/>} />
        <Route path="/watch" element={<Watch/>} />
        </>
      )}
      

    </Routes>
  </BrowserRouter>
     
  ) 
}

export default App;
