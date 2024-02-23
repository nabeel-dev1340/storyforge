require("dotenv").config();

const MODEL = "gpt-3.5-turbo";
const API_KEY = process.env.OPENAI_API_KEY;
const GENRES = [
  "Adventure",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Historical",
  "Comedy",
  "Horror",
  "Drama",
  "Thriller",
  "Crime",
  "Martial Arts",
  "Western",
  "Children's",
  "Young Adult",
  "Dystopian",
  "Utopian",
  "Satire",
  "Biographical",
  "Non-Fictional Narrative",
];
const SETTINGS = [
  "Past",
  "Present",
  "Future",
  "Urban",
  "Rural",
  "Indoor",
  "Outdoor",
];
const PLOT_OPTIONS = ["Happy ending", "Tragic ending", "Open-ended resolution"];
const TONE = [
  "Formal language",
  "Informal language",
  "Humorous tone",
  "Serious tone",
];
const STYLE = [
  "Romantic",
  "Gothic",
  "Surreal",
  "Realistic",
  "Minimalistic",
  "Maximalistic",
];
const EMOTIONAL_TONE = [
  "Happy",
  "Sad",
  "Suspenseful",
  "Inspirational",
  "Humorous",
  "Romantic",
];
const JSON_SCHEMA = {
  storyName: "Suggest a suitable name for your story",
  story: "Contains the whole story",
};

module.exports = {
  MODEL,
  API_KEY,
  GENRES,
  SETTINGS,
  PLOT_OPTIONS,
  TONE,
  STYLE,
  EMOTIONAL_TONE,
  JSON_SCHEMA,
};
