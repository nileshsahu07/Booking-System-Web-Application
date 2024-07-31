import { Route, Routes} from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard/Dashboard"
import PrivateRoute from "./components/PrivateRoute"
import Homepage from "./components/Homepage"
import {Toaster} from "sonner"
import Services from "./components/Sevices"
import ContactUs from "./components/ContactUs"
import DashServices from "./components/Dashboard/DashServices"
import Users from "./components/Dashboard/Users"
function App() {



  return (
    <>
      <Toaster richColors/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route element={<PrivateRoute allowedRole={["admin"]}/>}>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="dashServices" element={<DashServices/>}></Route>
            <Route path='users' element={<Users/>}/>
          </Route>
        </Route>

        <Route element={<PrivateRoute allowedRole={["user"]}/>}>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
