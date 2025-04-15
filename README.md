# Travel-Budget-Planning-Tool

🛠 Team Members & Roles
Member A – Frontend UI & Layouts

Member B – Expense Tracking & Budget Logic

Member C – Data Visualization & Reports

Member D – Firebase Integration, Collaboration, Currency & Notifications

🗓 Day 1: Setup + UI Design + Firebase Structure
🔧 Objectives:
Set up the project

Establish Firebase structure and dependencies

Build static UI layouts and routing

✅ Tasks:
Member A:

Set up HTML/CSS/JS project boilerplate

Create pages: Home, Add Expense, Reports

Style main layout with header, footer, sidebar (if needed)

Member B:

Define JSON data structure: expenses, categories, budgets

Create static Expense Form UI (Date, Description, Amount, Category)

Design Add/Edit/Delete buttons (non-functional yet)

Member C:

Research Chart.js or similar

Set up static chart area placeholders in Reports page

Prepare layout for summary section (Total, Category breakdown, etc.)

Member D:

Set up Firebase Realtime Database

Set up Firebase Auth (email/password sign-in)

Create DB structure: /users/{uid}/expenses, /budgets, /categories

Add team as collaborators in GitHub & share instructions to clone

🗓 Day 2: Core Functionality – Expenses + Budget + Firebase CRUD
🔧 Objectives:
Implement core functionality to add, update, and delete expenses

Enable budget goal setting and category logic

Start data binding with Firebase

✅ Tasks:
Member A:

Make Expense Form functional (add data to Firebase)

Fetch and display expenses in a table

Add edit/delete button logic for entries

Member B:

Implement logic to calculate total expenses per category

Enable users to set and update budget goals per category

Show remaining vs spent amounts in UI

Member C:

Use Chart.js to create a working pie chart with Firebase data

Enable chart to update on real-time changes

Add tooltips with category details on hover

Member D:

Enable Firebase Auth with login/logout

Add real-time sync logic using onValue/onSnapshot

Add shared trip logic via shared trip ID or code in DB

🗓 Day 3: Reports, Collaboration, Currency, Notifications
🔧 Objectives:
Add exportable reports, currency converter, real-time collab & notifications

✅ Tasks:
Member A:

Build Export PDF/CSV buttons (use libraries like jsPDF or FileSaver)

Create Weekly/Monthly toggle buttons for report filtering

Member B:

Implement alert logic (budget exceeded)

Display alerts using toasts or banners (UI only, logic from Member D)

Member C:

Update charts to toggle between weekly/monthly view

Add detailed breakdown section (spent per category, trend analysis)

Member D:

Integrate currency converter API (e.g., ExchangeRate-API)

Convert and store expenses in both original and preferred currencies

Implement notification preferences using Firebase/localStorage

🗓 Day 4: Final Testing + Responsiveness + Deployment
🔧 Objectives:
Ensure full mobile responsiveness

Polish all UI elements and fix bugs

Deploy and document

✅ Tasks:
Member A:

Make all pages responsive using media queries and Flexbox/Grid

Improve form input styles and user interactions for mobile

Member B:

Test Add/Edit/Delete, budget logic, and category customizations

Check edge cases (empty fields, invalid inputs)

Member C:

Finalize charts and reports

Make charts responsive on different devices

Member D:

Deploy app using Firebase Hosting

Write README with setup instructions, features, screenshots

All Members:

Perform end-to-end testing

Fix bugs, improve UI consistency

Record demo video or prepare for group presentation

✅ Key Features Checklist:
 Add/Edit/Delete Expenses

 Budget Goals & Progress Bars

 Real-time Firebase Integration

 Data Visualizations (Charts)

 Weekly/Monthly Reports + Export

 Currency Converter

 Notifications/Alerts

 Mobile Responsiveness

 Collaborative Budgeting

 Firebase Deployment
