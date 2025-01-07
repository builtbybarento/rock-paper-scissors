const mongoose = require('mongoose')

const ScoreSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    win: {
      type: Number,
      default: 0,
    },
    lose: {
      type: Number,
      default: 0,
    },
    tie: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true
  }
)

const User = mongoose.model('User', ScoreSchema)

module.exports = User
