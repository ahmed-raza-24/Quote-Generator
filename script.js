// script3.js (corrected)
let quote = document.getElementById("Quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

const fallbackQuotes = [
  { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "F. D. Roosevelt" },
  { content: "Do or do not. There is no try.", author: "Yoda" }
];

function showQuote(q) {
  quote.innerText = q.content;
  author.innerText = q.author || "Unknown";
}

let getQuote = () => {
  // show a loading state
  quote.innerText = "Loading...";
  author.innerText = "";

  fetch(url)
    .then((res) => {
      // handle HTTP errors (non-2xx)
      if (!res.ok) throw new Error("Network response was not ok: " + res.status);
      return res.json();
    })
    .then((item) => {
      showQuote(item);
    })
    .catch((err) => {
      console.error("Fetch failed:", err);
      // show a random fallback quote so UI stays useful offline
      const fallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      showQuote(fallback);
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
