const mongoose = require('mongoose');

// Single-document store for all dynamic site content
const siteContentSchema = new mongoose.Schema({
  gallery: [
    {
      id: Number,
      category: String,
      title: String,
      src: String,
      featured: { type: Boolean, default: false },
      description: String,
    },
  ],
  events: [
    {
      id: Number,
      title: String,
      date: String,
      image: String,
      description: String,
    },
  ],
  highlights: [
    {
      id: Number,
      title: String,
      date: String,
      category: String,
      image: String,
      description: String,
    },
  ],
  videos: [
    {
      id: Number,
      src: String,
      title: String,
    },
  ],
  faculty: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  principal: {
    name: String,
    title: String,
    introQuote: String,
    message: String,
    closingQuote: String,
    photo: String,
    signature: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('SiteContent', siteContentSchema);
