# 📝 Random Quote Generator

A simple and elegant **Random Quote Generator** built using **HTML, CSS, and JavaScript**.  
It fetches inspiring quotes from the public [Quotable API](https://api.quotable.io/random) and displays them dynamically on the page.

---

## 🚀 Features

- Fetches a new random quote each time the button is clicked.
- Automatically loads a quote when the page is opened.
- Displays quote text and author name.
- Smooth, centered, and minimal UI design.
- Includes error handling and fallback quotes for offline mode.

---

## 🧩 Technologies Used

- **HTML5** – structure and content  
- **CSS3** – styling and layout  
- **JavaScript (ES6)** – dynamic quote fetching and DOM manipulation  
- **[Quotable API](https://api.quotable.io/random)** – free public API for random quotes  

---

## 📂 Project Structure

random-quote-generator/
│
├── index.html # Main HTML file
├── style3.css # Styling file
├── script3.js # JavaScript logic
└── README.md # Project documentation

yaml
Copy code

---

## 🧠 How It Works

1. When the page loads, a quote is automatically fetched from the Quotable API.
2. Clicking the **“Get Quote”** button fetches a new random quote.
3. If the API request fails (e.g., no internet connection), a random fallback quote is shown instead.

---

## ⚙️ Setup & Usage

1. Clone or download this repository.
2. Make sure all three files (`index.html`, `style3.css`, `script3.js`) are in the same folder.
3. Open `index.html` in your browser.
4. Click **Get Quote** to see new quotes in action!

---

## 🖼️ Screenshot

*(You can add your project screenshot here)*  
Example:  

yaml
Copy code

---

## 🔗 API Reference

**Endpoint:**  
GET https://api.quotable.io/random

css
Copy code

**Response Example:**
```json
{
  "_id": "xyz123",
  "content": "Be yourself; everyone else is already taken.",
  "author": "Oscar Wilde"
}
🧰 Future Improvements
Add a "Copy Quote" or "Tweet Quote" button.

Show a loading spinner instead of plain text.

Add background color transitions for each quote.

Support multiple quote APIs.

📜 License
This project is open-source and free to use for learning or personal projects.
Developed with ❤️ using vanilla JavaScript.

yaml
Copy code

---

Would you like me to include **a screenshot preview section** with Markdown-ready code for a sample image (s
