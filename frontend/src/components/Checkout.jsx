import { EmbeddedCheckout, EmbeddedCheckoutProvider, } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { stripeKey } from '../constants/constant';
const stripePromise = loadStripe(stripeKey);
import { Stripe } from '@stripe/stripe-js';



const CheckoutForm = ({data, payNow}) => {
    const [clientSecret, setClientSecret] = useState('');

  

    useEffect(() => {
      if(payNow == true){
        fetch("http://localhost:4242/create-checkout-session", {
          method: "POST",
          body: JSON.stringify(data), 
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) =>{return res.json()})
          .then((data) => {
            setClientSecret(data.clientSecret);
          });
      }
    }, [payNow]);

    return (
      <div id="checkout" className='w-full h-max shadow-2xl'>
        {clientSecret ? (
          <>
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{clientSecret}}
              key={clientSecret}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </>
        )
        : 
        console.log('showing data')
        }
      </div>
    )
  }

export default CheckoutForm

