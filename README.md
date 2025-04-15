# Travel-Budget-Planning-Tool

📆 Travel Budget Planning Tool – 4 Day Schedule (React + Firebase)
👥 Team Members & Roles:

Member A – Frontend UI Layouts & Responsiveness

Member B – Expense Tracking, Budget Logic & Firebase Data Ops

Member C – Charts, Reports & Data Visualizations

Member D – Firebase Auth, Collaboration, Notifications & Currency Conversion

🗓️ Day 1: Setup, Auth & Static UI Layouts:

Member A:

Initialize project using create-react-app

Install and configure react-router-dom

Create pages: Home, Budget, Reports (basic placeholders)

Setup responsive layout using Flexbox/Grid

Member B:

Install & configure Firebase Realtime Database

Create Firebase config and initialize DB

Define JSON schema for expenses (date, amount, description, category)

Build initial static ExpenseForm UI (date, amount, category)

Member C:

Install Chart.js and react-chartjs-2

Create reusable PieChart and BarChart components with dummy data

Set up reports page layout

Member D:

Set up Firebase Authentication (Google Sign-in)

Create SignIn button component

Test sign-in flow and store user info

Research shared trip system using tripID or user linking

🗓️ Day 2: Expense Tracking, Budgeting, and Data Binding
Member A:

Style and connect ExpenseForm to state

Render expenses in table/list format

Add Edit/Delete button placeholders

Member B:

Implement Add/Edit/Delete expense logic in Firebase

Create functions to read/write expenses from DB

Bind expense table with Firebase data

Member C:

Connect PieChart to actual expense data (grouped by category)

Add hover tooltips with totals per category

Start basic BudgetProgressBar component

Member D:

Implement "shared trip" system via trip code or shared user ID

Store trip ID with expenses

Show which users are part of the trip

🗓️ Day 3: Budget Goals, Currency, Alerts & Reports
Member A:

Create budget input UI for each category

Display progress bar (spent vs. goal)

Add toggle to switch between weekly/monthly view

Member B:

Store budget goals in Firebase

Calculate totals vs. budgets

Trigger warning when user nears/exceeds category budget

Member C:

Finalize charts (category pie, trend bar chart)

Add Monthly/Weekly toggle for chart views

Start PDF/CSV export button (with jspdf or react-csv)

Member D:

Integrate currency converter using free API (e.g., exchangerate-api.com)

Auto-convert expense inputs to user’s preferred currency

Add setting toggle for currency preference

🗓️ Day 4: Mobile UX, Testing, Docs & Deployment
All Members:

Test all features collaboratively

Debug layout issues on desktop and mobile

Ensure Firebase sync is real-time for all users

Member A:

Final polish: responsive layout, mobile-friendly inputs

Add dark mode toggle (optional)

Member B:

Add final form validations and fallback UI for errors

Test expense flows for edge cases

Member C:

Polish visualizations (colors, spacing)

Complete report exports

Member D:

Add toast notifications (e.g., for alerts, expense added, budget exceeded)

Finalize invite link system

Ensure login/logout and session persistence

All:

Write README.md: Description, Features, Setup Steps, Tech Stack

Deploy app to Firebase Hosting or GitHub Pages

✅ Final Key Features Recap
Firebase Auth with shared budgeting

Add/Edit/Delete expenses with category system

Real-time data sync using Firebase DB

Budget setting with visual progress tracking

Pie & bar charts for expenses and trends

Currency converter

PDF/CSV report export

Alerts for overspending

Mobile responsiveness
