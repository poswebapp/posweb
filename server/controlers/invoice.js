import Invoice from "../models/invoice.js";
import mongoose from "mongoose";
import moment from "moment";

export const getInvoices = async (req, res) => {
  try {
    const today = moment().startOf("day");
    const result = await Invoice.find({
      date: {
        $gte: today.toDate(),
        $lte: moment(today).endOf("day").toDate(),
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const getDailyTotal = async (req, res) => {
  try {
    const today = moment().startOf("day");
    const list = await Invoice.find({
      date: {
        $gte: today.toDate(),
        $lte: moment(today).endOf("day").toDate(),
      },
    });
    // TOTAL OF INVOICE IN A DAY
    const total = list.map((a) => a.amount);
    const result = total.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const uploadInvoice = async (req, res) => {
  try {
    const { date, transactionNo, invoiceNo, quantity, amount } = req.body;
    const invoice = new Invoice({
      date,
      transactionNo,
      invoiceNo,
      quantity,
      amount,
    });
    const result = await invoice.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, transactionNo, invoiceNo, quantity, amount } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send({ message: `Not a valid id: ${id}` });

    const result = await Invoice.findByIdAndUpdate(
      id,
      {
        date,
        transactionNo,
        invoiceNo,
        quantity,
        amount,
      },
      { new: true }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    await Invoice.findByIdAndDelete(id);
    res.json({ mesagge: "Invoice deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
