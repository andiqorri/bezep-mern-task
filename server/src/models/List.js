const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  finished: {
    type: Boolean,
    default: false,
  },
});

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
    },
    tasks: {
      type: [TaskSchema],
      default: [],
    },
  },
  { timestamps: true, collection: "lists" }
);

const ListModel = mongoose.model("List", schema);

module.exports = ListModel;
