import User from "../models/user.js";


//for login
export const login = async (req, res) => {
    try {

        const {userId, password} = req.body;
        const user = await User.findOne({userId, password});
        if(user) {
            res.status(200).send(user);
        } else {
            res.json({
                message: "Login Fail",
                user,
            });
        }

    } catch(error) {
        console.log(error);
    }
}

//for register
export const register = async (req, res) => {

    try {

        const newUser = new User({...req.body, verified: true});
        await newUser.save();
        res.status(200).send("New User Added Successfully!");

    } catch(error) {
        console.log(error);
    }

}
