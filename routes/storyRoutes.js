const express = require("express");
const storyController = require("../controllers/storyController");

const storyRoutes = express.Router();

storyRoutes.post("/generate", storyController.generateStory);

module.exports = storyRoutes;
