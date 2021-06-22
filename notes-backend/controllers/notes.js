const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const dotenv = require('dotenv')

const Notes = require("../models/notes.js")
dotenv.config();

exports.createNote = async (req, res) => {
  const { title, decsription, tags  } = req.body;
  try {
    const user = req.user
    const post = await Notes.create({title, decsription, tags, user: user._id})
    res.status(201).json({ post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const user = req.user 
    const posts = Notes.find({user: ObjectId(user._id)}).populate('user')

    res.status(201).json({ posts });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
