import React,{useState,useEffect} from 'react'
import CheckoutForm from './Checkout'
import Shimmer from './Shimmer';

const PaymentSection = () => {

    const [objOf_data, setObjOf_data] = useState({
        id:null,
        cardData:undefined
    });
    const [ amount, setAmount ] = useState(19.99);
    const [ product, setProduct ] = useState('Basic Plan');
    const [ payNow, setPayNow ] = useState(false);
    const [ premiumPlanData, setPremiumPlanData ] = useState(undefined);
  
    function idHandler (idData) {
        let filterPlan;
        setPayNow(false)
        if(idData) {
        filterPlan = premiumPlanData?.plans?.filter((val,ind) => {
              return val.id === idData
        } )}
        setObjOf_data((prevState)=>({...prevState, cardData:filterPlan})) 
        setTimeout(()=> {
            setPayNow(true)
        },1000)
    }

    function scroollDowntoPayment () {
    if((window.innerWidth < 768))
        setTimeout(()=> {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
                })
        },1000)
    }
  
    const handleSubmit = (e) => {
      setPayNow(true)
    }
   

    useEffect(() => {
        
        fetch("http://localhost:4242/user-premium", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setPremiumPlanData(data);
            console.log(premiumPlanData, "dataginven again");
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        })
        handleSubmit()

    },[])


return (premiumPlanData === undefined)?<Shimmer />:(
<div className='grid sm:m-8'>
  <div className={`mx-auto  grid  gap-4 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full md:content-center  xl:px-6`}>
        
        <div className="flex flex-col w-[100%]   mt-6 sm:w-auto md:p-4 sm:px-8  max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100  xl:p-8 dark:bg-gray-800 dark:text-white h-max shadow-2xl ">

        <div className='flex flex-row flex-wrap justify-center w-full lg::flex-col lg::items-center'>
            <button
                type="button"
                onClick={(e) => {idHandler(e.target.id); scroollDowntoPayment() ;setAmount(premiumPlanData?.plans[0]?.price); setProduct(premiumPlanData?.plans[0]?.name)}}
                className='font-bold border text-black m-2 h-24 w-32 p-2 rounded-md lg::h-12 lg::w-16 sm::font-normal'
                id='basic'
            >
                Basic Plan {premiumPlanData?.plans[0]?.price} $
            </button>

            <button
                type="button"
                onClick={(e) => {idHandler(e.target.id); scroollDowntoPayment(); setAmount(premiumPlanData?.plans[1]?.price); setProduct(premiumPlanData?.plans[1]?.name)}}
                className='font-bold border text-black m-2 h-24 w-32 p-2 rounded-md'
                id='standard'
            >
                Standard Plan {premiumPlanData?.plans[1]?.price} $
            </button>

            <button
                type="button"
                onClick={(e) => {idHandler(e.target.id); scroollDowntoPayment(); setAmount(premiumPlanData?.plans[2]?.price); setProduct(premiumPlanData?.plans[2]?.name)}}
                className='font-bold border text-black m-2 h-24 w-32 p-2 rounded-md'
                id='premium'
            >
                Premium Plan {premiumPlanData?.plans[2]?.price} $
            </button>
        </div>

              <h3 className="text-2xl font-semibold">{objOf_data.cardData !== undefined ? objOf_data.cardData[0]?.name:premiumPlanData?.plans[0]?.name}</h3>

              <p className={`font-light text-gray-500 sm:text-lg dark:text-gray-400 custom-transition ${(idHandler == true) ? 'fadeIn' : 'fadeOut'}`}>
                {(objOf_data.cardData !== undefined) ? objOf_data.cardData[0]?.description : premiumPlanData?.plans[0]?.description}</p>
             
              <div className="flex justify-center items-baseline my-5">
                  <span className="mr-2 text-5xl font-extrabold">${(objOf_data.cardData !== undefined)?objOf_data.cardData[0]?.price:premiumPlanData?.plans[0]?.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>{(objOf_data.cardData !== undefined)?objOf_data.cardData[0]?.features[0]:premiumPlanData?.plans[0]?.features[0]}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>{(objOf_data.cardData !== undefined)?objOf_data.cardData[0]?.features[1]:premiumPlanData?.plans[0]?.features[1]}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>{(objOf_data.cardData !== undefined)?objOf_data.cardData[0]?.features[2]:premiumPlanData?.plans[0]?.features[2]}</span>
                  </li>
                 
              </ul>
              <button onClick={handleSubmit} href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</button>
        </div>

        <div className='w-full sm:w-auto shadow-2xl h-52'>          
            <CheckoutForm data={{ amount, product }} payNow={payNow} />
        </div>
    </div>
       
  
</div>  
  )
}

export default PaymentSection



