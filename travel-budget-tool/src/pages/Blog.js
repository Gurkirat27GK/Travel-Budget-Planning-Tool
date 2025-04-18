import React from "react";
//import "./Blog.css"; // Move your style section here (create this CSS file)

function Blog() {
  return (
    <div>
      <header className="blog-header">
        <h1>✈️ Plan Smart, Travel Far</h1>
        <p>Your Ultimate Travel Budget Planning Companion</p>
      </header>

      <div className="blog-container">
        <p>
          Traveling opens doors to new experiences and unforgettable memories. But without a proper budget,
          it can also bring financial stress. That’s where the <strong>Travel Budget Planning Tool</strong> comes in.
        </p>

        <h2>🌟 Why Budgeting is Essential</h2>
        <p>Stay in control of your trip by managing your expenses, making smarter decisions, and avoiding overspending.</p>

        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b8b?fit=crop&w=900&q=80" alt="Travel Planning" />
        </div>

        <h2>🛠️ Key Features</h2>
        <ul>
          <li><strong>Expense Tracking:</strong> Log all your travel expenses with ease.</li>
          <li><strong>Custom Categories:</strong> Create personalized categories like food, transport, activities, etc.</li>
          <li><strong>Visual Breakdown:</strong> See your spending with graphs and charts.</li>
          <li><strong>Set Budgets:</strong> Define your goals and track your progress with visual indicators.</li>
          <li><strong>Overviews:</strong> Weekly/monthly insights help you stay on top of your habits.</li>
          <li><strong>Notifications:</strong> Get alerts when you're nearing or exceeding limits.</li>
          <li><strong>Reports:</strong> Export trip summaries in PDF or CSV format.</li>
          <li><strong>Currency Conversion:</strong> Log expenses in any currency with real-time rates.</li>
          <li><strong>Collaborative Planning:</strong> Invite friends and travel companions to manage budgets together.</li>
          <li><strong>Mobile-Friendly:</strong> Fully responsive across all devices.</li>
        </ul>

        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?fit=crop&w=900&q=80" alt="Budget Overview" />
        </div>

        <h2>🚀 Start Your Journey</h2>
        <p>
          The <strong>Travel Budget Planning Tool</strong> empowers you to take control of your expenses and travel confidently.
          Whether you’re a solo explorer or traveling with a group, this tool is designed to make your trips financially smooth and stress-free.
        </p>

        <p><em>Plan wisely. Spend smartly. Travel happily.</em></p>
      </div>

      <footer className="blog-footer">
        &copy; 2025 Travel Budget Tool | Designed with ❤️ for smart travelers
      </footer>
    </div>
  );
}

export default Blog;
