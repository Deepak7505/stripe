const {secret_key,userPremiumPlanes} = require("./constants/index");
const stripe = require('stripe')(secret_key)
const express = require('express');
const router = express();
const cors = require("cors");
const { loginService } = require('./controller/loginController');
const userModel = require("./model/loginModel");
const connectDB = require("./model/connnectDB");
router.use(cors())
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


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


router.post('/login-user', async ( req , res ) => {
  try {
    const userData = await req.body;
    loginService(userData,res)
    // console.log(userData);

    // const newUser = new User({
    //   email: 'example@email.com',
    //   phone: '+1234567890',
    //   password:'@1234'
    //   // Add other fields as needed
    // });

    // newUser.save()
    // .then(savedUser => {
    //   console.log('User saved successfully:', savedUser);
    // })
    // .catch(error => {
    //   console.error('Error saving user:', error.message);
    // });

  } catch (error) {
    console.log(error.message)
  }
})





router.listen(4242,() => {console.log(`listning on port 4242`); connectDB();})