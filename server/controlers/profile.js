import User from "../models/user.js";


export const patchEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const result = User.findByIdAndUpdate(
      id,
      {
        email,
      },
      { new: true }
    );
    return res.json(result);
  } catch (err) {
    console.log(err.message);
  }
};

export const patchContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { contact } = req.body;
    const result = User.findByIdAndUpdate(
      id,
      {
        contact,
      },
      { new: true }
    );
    return res.json(result);
  } catch (err) {
    console.log(err.message);
  }
};
