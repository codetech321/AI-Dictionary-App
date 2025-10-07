🧠 LexiAI — Smart Dictionary App

LexiAI is an AI-powered dictionary web app built with React and Google Gemini API.
You can search any English word and get detailed meanings, phonetics, synonyms, and examples in a clean, modern UI.

Features

🔍 AI Dictionary Search — Get detailed word meanings, definitions, examples, phonetics, and synonyms.

⚡ Powered by Google Gemini (GenAI) for accurate and natural language responses.

💻 Fully Responsive — Works perfectly on desktop, tablet, and mobile.

🧩 Markdown Rendering for well-formatted AI responses.


| Category               | Tools / Libraries                   |
| ---------------------- | ----------------------------------- |
| **Frontend**           | React + Vite                        |
| **AI Model**           | Google Gemini (via `@google/genai`) |
| **Styling**            | TailwindCSS + Custom CSS            |
| **Icons**              | Lucide React                        |
| **Markdown Rendering** | react-markdown + remark-gfm         |
| **Loader**             | react-spinners (FadeLoader)         |

⚙️ Installation & Setup

1.Clone the repository
git clone https://github.com/your-username/lexiai.git
cd lexiai

2.Install dependencies
npm install

3.Create a .env file in the project root:
VITE_GOOGLE_API_KEY=your_google_api_key_here

Make sure you never commit your .env file to GitHub.
Add it to .gitignore (Vite does this by default).

npm run dev

📁 Folder Structure

lexiai/
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
│
├── .env
├── package.json
├── vite.config.js
└── README.md

| Variable              | Description                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------- |
| `VITE_GOOGLE_API_KEY` | Your Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey) |




