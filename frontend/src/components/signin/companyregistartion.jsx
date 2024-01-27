
// import ToggleforGst from "./toggle"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn ,faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


const CompanyRegistration=()=>{
  const navigate = useNavigate();
    const [isToggleActive, setToggleActive] = useState(false);
    const [organizationName, setOrganizationName] = useState('');
  const [error, setError] = useState('');

  const handleNavigation = () => {

    navigate('/download-excel');
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
      

    handleNavigation()



    if (organizationName.trim() === '') {
      console.log("error")
      setError('Please fill out this field.');
    } else {
      setError('');
     
    }
  };

    const handleToggleClick = () => {
        setToggleActive(!isToggleActive);
      };
return(
  <div className="bg-[#76A9FA]">
   

   <nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
         
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
     
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
           
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

       
        <div class="relative ml-3">
          <div className='flex justify-between'> 
            
              <p className='text-white'>Welcome </p>
              <button className='ml-2'>
              <FontAwesomeIcon icon={faPowerOff} className='text-white'/>
              </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  

</nav>

  <div className="flex justify-center p-5 ">
  <div className="max-w-2xl  max-h-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="text-2xl font-bold mb-4">Setup Your Organization</h2>
    <h3 className="text-xl mb-2 text-gray-400">Organization details</h3>
       <form className="w-full max-w-lg mt-2 " onSubmit={handleSubmit}>
       <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label htmlFor="Organization Name" className="block  tracking-wide text-gray-700 text-lg mb-2" >
        Organization Name
        <span class="text-red-600 font-bold text-xl">*</span>
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
       id="OrganizationName" 
       type="text"
       value={organizationName} 
       onChange={(e) => setOrganizationName(e.target.value)}
       placeholder=""
      
        
       />
    
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label htmlFor="Industry" className="block  tracking-wide text-gray-700 text-lg  mb-2">
        Industry
      </label>
      <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" required>
      <option></option>
          <option>Agriculture</option>
          <option>E-Commerce</option>
      </select>
      {/* <select classNameName="w-full rounded-lg"></select> */}
      {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder=""/> */}
 
    </div>
  </div>
 
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label htmlFor="Industry" className="block  tracking-wide text-gray-700 text-lg  mb-2">
        Platform
      <span class="text-red-600 font-bold text-xl">*</span>
      </label>
      <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" >
        <option></option>
          <option>Wo-Commerce</option>
          <option>Shopify</option>
      </select>
      {/* <select classNameName="w-full rounded-lg"></select> */}
      {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder=""/> */}
 
    </div>
  </div>

  <div className="flex  -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label htmlFor="Organization Location" className="block  tracking-wide text-gray-700 text-lg mb-2" >
        Organization Location
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>

    </div>
    <div className="w-full md:w-1/2 px-3">
      <label htmlFor="State/UnionTerritory" className="block  tracking-wide text-gray-700 text-lg mb-2">
        State/UnionTerritory
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>

  {/* <button className="w-5 h-5 rounded-full bg-[#2E43FE] mb-2  text-white">

<font-awesome-icon :icon="['fas', 'plus']" className="cursor-pointer  text-white" />
</button> */}



  <div className="flex -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label htmlFor="City" className="block  tracking-wide text-gray-700 text-lg mb-2" >
        City
      </label>
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Almora</option>
          <option>Nainital</option>
          
        </select>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label htmlFor="State" className="block  tracking-wide text-gray-700 text-lg mb-2" >
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Uttarakhand</option>
          <option>Himanchal</option>
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label htmlFor="Zip" className="block  tracking-wide text-gray-700 text-lg mb-2" >
        Zip
      </label>
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>263624</option>
          <option>263601</option>
          
        </select>
    </div>

    
  </div>

 <p className="text-gray-400 text-xl mb-2">
  Regional Settings
 </p>

  <div className="flex  -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label htmlFor="Currency" className="block  tracking-wide text-gray-700 text-lg mb-2" >
        Currency
      </label>
      <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white">
          <option>INR-Indian Rupee</option>
          <option>Dollar</option>
      </select>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label  htmlFor="Language" className="block  tracking-wide text-gray-700 text-lg mb-2" >
       Language
      </label>
      <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white">
          <option>English</option>
          <option>Hindi</option>
      </select>
    </div>
  </div>
 
  <div className="flex  -mx-3 mb-6">
    <div className="w-full px-3">
      <label htmlFor="TimeZone" className="block tracking-wide text-gray-700 text-lg  mb-2" >
        TimeZone
      </label>
      <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white">
          <option>(GMT 5:30) India Standard Time(Asia/Calcutta)</option>
          <option>E-Commerce</option>
      </select>
      {/* <select classNameName="w-full rounded-lg"></select> */}
      {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder=""/> */}
 
    </div>
  </div>
  <div className="flex justify-between">
    <div>
    <p className="text-lg text-gray-500">Is this buisness registered for GST ?</p>
    <div className='mt-3'>
    {isToggleActive && (
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label htmlFor="GSTIN" className="block  tracking-wide text-gray-700 text-lg mb-2" >
      Enter GSTIN
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>

  </div>
        )}
    </div>
   
    </div>
   
      
    <div>
         <div className="flex justify-end">
          <div>

         
      {isToggleActive ? <p className="text-xl  text-gray-500">Yes</p> : <p className="text-xl  text-gray-500">No</p>}
        
    
          </div>
       
       <FontAwesomeIcon
         icon={isToggleActive ? faToggleOn : faToggleOff}
         className="ml-2 cursor-pointer "
         size='2x'
         onClick={handleToggleClick}
       />
       </div>
      
       
       
    </div>
  </div>

  <div className='mt-3'>

  <button type="submit"
                  class="flex items-center justify-center text-white rounded-lg bg-[#42b8fd] w-full px-5 py-2.5">
                  Get Started
                </button>
  </div>
</form> 
  </div>
  </div>
  </div>
 
)


}

export default CompanyRegistration