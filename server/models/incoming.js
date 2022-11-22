import mongoose from "mongoose";

const incomingSchema = mongoose.Schema({
  date: { type: Date, require: true },
  supplier: { type: String, require: true },
  name: { type: String, require: true },
  quantity: { type: Number, require: true },
  // price: { type: Number, require: true },
});

var Incoming = mongoose.model("Incoming", incomingSchema);
export default Incoming;
