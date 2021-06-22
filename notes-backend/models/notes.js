const mongoose = require("mongoose")
const notesSchema = mongoose.Schema({
  title: { 
    type: String, 
    unique: true,
    required: true 
  },
  decsription: { 
    type: String,
    required: true 
  },
  tags: [],
  user: { 
    type: mongoose.Types.ObjectId, 
    required: true,
    ref:'User'
   },
});

module.exports = mongoose.model("Notes", notesSchema);