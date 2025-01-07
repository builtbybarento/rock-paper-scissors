const mongoose = require('mongoose')

const ScoreSchema = mongoose.Schema(
  {
    userWin: {
      type: Number,
      // required: [true, 'Pls enter product name'],
    },
    botWin: {
      type: Number,
      // required: [true, 'Pls enter product name'],
      // default: 0,
    },
    tie: {
      type: Number,
    },
    // image: {
    //   type: String,
    //   required: false,
    // }
  },

  {
    timestamps: true
  }
)

const Score = mongoose.model('Score', ScoreSchema)

module.exports = Score
