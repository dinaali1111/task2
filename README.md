# Element Details Dashboard

A modern, interactive dashboard to inspect and count HTML elements in a web page. This project is designed for learning and practicing DOM manipulation, UI design, and basic web interactivity.

## Features
- **Live element statistics:** Counts of `<div>`, elements with specific class, name, and id attributes.
- **Modern UI:** Responsive design, gradient backgrounds, and Font Awesome icons.
- **Show Result button:** Displays live statistics with animation.
- **Easy customization:** All logic and styles are in three simple files.

## Files
- `main.html` — The main HTML file containing the dashboard structure.
- `main.css` — Styles for layout, colors, and responsiveness.
- `main.js` — JavaScript for DOM queries and displaying results.

## How to Run
1. Open the folder in VS Code or any editor.
2. Open `main.html` in your browser (double-click or right-click → Open with browser).
3. Click "Show Result" to see live statistics.

## How it Works
- The dashboard displays four key element types: TagName, className, id, and Name.
- When you click "Show Result", JavaScript queries the DOM and updates the output area with counts and details.
- The UI is styled for clarity and modern look, and adapts to different screen sizes.

## Customization
- You can add more elements to the HTML to see how the statistics change.
- Edit `main.js` to count other element types or add new features.

## How to Upload to GitHub
1. Create a new repository on GitHub (choose a name, e.g. `element-dashboard`).
2. On your computer, open the project folder in VS Code.
3. Open the terminal and run:

```cmd
cd "d:\MY FILES\ITI\Day4\task2"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/element-dashboard.git
git push -u origin master
```

4. Refresh your GitHub repo page to see the files uploaded.

## License
This project is for educational purposes. You can use, modify, and share it freely.

---
Feel free to add more features or ask for advanced UI/UX improvements!
