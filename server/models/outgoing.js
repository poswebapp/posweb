import mongoose from "mongoose";

const outgoingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  outDate: { type: Date, require: true },
  customer: { type: String, require: true },
  discount: { type: Number, require: true },
  subtotal: { type: Number, require: true },
  total: { type: Number, require: true },
  amount: { type: Number, require: true },
});

var Outgoing = mongoose.model("Good", outgoingSchema);
export default Outgoing;
