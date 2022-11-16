import Good from "../models/good.js";

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
  try {
    const { id } = req.params;
    const { user, name, stock, price, type, unit, } = req.body;
    const result = await Good.findByIdAndUpdate(id, {
      user,
      name,
      stock,
      price,
      type,
      unit,
    });
    res.json(result);
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
