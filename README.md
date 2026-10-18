# 🐶 Random Cat Generator

A simple, responsive web app that fetches a random dog photo or video from the [random.dog](https://random.dog) API and displays it on the page — no frameworks, no libraries, just HTML, CSS, and vanilla JavaScript.

## Features

- Fetches a random dog **image or video** from a live public API
- Automatically detects the file type and renders the correct `<img>` or `<video>` element
- Loading state and error handling, so the UI never gets stuck or shows a blank screen on failure
- Fully responsive layout — works on mobile, tablet, and desktop
- Clean, modular JavaScript with single-responsibility functions and no hard-coded repeated values

## Demo

Open `index.html` in a browser (or serve it with a tool like VS Code's Live Server) and click **Get Random Dog**.

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (class-based styling, responsive media queries — no inline styles)
- Vanilla JavaScript (`async`/`await`, `fetch`, `try`/`catch`)

## API Reference

This project uses the [random.dog](https://random.dog) API:

```
GET https://random.dog/woof.json
```

**Response:**
```json
{ "url": "https://random.dog/<filename>.<extension>" }
```

The returned file can be an image (`jpg`, `png`, `gif`) or a video (`mp4`, `webm`) — the app checks the file extension and renders the correct HTML element automatically.

## Project Structure

```
random-dog/
├── index.html      # Page structure
├── style.css        # Styling (responsive, class-based)
├── script.js         # Fetch logic, DOM updates, error handling
└── README.md
```

## Getting Started

1. Clone or download this repository.
2. Open `index.html` directly in a browser, **or** serve the folder locally (recommended, avoids any CORS quirks):
   ```bash
   npx serve .
   ```
   or use the VS Code "Live Server" extension.
3. Click **Get Random Dog** to fetch a new photo or video.

## Requirements Checklist

This project was built to satisfy the following standards:

- [x] Responsive UI across devices
- [x] `async`/`await` for all API calls
- [x] Errors handled with `try`/`catch`
- [x] Reusable, single-responsibility functions
- [x] Descriptive variable/function names
- [x] Comments explaining logic throughout
- [x] Semantic HTML, no deprecated tags
- [x] No inline styles — all styling via CSS classes
- [x] No hard-coded or repeated values (constants used throughout)
- [x] Vanilla HTML/CSS/JS only — no frameworks or libraries



## Acknowledgements

- [random.dog](https://random.dog) for the free, no-auth API
