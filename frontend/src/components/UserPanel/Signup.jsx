import { Link,useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import {useDispatch} from "react-redux"
import {SignUp} from "../../redux/slices/SignupSlice"

// import "./Login.css"
// import {FaUser, FaLock,} from "react-icons/fa"
// import { MdEmail } from "react-icons/md";
// // import { useState } from "react";
// function Signup() {

  

//     return ( 
//         <>
//             <div className="main_div">
//             <div className="wrapper">
//                 <form >  {/* form me onsubmit fir usme handleForm */}
//                     <h1>Create New Account</h1>
//                     <div className="input-box">
//                             <input type="text" placeholder="Username"
//                                 // value={userName}
//                                 // onChange={(e)=>{setuserName(e.target.value)}} 
//                             />
//                             <FaUser className="icon"/>
//                         </div>
//                         <div className="input-box">
//                             <input type="email" placeholder="Email"
//                                 // value={userEmail}
//                                 // onChange={(e)=>{setuserEmail(e.target.value)}} 
//                             />
//                             <MdEmail className="icon"/>
//                         </div>
//                         <div className="input-box">
//                             <input type="password" placeholder="Password"
//                                 // value={userPass}
//                                 // onChange={(e)=>{setuserPass(e.target.value)}} 
//                             />
//                             <FaLock className="icon"/>
//                         </div>
//                             <button type="submit">Ragister</button>
//                             <div className="ragister-link">
//                             <p>Already hava an account.<Link to={"/login"}>Login</Link></p>
//                         </div>
//                 </form>
//             </div>
//             </div>
            
//         </>
//      );
// }

// export default Signup;


export default function Example() {

  const { handleSubmit, register} = useForm();
  
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const onSubmit = async(data)=>{

    if(data){
      await dispatch(SignUp(data))
      navigate("/login")
    }else{
      navigate("/signup")
    }

  }

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  UserName
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    {...register("name")}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    {...register("email")}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    {...register("password")}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to={"/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  