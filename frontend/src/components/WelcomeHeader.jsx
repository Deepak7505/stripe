import React from 'react';
import { primiumUserImages } from '../constants/constant';
const PremiumChooserWelcome = () => {
    const {thirdUser,secndUser,firstUser} = primiumUserImages;
  return (
    <div className="premium-chooser__welcome-header inline-block w-full bg-white pt-8 border-b border-gray-200 py-4" role="region">
      <h1 className="premium-chooser__welcome-headline text-gray-900 text-3xl font-bold flex justify-center">
        Achieve your goals faster with Premium.
      </h1>
    </div> 
  );
};

export default PremiumChooserWelcome;


