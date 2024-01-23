const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const userModel = require('../model/loginModel')


const authSchema = new mongoose.Schema({
    userId: { type: String },
    accessToken: { type: String },
    refreshToken: { type: String },
});

const authModel = mongoose.model('Auth', authSchema);



const loginService = async (userData,res) => {
        
     console.log('loggin this part',userData)    
    const userInputType = identifyInputType(userData);
    
    const count = await userModel.countDocuments({});
    console.log(count);
    if (userInputType == "email") {
        if (!validateEmail(userData.email)) {
            res.status(500).json('invalid email format');      
            return { success: false, message: "Invalid email format" };
        }
    } else {
        if (!validatePhoneNumber(userData.mobile)) {
            res.status(500).json('Invalid phone number format');     
            return { success: false, message: "Invalid phone number format" };
        }
    }

    let user;

    if (userData.email) {
        user = await userModel.findOne({ email: userData.email });
    } else {
        user = await userModel.findOne({ mobile: userData.mobile });
    }
    console.log(user);
    if (!user) {
        if (userData.password !== "") {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
            const newUser = new userModel({
                ...userData,
                userId: count + 1,
                password: hashedPassword,
            }); 

            const savedUser = await newUser.save();

            const { accessToken, refreshToken } = generateToken(savedUser.userId);

            const authData = new authModel({
                userId: savedUser.userId,
                accessToken,
                refreshToken,
            });

            await authData.save();
            const sucess = 
                {
                    success: true,
                    message: 'Login successful',
                    accessToken, 
                    refreshToken,
                    userId: savedUser.userId,
                };
            
            res.status(200).json(sucess);      
            return sucess  
        } else {
            res.json('unsuccessfull creation');
            
            return { success: false, message: "Password can not be empty" };
        }
    } else {
        const passwordMatch = await bcrypt.compare(userData.password, user.password);

        console.log(passwordMatch,'passwordMatch',userData.password,user.password);

        if (!passwordMatch) {
            return { success: false, message: 'Invalid Password' };
        }


        let authData = await authModel.findOne({ userId: user.userId });


        if (!authData) {
            const { accessToken, refreshToken } = generateToken(user.userId);
            authData = new authModel({
                userId: user.userId,
                accessToken,
                refreshToken,
            });
        } else {

            const { accessToken, refreshToken } = generateToken(user.userId);
            authData.accessToken = accessToken;
            authData.refreshToken = refreshToken;
        }

        await authData.save();
        const successmsg = { 
            success: true,
            message: 'Login successful',
            accessToken: authData.accessToken,
            refreshToken: authData.refreshToken,
            userId: user.userId,
        };
        res.status(200).json(successmsg);
        return successmsg ;
    }
};




const generateToken = (userId) => {
    const secretKey ="KEY"
    const refreshTokenSecret = "KEY";

    const accessToken = jwt.sign({ userId }, secretKey, {
        expiresIn: '1d',
    });

    const refreshToken = jwt.sign({ userId }, refreshTokenSecret, {
        expiresIn: '30d',
    });

    return { accessToken, refreshToken };
};




const identifyInputType = (userData) => {
    if (userData.email) {
        return 'email';
    } else if (userData.mobile) {
        return 'phoneNumber';
    } else {
        return 'Phone Number Or Email Is Required';
    }
}


const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
;
}

const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^\+(\d*)$/;
    return phonePattern.test(phoneNumber);
}


module.exports = {
   loginService 
}