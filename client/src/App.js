import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Notfound from "./component/Notfound";
import Good from "./component/good/Good";
import Login from "./component/user/Login";
import Dashboard from "./component/dashboard/Dashboard";
import Outgoing from "./component/good/Outgoing";
import Incoming from "./component/good/Incoming";
import User from "./component/user/User";
import Manager from "./component/user/Manager";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Secure> <Dashboard /> </Secure> } />
          <Route path="/good" element={ <Secure> <Good /> </Secure> } />
          <Route path="/outgoing" element={ <Secure> <Outgoing /> </Secure> } />
          <Route path="/incoming" element={ <Secure> <Incoming /> </Secure> } />
          <Route path="/user" element={ <Admin> <User /> </Admin> } />
    {/* todo */}
          <Route path="/profile" element={ <Admin> <User /> </Admin> } />
          <Route path="/password" element={ <Admin> <User /> </Admin> } />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Manager />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
export function Secure({ children }) {
  if (localStorage.getItem("profile") || localStorage.getItem("admin")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export function Admin({ children }) {
  if (localStorage.getItem("admin")) {
    return children;
  } else {
    return <Navigate to="/admin" />;
  }
}
