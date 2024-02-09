const Joi = require("joi");
const {
  GENRES,
  PLOT_OPTIONS,
  SETTINGS,
  TONE,
  STYLE,
  EMOTIONAL_TONE,
} = require("../constants/constants");

const StoryPrefsSchema = Joi.object({
  genre: Joi.string().insensitive().required(),
  plot: Joi.string().insensitive().required(),
  setting: Joi.string().insensitive().required(),
  tone: Joi.string().insensitive().required(),
  style: Joi.string().insensitive().required(),
  emotionalTone: Joi.string().insensitive().required(),
  characterPreferences: Joi.string().insensitive().required(),
  interactiveElements: Joi.string().insensitive(),
});

module.exports = { StoryPrefsSchema };
