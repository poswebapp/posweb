import User from "../models/user.js";
import Token from "../models/token.js";
import {generateOTP, mailPassReset, mailTransport} from '../tool/mail.js'

//for login
export const login = async (req, res) => {
  try {
    const { username,email, password } = req.body;
    
    const user = await User.findOne({$or:[{email},{username}]});
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    if (user.password !== password) {
      res.status(401).json({ message: "Password Incorect" });
    }
    res.json(user)
  } catch (error) {
    console.log(error);
  }
};

//for register
export const resetPassword = async (req, res) => {
  try {
    const { username,email, password } = req.body;
    const user = await User.findOne({$or:[{email},{username}]});
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }
    if (user.password === password) {
      res.status(401).json({ message: "Password must not be the same as Old Password" });
    }
    const OTP = generateOTP();
    const token = new Token({
      owner: user._id,
      token: OTP,
    });
    await token.save()
    
    mailTransport({ OTP, user });
    await verificationToken.save();
    res.status(200).send({result:user});
  } catch (error) {
    console.log(error);
  }
};


export const resetPasswordOTP = async (req, res) => {
  try {
    const { otp, password } = req.body;
    const { id } = req.params;
    //check if the valid params
    if (!id || !otp.trim() || !password)
      return res.status(400).json({ message: "Invalid Request no parameters" });
    // check if tama yung id
    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({ message: "Invalid Accommodator" });
    }

    const user = await User.findById(id);
    // kung meron yung account
    if (!user){ return res.status(404).json({ message: "Account not Found" })};
    // kung verified na already
    const token = await VerificationToken.findOne({ owner: acc._id });
    if (!token) return res.status(404).json({ message: "Token not found" });
    const isMatch = await token.compareToken(otp);
    if (!isMatch) return res.status(500).json({ message: "OTP not match" });
    user.password = password;
    await Token.findOneAndDelete(token._id);
    await user.save();

    mailPassReset(user.email);
    res.status(200).json({ result: user});
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
