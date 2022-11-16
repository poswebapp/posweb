import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Notfound from "./component/Notfound";
import Good from "./component/good/Good";
import Login from "./component/Login";
import Dashboard from "./component/dashboard/Dashboard";
import Outgoing from "./component/good/Outgoing";
import Incoming from "./component/good/Incoming";

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
          <Route path="/login" element={<Login />} />
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
    return <Navigate to="/login" />;
  }
}