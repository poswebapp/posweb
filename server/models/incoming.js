import mongoose from "mongoose";

const incomingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  name: { type: String, require: true },
  quantity: { type: Number, require: true },
  date: { type: Date, require: true },
  price: { type: Number, require: true },
  supplier: { type: String, require: true },
  user: { type: String, require: true },
});

var Incoming = mongoose.model("Good", incomingSchema);
export default Incoming;
