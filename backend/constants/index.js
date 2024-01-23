const url = 'mongodb+srv://rajputdeepak5389:qRR59JmDFT4BFh8t@cluster2.cpo016a.mongodb.net/test'

const secret_key = "sk_test_51OULNmSDtI8GpdfVLuedRHrwKUWXKfYIR6G9U9QgU68ImM74cjpQEZ0a8uwF5jNknTAFuSx3Lqt3YxdlJUbSoaKQ00ErzYMtoG";

const userPremiumPlanes = {

    "plans": [
  
      {
  
        "id": "basic",
  
        "name": "Basic Plan",
  
        "description": "Ideal for small businesses",
  
        "price": 19.99,
  
        "currency": "USD",
  
        "interval": "monthly",
  
        "features": [
  
          "Unlimited job postings",
  
          "Basic analytics",
  
          "Email support"
  
        ]
  
      },
  
      {
  
        "id": "standard",
  
        "name": "Standard Plan",
  
        "description": "Great for growing businesses",
  
        "price": 49.99,
  
        "currency": "USD",
  
        "interval": "monthly",
  
        "features": [
  
          "All Basic Plan features",
  
          "Advanced analytics",
  
          "Priority email support"
  
        ]
  
      },
  
      {
  
        "id": "premium",
  
        "name": "Premium Plan",
  
        "description": "For large enterprises",
  
        "price": 99.99,
  
        "currency": "USD",
  
        "interval": "monthly",
  
        "features": [
  
          "All Standard Plan features",
  
          "Dedicated account manager",
  
          "Phone support"
  
        ]
  
      }
  
      // Add more plans as needed
  
    ]
  
  };



module.exports = {
    url,
    secret_key,
    userPremiumPlanes
}