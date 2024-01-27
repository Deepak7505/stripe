import { Form } from "react-router-dom"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


   const Login=()=>{
  const navigate = useNavigate();
  


  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const handleNavigation = () => {

    navigate('/companyregistartion');
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:4242/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
       
      });
      const responseData = await response.json()
      console.log(responseData ,"logindata")
      if (responseData.message =="Login successful") {
        localStorage.setItem("accessToken",responseData.accessToken)
        localStorage.setItem("refreshToken",responseData.refreshToken)
        localStorage.setItem("userId",responseData.userId)
        
        console.log("Login successful");
        handleNavigation()
        

      } else {
       
        console.error("Login failed");
      }
    } catch (error) {
      
      console.error("An error occurred:", error);
    }
  };





  return(
    <div className="flex justify-between">

      <div className="w-full  md:block hidden mt-10">
        <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-23872.jpg?w=826&t=st=1705996390~exp=1705996990~hmac=b96184760c0e128047f0d67a81194bb770f0bbd7a4ade29f1ae7c302fc6adecc" alt=""/>
      </div>
  

 
     <div className="w-full mt-40 h-full ">
      <div className="">

         <form className="mx-auto max-w-xl  shadow-lg border-blue p-12  h-full"  onSubmit={handleSubmit} >
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-2xl font-bold mb-2">
          Email/Phone
        </label>
        <input
          type="email"
          id="email"
          name="email"
          
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your email address/Phone no"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-2xl font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your password"
          required
          value={formData.password}
          onChange={handleChange}
          
        />
      </div>

      <div className="flex justify-start">
        <input type="checkbox" className="w-4 h-4 mt-1"/>
        <div type="text" className="ml-2 mb-2">
          <p >I agree to the Term of Service and Privacy Policy</p>
        </div>
      </div>
      <button
        type="submit"
       
        className="bg-orange-500 text-white w-full mt-2 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue"
      >
        Login
      </button>

      <button type="submit"  className="bg-white-200 w-full py-2 rounded-md focus:outline-none" >
        <div className="flex justify-center"> 
        <img width="30" height="30" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
        
       <p  className="text-xl font-semibold ml-2"> SignIn with Google</p></div>
    
      </button>
    </form>
      </div>
  
      
    
     </div>
       
    </div>
   
  )

}

export default Login








