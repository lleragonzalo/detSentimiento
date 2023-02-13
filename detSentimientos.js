const sentiment = {
  "muy feliz": 2,
  "feliz": 1,
  "neutral": 0,
  "triste": -1,
  "muy triste": -2
};

function analyzeSentiment(text) {
  let score = 0;
  for (const word in sentiment) {
    if (text.includes(word)) {
      score += sentiment[word];
    }
  }
  return score;
}

const text = "Hoy estoy muy feliz.";
const sentimentScore = analyzeSentiment(text);
console.log("Sentiment Score: " + sentimentScore);
