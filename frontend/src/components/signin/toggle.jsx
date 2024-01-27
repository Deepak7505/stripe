import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

const ToggleforGst = () => {
  const [isToggleActive, setToggleActive] = useState(false);

  const handleToggleClick = () => {
    setToggleActive(!isToggleActive);
  };

  return (
    <div>
         <div className="flex justify-end">
       
       <p className="text-xl mt-2 text-gray-500">No</p>
       <FontAwesomeIcon
         icon={isToggleActive ? faToggleOn : faToggleOff}
         className="mt-2 cursor-pointer "
         size='2x'
         onClick={handleToggleClick}
       />
       </div>
      
        {isToggleActive && (
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label htmlFor="GSTIN" className="block  tracking-wide text-gray-700 text-lg mb-2" >
      Enter GSTIN
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>

  </div>
        )}
       
    </div>
   

   
  );
  
};

export default ToggleforGst;
