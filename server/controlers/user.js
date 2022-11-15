import User from "../models/user.js";

//for login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username,password)
    const user = await User.findOne({ username });
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
export const register = async (req, res) => {
  try {
    const newUser = new User({ ...req.body, verified: true });
    await newUser.save();
    res.status(200).send("New User Added Successfully!");
  } catch (error) {
    console.log(error);
  }
};
