const Joi = require("joi");
const {
  GENRES,
  PLOT_OPTIONS,
  SETTINGS,
  TONE,
  STYLE,
  EMOTIONAL_TONE,
} = require("../constants/constants");

const SCHEMA = Joi.object({
  genre: Joi.string()
    .valid(...GENRES)
    .required(),
  plot: Joi.string()
    .valid(...PLOT_OPTIONS)
    .required(),
  setting: Joi.string()
    .valid(...SETTINGS)
    .required(),
  tone: Joi.string()
    .valid(...TONE)
    .required(),
  style: Joi.string()
    .valid(...STYLE)
    .required(),
  emotionalTone: Joi.string()
    .valid(...EMOTIONAL_TONE)
    .required(),
  character_preferences: Joi.string().required(),
  interactive_elements: Joi.string(),
});

module.exports = SCHEMA;
