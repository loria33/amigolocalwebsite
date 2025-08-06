import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page home">
      <div className="hero-header">
        <img src="/logo.png" alt="AmigoLocal Logo" className="hero-logo" />
        <h1>AmigoLocal: Your Private, Always-Available AI Assistant</h1>
      </div>

      <div className="hero-section">
        <p>
          Meet AmigoLocal, your friendly AI companion that's always ready to
          help, right on your device. AmigoLocal brings the power of artificial
          intelligence to your fingertips—without ever sending your
          conversations to the cloud. Everything happens locally, so your
          privacy is always protected.
        </p>
      </div>

      <div className="banner-ad-section">
        <a
          href="https://apple.co/4lfDUpI"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-ad-link"
        >
          <img
            src="/Landscape Banner Ad - 1200x720.png"
            alt="Download AmigoLocal on the App Store"
            className="banner-ad-image"
          />
        </a>
      </div>

      <div className="features-section">
        <h2>Why Choose AmigoLocal?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Truly Private</h3>
            <p>
              All your chats and questions are processed directly on your
              device. Nothing is sent to external servers, so your personal
              information stays safe and secure.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Always Available</h3>
            <p>
              No internet? No problem! AmigoLocal works offline, so you can get
              answers, ideas, and support anytime, anywhere.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Easy to Use</h3>
            <p>
              Just open the app and start chatting. Ask questions, get advice,
              brainstorm ideas, or simply have a friendly conversation.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>No Account Needed</h3>
            <p>
              Start using AmigoLocal right away—no sign-up, no log-in, no
              hassle.
            </p>
          </div>
        </div>
      </div>

      <div className="capabilities-section">
        <h2>What Can AmigoLocal Do?</h2>
        <div className="capabilities-list">
          <div className="capability-item">
            <span className="capability-icon">❓</span>
            <div>
              <strong>Answer Your Questions:</strong> From quick facts to
              thoughtful explanations, AmigoLocal is here to help.
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">💡</span>
            <div>
              <strong>Brainstorm Ideas:</strong> Need inspiration for a project,
              story, or gift? Just ask!
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">📝</span>
            <div>
              <strong>Summarize and Explain:</strong> Get clear, simple
              summaries or explanations on a wide range of topics.
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">💭</span>
            <div>
              <strong>Friendly Conversation:</strong> Chat about your day, share
              your thoughts, or just enjoy a bit of company.
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">📄</span>
            <div>
              <strong>Document Helper:</strong> Upload a text or PDF file and
              ask questions about its content. AmigoLocal will help you find the
              answers you need.
            </div>
          </div>
        </div>
      </div>

      <div className="key-features-section">
        <h2>Key Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <span className="feature-bullet">🔐</span>
            <strong>Local AI Processing:</strong> All conversations and files
            are handled on your device for maximum privacy.
          </div>
          <div className="feature-item">
            <span className="feature-bullet">📶</span>
            <strong>Offline Mode:</strong> Use AmigoLocal even when you're not
            connected to the internet.
          </div>
          <div className="feature-item">
            <span className="feature-bullet">⚡</span>
            <strong>Simple Onboarding:</strong> Get started in minutes with a
            quick, friendly introduction.
          </div>
          <div className="feature-item">
            <span className="feature-bullet">🎉</span>
            <strong>Fun Download Experience:</strong> While the app prepares
            itself, enjoy playful messages and a smooth setup.
          </div>
          <div className="feature-item">
            <span className="feature-bullet">🌍</span>
            <strong>Multiple Languages:</strong> AmigoLocal can understand and
            respond in several languages
          </div>
          <div className="feature-item">
            <span className="feature-bullet">💾</span>
            <strong>Save and Organize:</strong> Keep your favorite conversations
            and revisit them anytime.
          </div>
          <div className="feature-item">
            <span className="feature-bullet">🔊</span>
            <strong>Voice Output:</strong> Let AmigoLocal read answers aloud for
            you with Amy as your reader
          </div>
          <div className="feature-item">
            <span className="feature-bullet">🚫</span>
            <strong>No Ads, No Tracking:</strong> Enjoy a clean,
            distraction-free experience.
          </div>
        </div>
      </div>

      <div className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Download the App</h3>
              <p>
                AmigoLocal will guide you through a quick setup, including
                downloading its smart AI brain.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Start Chatting</h3>
              <p>Type your questions or thoughts and get instant responses.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Upload Documents</h3>
              <p>Need help with a file? Upload it and ask away.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Stay Private</h3>
              <p>Rest easy knowing your data never leaves your device.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="target-audience-section">
        <h2>Who Is AmigoLocal For?</h2>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-icon">🎓</div>
            <h3>Students</h3>
            <p>Looking for a study buddy or homework helper</p>
          </div>
          <div className="audience-card">
            <div className="audience-icon">💼</div>
            <h3>Professionals</h3>
            <p>Needing quick answers or brainstorming support</p>
          </div>
          <div className="audience-card">
            <div className="audience-icon">✍️</div>
            <h3>Writers & Creatives</h3>
            <p>Seeking inspiration and creative support</p>
          </div>
          <div className="audience-card">
            <div className="audience-icon">🔒</div>
            <h3>Privacy-Conscious Users</h3>
            <p>
              Anyone who values privacy and wants a helpful AI without sharing
              their data
            </p>
          </div>
        </div>
      </div>

      <div className="privacy-promise-section">
        <h2>Your Privacy, Our Promise</h2>
        <div className="privacy-content">
          <div className="privacy-icon">🛡️</div>
          <p>
            AmigoLocal is designed with your privacy in mind. We never collect,
            store, or share your personal information. All processing happens on
            your device, and you're always in control.
          </p>
        </div>
      </div>

      <div className="app-screenshots">
        <h2>App Screenshots</h2>
        <div className="screenshot-row">
          <img
            src="/ipadscreenshot.png"
            alt="iPad screenshot"
            className="screenshot-image"
          />
          <img
            src="/Iphonescreenshot.png"
            alt="iPhone screenshot"
            className="screenshot-image"
          />
        </div>
      </div>

      <div className="additional-images">
        <h2>App Features</h2>
        <div className="feature-images">
          <img src="/1.png" alt="Feature 1" className="feature-image" />
          <img src="/2.png" alt="Feature 2" className="feature-image" />
          <img src="/3.png" alt="Feature 3" className="feature-image" />
          <img src="/4.png" alt="Feature 4" className="feature-image" />
        </div>
      </div>

      <div className="cta-section">
        <h2>
          Download AmigoLocal today and experience the future of private,
          offline AI assistance!
        </h2>
        <div className="cta-button">Get Started Now</div>
      </div>
    </div>
  );
}

function Privacy() {
  const termsText = `Privacy Policy & Terms of Use

Your privacy is important to us. AmigoLocal processes all data locally on your device. No conversations or personal data are sent to external servers.

By using AmigoLocal, you agree to:
- Use the app for lawful purposes only.
- Not attempt to reverse engineer or misuse the app.
- Accept that AmigoLocal is provided as-is, without warranty.

Disclaimer: AmigoLocal strives to provide accurate and helpful information, but it may not always be correct. The responses you receive are generated by an AI model and should not be considered professional advice. Always double-check important details and consult a qualified expert when necessary. AmigoLocal is constantly learning and improving, but errors and misunderstandings can still occur. Use your own judgment and verify information before making decisions based on AmigoLocal's suggestions.`;

  return (
    <div className="page privacy">
      <h1>Privacy Policy & Terms of Use</h1>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
          lineHeight: "1.6",
        }}
      >
        {termsText}
      </pre>
    </div>
  );
}

function Support() {
  return (
    <div className="page support">
      <h1>Support</h1>
      <p>
        For support, contact us at{" "}
        <a href="mailto:redcalf2007@gmail.com">redcalf2007@gmail.com</a>
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/support">Support</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
