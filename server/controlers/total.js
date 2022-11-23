import Good from "../models/good.js";
import Supplier from "../models/supplier.js";
import Outgoing from "../models/outgoing.js";
import Incoming from "../models/incoming.js";

export const getTotals = async (req, res) => {
  try {
    const good = await Good.countDocuments();
    const supplier = await Supplier.countDocuments();
    const incoming = await Incoming.countDocuments();
    const outgoing = await Outgoing.countDocuments();

    // STOCK
    const goodList = await Good.find();
    const stockList = goodList.map((a) => a.stock);
    const stock = stockList.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    
    const outgoingList = await Outgoing.find();
    const earningList = outgoingList.map((a) => a.total);
    const earning = earningList.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    res.status(200).json({
      result: {
        good,
        supplier,
        incoming,
        outgoing,
        stock,
        earning,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
//TODO: sa month i base ang pag group ng total  hindi sa start at end ng month
