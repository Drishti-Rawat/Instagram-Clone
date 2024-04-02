import Forgotpass from "./pages/Forgotpass";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Message from "./pages/Message";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
    <section className="">
      <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/Home" element={<Home/>} />
         <Route path="/Message" element={<Message/>} />
         <Route path="/Signup" element={<Signup/>} />
         <Route path="/Forgotpass" element={<Forgotpass/>} />
         <Route path="/Profile" element={<Profile/>} />
      </Routes>
      {/* <Forgotpass/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </section>
    </BrowserRouter>
  );
}

export default App;
