const { MODEL, API_KEY, JSON_SCHEMA } = require("../constants/constants");
const removeUnwantedChars = require("../helpers/removeUnwanted");
const { StoryPrefsSchema } = require("../schemas/storyPrefs");
const axios = require("axios");

const generateStory = async (req, res) => {
  try {
    const { error, value } = StoryPrefsSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const Prompt = `You are a great storyteller. Write a 800-1000 words story for which the genre is ${
      value.genre
    }. Plot is ${value.plot}. Setting is ${value.setting}. Tone is ${
      value.tone
    }. Style is ${value.style}. Emotional tone is ${
      value.emotionalTone
    }. Character preferences are ${
      value.characterPrefs
    }. The story should include these elements: ${
      value.interactiveElements
    }. Only provide a  RFC8259 compliant JSON response  following this format without deviation: ${JSON.stringify(
      JSON_SCHEMA
    )}`;

    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };

    const data = {
      model: MODEL,
      messages: [{ role: "user", content: Prompt }],
    };

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      { headers }
    );

    const cleanedRes = removeUnwantedChars(
      response.data.choices[0].message.content
    );

    return res.status(200).json({ story: JSON.parse(cleanedRes) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  generateStory,
};
