import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Notfound from "./component/Notfound";
import Good from "./component/good/Good";
import Login from "./component/user/Login";
import Dashboard from "./component/dashboard/Dashboard";
import Outgoing from "./component/outgoing/Outgoing";
import Supplier from "./component/supplier/Supplier";
import Incoming from "./component/incoming/Incoming";
// import User from "./component/user/User";
import Manager from "./component/user/Manager";
import Logout from "./component/Logout";
import Report from "./component/report/Report";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Secure> <Dashboard /> </Secure> } />
          <Route path="/good" element={ <Secure> <Good /> </Secure> } />
          <Route path="/outgoing" element={ <Secure> <Outgoing /> </Secure> } />
          <Route path="/incoming" element={ <Secure> <Incoming /> </Secure> } />
          <Route path="/supplier" element={ <Secure> <Supplier /> </Secure> } />
          <Route path="/report" element={ <Secure> <Report /> </Secure> } />
    {/* todo */}
          {/* <Route path="/profile" element={ <Secure> <User /> </Secure> } /> */}
          {/* <Route path="/password" element={ <Secure> <User /> </Secure> } /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/Secure" element={<Manager />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
export function Secure({ children }) {
  if (localStorage.getItem("profile") || localStorage.getItem("Secure")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

// export function Admin({ children }) {
//   if (localStorage.getItem("admin")) {
//     return children;
//   } else {
//     return <Navigate to="/Secure" />;
//   }
// }
