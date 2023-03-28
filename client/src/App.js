//import logo from './logo.svg';
import './App.css';
//import Buttontog from './componets/buttontog';
//import FetchByInput from './componets/FetchByInput';
//import ParentCom from './componets/memocomponents/ParentCom';
//import UseReduceFunc from './componets/UseReduceFunc';
//import Fetchdata from './componets/fetchdata';
import LoginFrom from './componets/LoginForm'
import RegisterForm from './componets/registerForm'
import NavL from './componets/NavL';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
   <>
      <NavL></NavL>
   <Routes>
     <Route path="/" element={<LoginFrom/>}></Route>
     <Route path="/register" element={<RegisterForm/>}></Route>
   </Routes>
   
   </>
  );
}

export default App;