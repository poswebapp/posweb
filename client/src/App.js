import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Notfound from "./component/Notfound";
import Good from "./component/good/Good";
import Login from "./component/user/Login";
import Dashboard from "./component/dashboard/Dashboard";
import Outgoing from "./component/outgoing/Outgoing";
import Supplier from "./component/supplier/Supplier";
import Incoming from "./component/incoming/Incoming";
import Logout from "./component/Logout";
import Reset from "./component/user/Reset";
import OTP from "./component/user/OTP";
import Setting from "./component/setting/Setting";
import PatchContact from "./component/setting/PatchContact";
import PatchEmail from "./component/setting/PatchEmail";
import Invoice from "./component/invoice/Invoice";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Secure> <Dashboard /> </Secure> } />
          <Route path="/good" element={ <Secure> <Good /> </Secure> } />
          <Route path="/outgoing" element={ <Secure> <Outgoing /> </Secure> } />
          <Route path="/incoming" element={ <Secure> <Incoming /> </Secure> } />
          <Route path="/invoice" element={ <Secure> <Invoice /> </Secure> } />
          <Route path="/supplier" element={ <Secure> <Supplier /> </Secure> } />
          <Route path="/setting" element={ <Secure> <Setting /> </Secure> } />
          <Route path="/patchContact" element={ <Secure> <PatchContact /> </Secure> } />
          <Route path="/PatchEmail" element={ <Secure> <PatchEmail /> </Secure> } />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/reset" element={ <Reset/> } />
          <Route path="/otp" element={ <OTP/> } />
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

