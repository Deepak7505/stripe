import React from 'react'
import Header from './Header'
import PremiumChooserWelcome from './WelcomeHeader'
import PaymentComponent from './PaymentComponent'


const Home = () => {
  return ( 
    <div>
        <Header />
        <PremiumChooserWelcome />
        <PaymentComponent />
    </div>
  )
}

export default Home 