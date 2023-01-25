import Expense from "../models/expense.js";
import mongoose from "mongoose";
import moment from "moment";

export const getExpenses = async (req, res) => {
  try {
    const today = moment().startOf("day");
    const result = await Expense.find({
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
    const list = await Expense.find({
      date: {
        $gte: today.toDate(),
        $lte: moment(today).endOf("day").toDate(),
      },
    });
    // TOTAL OF expense IN A DAY
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

export const uploadExpense = async (req, res) => {
  try {
    const { date, quantity, amount, time } = req.body;
    const expense = new Expense({
      date,
      time,
      // transactionNo,
      // expenseNo,
      quantity,
      amount,
    });
    const result = await expense.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, transactionNo, expenseNo, quantity, amount,time } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send({ message: `Not a valid id: ${id}` });

    const result = await Expense.findByIdAndUpdate(
      id,
      {
        date,
        time,
        transactionNo,
        expenseNo,
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

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.json({ mesagge: "Expense deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
