import Incoming from "../models/incoming.js";

// getgood
export const getIncomings = async (req, res) => {
  try {
    const incoming = await Incoming.find();
    res.json(incoming);
  } catch (error) {
    console.log(error);
  }
};

export const getOwnIncomings = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Incoming.find({user: id});
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const uploadIncoming = async (req, res) => {
  try {
    const { name, number, quantity, date, price, supplier, user } = req.body;

    const incoming = new Incoming({
      name,
      number,
      quantity,
      date,
      price,
      supplier,
      user,
    });
    const result = await incoming.save()
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateIncoming = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, number, quantity, date, price, supplier, user } = req.body;

    const result = await Incoming.findByIdAndUpdate(id, {
      name,
      number,
      quantity,
      date,
      price,
      supplier,
      user,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteIncoming = async (req, res) => {
  try {
    const { id } = req.params;
    await Incoming.findByIdAndDelete(id);
    res.json({ mesagge: "Incoming deleted" });
  } catch (error) {
    console.log(error);
  }
};
