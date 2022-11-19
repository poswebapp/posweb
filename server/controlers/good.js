import Good from "../models/good.js";
import mongoose from "mongoose";

// getgood
export const getGoods = async (req, res) => {
  try {
    const good = await Good.find();
    res.json(good);
  } catch (error) {
    console.log(error);
  }
};

export const getOwnGoods = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Good.find({ user: id });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const uploadGood = async (req, res) => {
  try {
    const { user, name, stock, price, type, unit } = req.body;
    if (!mongoose.Types.ObjectId.isValid(user))
      return res.status(404).send({ message: `Not a valid User: ${user}` });
    const good = new Good({
      user,
      name,
      stock,
      price,
      type,
      unit,
    });
    const result = await good.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateGood = async (req, res) => {
  console.log("try update");
  try {
    const { id } = req.params;
    const { name, stock, price, type, unit } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send({ message: `Not a valid User: ${id}` });

    const result = await Good.findByIdAndUpdate(
      id,
      {
        name,
        stock,
        price,
        type,
        unit,
      },
      { new: true }
    );
    res.json(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteGood = async (req, res) => {
  try {
    const { id } = req.params;
    await Good.findByIdAndDelete(id);
    res.json({ mesagge: "Good deleted" });
  } catch (error) {
    console.log(error);
  }
};
