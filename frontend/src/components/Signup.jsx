import { Link } from "react-router-dom";
import "./Login.css"
import {FaUser, FaLock,} from "react-icons/fa"
import { MdEmail } from "react-icons/md";
// import { useState } from "react";
function Signup() {

    // const [userName,setuserName] = useState("")
    // const [userEmail,setuserEmail] = useState("")
    // const [userPass,setuserPass] = useState("")


    // function handleForm(e){
    //     e.preventDefault()
    //     const regData = {userName,userEmail,userPass}

    //     fetch("/api/signup",{
    //         method:"POST",
    //         headers:{"Content-Type":"Application/json"},
    //         body:JSON.stringify(regData)
    //     })
    // }

    return ( 
        <>
            <div className="main_div">
            <div className="wrapper">
                <form >  {/* form me onsubmit fir usme handleForm */}
                    <h1>Create New Account</h1>
                    <div className="input-box">
                            <input type="text" placeholder="Username"
                                // value={userName}
                                // onChange={(e)=>{setuserName(e.target.value)}} 
                            />
                            <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email"
                                // value={userEmail}
                                // onChange={(e)=>{setuserEmail(e.target.value)}} 
                            />
                            <MdEmail className="icon"/>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password"
                                // value={userPass}
                                // onChange={(e)=>{setuserPass(e.target.value)}} 
                            />
                            <FaLock className="icon"/>
                        </div>
                            <button type="submit">Ragister</button>
                            <div className="ragister-link">
                            <p>Already hava an account.<Link to={"/login"}>Login</Link></p>
                        </div>
                </form>
            </div>
            </div>
            
        </>
     );
}

export default Signup;