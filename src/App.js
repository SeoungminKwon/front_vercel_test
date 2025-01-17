import './App.css';
import Navibar from './component/Navibar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './page/SignUp';
import Login from './page/Login';
import MainPage from './page/MainPage';


function App() {

  

  return (
    <>
    <Navibar></Navibar>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/join' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
  
    </>
    

  );
}

export default App;
