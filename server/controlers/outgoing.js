import Outgoing from "../models/outgoing.js";

// getgood
export const getOutgoings = async (req, res) => {
  try {
    const outgoing = await Outgoing.find();
    res.json(outgoing);
  } catch (error) {
    console.log(error);
  }
};

export const getOwnOutgoings = async (req, res) => {
  try {
    const {id} = req.params
    const outgoing = await Outgoing.find({user:id});
    res.json(outgoing);
  } catch (error) {
    console.log(error);
  }
};

export const updateOutgoing = async (req, res) => {
  try {
    const { id } = req.params;
    const {  outDate, customer, discount, subtotal, total, amount } =
      req.body;
    const result = await Outgoing.findByIdAndUpdate(id, {
      outDate,
      customer,
      discount,
      subtotal,
      total,
      amount,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOutgoing = async (req, res) => {
  try {
    const { id } = req.params;
    await Outgoing.findByIdAndDelete(id);
    res.json({ mesagge: "Outgoing deleted" });
  } catch (error) {
    console.log(error);
  }
};
