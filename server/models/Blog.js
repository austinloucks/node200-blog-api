const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  published: { type: Date, default: Date.now, required: true },
  feature: { type: Boolean, default: false, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Blog", BlogSchema);
