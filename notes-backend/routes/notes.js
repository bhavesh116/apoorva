const express = require("express")
const router = express.Router();
const auth = require('../middleware/authentication')

const { getNotes, createNote } =require("../controllers/notes.js")

router.post("/",auth ,createNote);
router.get("/",auth, getNotes);

module.exports = router