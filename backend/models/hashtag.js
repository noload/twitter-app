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
const Hashtag = mongoose.model("Hashtag", hashTagSchema);

module.exports = Hashtag;
