const { MODEL, API_KEY } = require("../constants/constants");
const { StoryPrefsSchema } = require("../schemas/storyPrefs");

const generateStory = async (req, res) => {
  try {
    const { error, value } = StoryPrefsSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    return res.status(200).json({ message: "Story generated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  generateStory,
};
