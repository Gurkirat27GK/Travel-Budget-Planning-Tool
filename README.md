# Travel-Budget-Planning-Tool

🧭 Day 1 – Project Kickoff & Setup ✅ Goal of the Day: Understand the overall flow of the project

Set up the folder structure

Create basic wireframes and structure for pages

Prepare foundational elements for Firebase, charts, and UI components



🧩 Project Overview: You’re building a Travel Budget Planning Tool that helps users:

Track expenses during travel (with categories like food, transport, etc.)

Set and monitor budget goals per category

Visualize spending with charts

Collaborate with friends on shared trips

Get alerts when nearing/exceeding budget

Convert currencies while entering expenses

View reports and download them


The app will be:

Built using HTML, CSS, and JavaScript (no React)

Use Firebase Realtime Database for backend

Include Chart.js or Google Charts for visualizations

Be responsive for mobile and desktop



🛠️ Day 1 Tasks by Member 

👤 Member A – Frontend UI & Layouts Tasks:

Create main project folder and subfolders:

bash Copy Edit /travel-budget-tool ├── index.html ├── /css ├── /js ├── /assets └── /pages (home.html, budget.html, report.html) Setup base index.html with basic structure and links to JS/CSS files

Create navigation (Home, Budget, Report)

Create simple wireframe of Expense Form UI:

Fields: Date, Description, Amount, Category

Add dummy form in home.html using HTML & CSS



👤 Member B – Expense Tracking & Budget Logic Tasks:

Create data/structure.json file (for now) to plan how expenses will be stored

json Copy Edit { "tripID": { "expenses": { "expenseID": { "date": "2025-04-15", "description": "Dinner", "category": "Food", "amount": 400 } }, "budgets": { "Food": 1500, "Transport": 2000 } } } Plan logic for:

Adding an expense

Editing and deleting an expense

Write skeleton JS functions for add/edit/delete (with comments)



👤 Member C – Data Visualization & Reports Tasks:

Research and choose a chart library (suggestion: Chart.js)

Try a small working demo:

Create a dummy pie chart with 3 categories: Food, Travel, Shopping

Use chart.html and mock data for testing

Decide:

How pie/bar charts will represent budget vs spent

What additional graphs are needed for weekly/monthly overview



👤 Member D – Firebase + Collaboration Setup Tasks:

Go to Firebase Console and:

Create a new project: TravelBudgetTool

Enable Realtime Database

Enable Authentication > Email/Password

Create a basic Firebase setup file (firebase.js):

js Copy Edit import { initializeApp } from "firebase/app"; import { getDatabase } from "firebase/database";

const firebaseConfig = { apiKey: "YOUR-KEY", authDomain: "YOUR-DOMAIN", databaseURL: "YOUR-URL", projectId: "YOUR-ID", storageBucket: "YOUR-BUCKET", messagingSenderId: "YOUR-SENDER-ID", appId: "YOUR-APP-ID" };

const app = initializeApp(firebaseConfig); const db = getDatabase(app); export { db }; Test if Firebase is connected (log "Connected!" in console)

Create rough plan for shared trips (via trip ID or invite link)



📌 At End of Day: Have working navigation & basic UI placeholders

Firebase project connected successfully

Expense structure and basic chart demo ready

Commit everything locally or share folder among group
