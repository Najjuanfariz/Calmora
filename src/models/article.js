const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  articleUrl: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;