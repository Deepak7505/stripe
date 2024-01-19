const {secret_key,userPremiumPlanes} = require("./constants/index");
const stripe = require('stripe')(secret_key)
const express = require('express');
const router = express();
const cors = require("cors");

router.use(cors())
router.use(express.json()); 

router.post('/create-checkout-session', async (req, res) => {
 try {
  const product = await stripe.products.create({
    name: req.body.product, 
  });

  if(product){
      var price = await stripe.prices.create({
        product: `${product?.id}`,
        unit_amount: parseInt (req?.body?.amount) * 100,
        currency: 'USD', 
      }); 
  }
  if(price.id){
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ], 
      customer_email: 'test@gamil.com',
      mode: 'payment',
      return_url: `http://localhost:1234/sucess`,
      payment_method_types: ['card'],
      billing_address_collection:  'auto',
    });  
    console.log(session) 
    return res.send({clientSecret: session.client_secret});
  }
 } catch (error) {
  console.log(error) 
 }
});


router.get("/success",(req,res) => {
  res.send(
    "payment successfully"
  )
})


router.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  console.log(session)
  return res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
}); 

 


router.get('/user-premium',(req,res) => {
  res.json(userPremiumPlanes);
});




router.listen(4242,() =>console.log(`listning on port 4242`))