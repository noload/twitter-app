const TweetRepository = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); //this reges extract hashtags
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    //create hashtag and add
    return tweet;
  }
}

module.exports = TweetService;

/**
 * This is my First tweet Excited to see further
 *1:41:18
 */
