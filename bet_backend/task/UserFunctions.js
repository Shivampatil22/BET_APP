const jwt = require("jsonwebtoken");
const bycrpt = require("bcrypt");
const jwt_key = "bets";
const User=require("../model/userModel");


const Signup = async (req, resp) => {
    try {
        const {  password } = req.body;
        let user = new User(req.body);
        const salt = await bycrpt.genSalt(10);
        const hashedpass = await bycrpt.hash(password, salt);
        user.password=hashedpass;
        let result = await user.save()
        jwt.sign({ user }, jwt_key, (err, token) => {
            if (err) {
                resp.send("something went wrong")
            }
            resp.send({ user, auth: token });
        })
    }
    catch (e) {
        resp.send(e);
    }
}

const Login = async (req, resp) => {
    const {phone,password}=req.body
    if (phone&&password) {
      

        let user = await User.findOne({phone});
        if (user) {
            const PasswordIsCorrect=await bycrpt.compare(password,user.password)
            if(PasswordIsCorrect){
                jwt.sign({ id: user._id }, jwt_key, (err, token) => {
                    if (err) {
                        resp.send("something went wrong")
                    }
                    resp.send({ user, auth: token });
                })
            }
            else{
                resp.send("Incorrect password")
            }


        }
        else {
            resp.send(false);
        }
    }
    
    else {
        resp.send(false);
    }

}

module.exports={Signup,Login};