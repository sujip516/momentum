const quotes = [
  {
    quote:
      "No good sit in worry in about it. What's come in will come, and we'll meet it when it does.",
    author: "- Rubeus Hagrid",
  },
  {
    quote: "It matters not what someone is born, but what they grow to be.",
    author: "- Albus Dumbledore",
  },
  {
    quote:
      "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    author: "- Albus Dumbledore",
  },
  {
    quote:
      "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.",
    author: "- Sirius Black",
  },
  {
    quote:
      "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    author: "- Luna Lovegood",
  },
  {
    quote: "Dobby is Free!",
    author: "- Dobby",
  },
  {
    quote:
      "I am what I am, and I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they're not worth bothering' with.'",
    author: "- Rubeus Hagrid",
  },
  {
    quote: "Time will not slow down when something unpleasant lies ahead.",
    author: "- J.K. Rowling",
  },
  {
    quote:
      "Do not pity the dead, Harry. Pity the living, and above all those who live without love.",
    author: "- Albus Dumbledore",
  },
  {
    quote:
      "It is the quality of one's convictions that determines success, not the number of followers.",
    author: "- Remus Lupin",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
