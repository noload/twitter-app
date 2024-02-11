const mongoose = require("mongoose");

const hashTagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Hashtags = mongoose.model("Hashtags", hashTagSchema);

module.exports = Hashtags;
