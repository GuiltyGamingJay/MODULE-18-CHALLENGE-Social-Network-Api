const names = [
    "Aaron",
    "Aaryan",
    "Aaryn",
    "Ava",
    "Olivia",
    "Emma",
    "Charlotte",
    "Amelia",
    "Sophia",
    "James",
    "William",
    "Glenn",
    "Lee",
    "Silas",
    "Leo",
    "Caleb",
    "Harvey",
    "Smith",
    "Jones",
    "Coollastname",
    "Oscar",
    "Ze",
    "Allen",
    "Atticus",
    "Basil",
    "Cassius",
    "Cecil",
    "Zen",
    "Clifford",
    "Jared",
  ];
  
  const thoughts = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Every accomplishment starts with the decision to try.",
    "Surround yourself with people who lift you up.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Positive thinking will let you do everything better than negative thinking will.",
    "Never give up on something that you can't go a day without thinking about.",
    "Be thankful for what you have, you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.",
    "Every day is a new beginning. Take a deep breath and start again.",
    "Every experience, no matter how bad it seems, holds within it a blessing of some kind. The goal is to find it.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you."
    
  ];
  
  const reactions = [
    "Love",
    "Awe",
    "Excitement",
    "Delight",
    "Astonishment",
    "Happy",
    "Pleased",
    "Content",
    "Relaxed",
    "Calm",
    "Interested",
    "Inspired",
    "Proud",
    "Attentive"
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUsername = () =>
    `${getRandomArrItem(names)}.${getRandomArrItem(names)}`;
  
  // Function to generate random thoughts
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
        username: getRandomUsername(),
        reactions: [...getRandomReactions(5)],
      });
    }
    return results;
  };
  
  // Function to generate random reactions
  const getRandomReactions = (int) => {
    
    if (int === 1) {
      return getRandomArrItem(reactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactions),
        username: getRandomUsername(),
      });
    }
    return results;
  }
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomThoughts, getRandomReactions };