import mongoose from "mongoose";
const { Schema } = mongoose;

const urlSchema = new Schema({
  origin: {
    type: String,
    unique: true,
    required: true,
  },
  shortURL: {
    type: String,
    unique: true,
    required: true
  },
});

const Url = mongoose.model("url", urlSchema);

export default Url;