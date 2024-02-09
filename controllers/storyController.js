const { MODEL, API_KEY } = require("../constants/constants");

const generateStory = async (req, res) => {
  try {
    const {
      genre,
      plot,
      setting,
      character_preferences,
      tone,
      style,
      emotionalTone,
      interactive_elements,
    } = req.body;
  } catch (error) {}
};

module.exports = {
  generateStory,
};
