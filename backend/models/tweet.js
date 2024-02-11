const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
      max: [250, "Tweet connot be more than 250 chatecters"],
    },
    hashtags: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hashtags",
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
