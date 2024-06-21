import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import {FaUser, FaLock, } from "react-icons/fa"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/slices/LoginSlice";
import {CSpinner} from "@coreui/react"


function Login() {

    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const {role,loading} = useSelector((state)=>state.login)

    useEffect(()=>{
        if(role==="admin"){
            Navigate("/dashboard")
        }

        if(role==="user"){
            Navigate("/")
        }
    },[role])

    const [formData,setformData] = useState({
        email:"",
        password:""
    })

    console.log(formData)
    const handleChange = (e)=>{
        const {name,value} = e.target

        setformData({
            ...formData ,
             [name] : value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(login(formData))
    }

    return ( 
        <>
            <div className="main_div">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                        
                        <div className="input-box">
                            <input type="email" name="email" placeholder="Email" 
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Password" 
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <FaLock className="icon"/>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox"/>remember</label>
                            <a href="#"> forgot password</a>
                        </div>
                            <button type="submit">{loading ? <CSpinner color="dark" /> : "Login"}</button>
                        <div className="ragister-link">
                            <p>do not have an account? <Link to={"/signup"}>Ragister</Link></p>
                        </div>
                </form>
            </div>
            </div>
           
        </>
     );
}

export default Login;