import Good from '../models/good.js'
import Supplier from '../models/supplier.js'
import Outgoing from '../models/outgoing.js'
import Incoming from '../models/incoming.js'

export const getTotals = async(req,res)=>{
  try {
    const good = await Good.countDocuments()
    const supplier = await Supplier.countDocuments()
    const incoming = await Incoming.countDocuments()
    const outgoing = await Outgoing.countDocuments()
    res.status(200).json({result: {
      good,
      supplier,
      incoming,
      outgoing
    }})
  } catch (err) {
    console.log(err)
  }
}
//TODO: sa month i base ang pag group ng total  hindi sa start at end ng month
