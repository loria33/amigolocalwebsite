import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import legal from "./legal.json";
import "./App.css";

const APP_STORE = "https://apple.co/4lfDUpI";
const PLAY_STORE = process.env.REACT_APP_GOOGLE_PLAY_URL;
const SUPPORT = "redcalf2007@gmail.com";
const shots = [
  {
    time: "09.26.00",
    title: "A little space to think.",
    text: "A clean start for your next question.",
    alt: "AmigoLocal dark chat screen with Ask Amigo anything and a voice input button",
  },
  {
    time: "09.27.36",
    title: "Say what’s on your mind.",
    text: "Speak your prompt, then listen to the reply.",
    alt: "AmigoLocal conversation with voice input actively listening",
  },
  {
    time: "09.27.59",
    title: "Find your kind of smart.",
    text: "Choose from Smarty, Gema, and TriGema.",
    alt: "Models screen showing Smarty, Gema, and TriGema with download sizes",
  },
  {
    time: "09.29.12",
    title: "Make everyday words easier.",
    text: "From a first thought to a dinner invitation.",
    alt: "AmigoLocal drafting a short dinner invitation with copy, read aloud, and regenerate controls",
  },
];
const shotSrc = (time: string) =>
  `/Simulator Screenshot - iPhone 17 Pro - 2026-09-26 at ${time}.png`;

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    chat: (
      <path d="M20 11.5a8 8 0 0 1-8 8H5l-3 2v-10a9 9 0 0 1 18 0Z M7 10h8M7 14h5" />
    ),
    mic: (
      <>
        <rect x="9" y="2" width="6" height="13" rx="3" />
        <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    note: (
      <>
        <path d="M14 3H5v18h14v-9M9 15l2-5 8-8 3 3-8 8-5 2Z" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H5v20h14V7l-5-5Zm0 0v6h5M8 13h8M8 17h5" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="3" />
        <path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    apple: (
      <path
        fill="currentColor"
        stroke="none"
        d="M17.1 12.3c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.6-1.3 0-2.5.8-3.2 1.9-1.3 2.3-.3 5.7 1 7.6.6.9 1.3 1.8 2.3 1.8.9 0 1.3-.6 2.5-.6 1.1 0 1.5.6 2.5.6s1.6-.9 2.2-1.8c.7-1 1-2 1-2-.1 0-1.7-.7-1.7-2.9ZM15.2 6.3c.5-.7.9-1.6.8-2.5-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.9 2.4.9.1 1.9-.4 2.5-1.1Z"
      />
    ),
    android: (
      <>
        <path d="m7 4-2-2m12 2 2-2M4 12a8 8 0 0 1 16 0v7H4v-7ZM8 19v3m8-3v3M1 12v6m22-6v6M4 11h16" />
        <path d="M8 7h.01M16 7h.01" />
      </>
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.chat}
    </svg>
  );
}

function StoreLinks() {
  return (
    <div className="store-links">
      <a
        className="store-button"
        href={APP_STORE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="apple" />
        <span>
          <small>Download for iOS</small>
          <strong>App Store</strong>
        </span>
        <Icon name="arrow" />
      </a>
      <a
        className="store-button secondary"
        href={
          PLAY_STORE || `mailto:${SUPPORT}?subject=AmigoLocal%20for%20Android`
        }
        {...(PLAY_STORE
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        <Icon name="android" />
        <span>
          <small>
            {PLAY_STORE ? "Download for Android" : "Available for Android"}
          </small>
          <strong>{PLAY_STORE ? "Google Play" : "Get in touch"}</strong>
        </span>
        <Icon name="arrow" />
      </a>
    </div>
  );
}

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Private AI, right here",
      "/privacy": "Privacy Policy",
      "/terms": "Terms of Use",
      "/support": "Support",
    };
    document.title = `${titles[pathname] || "Page not found"} · AmigoLocal`;
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Home() {
  const features = [
    {
      icon: "chat",
      title: "A conversation, on your terms.",
      text: "Ask questions, explore ideas, and draft your next message. Save conversations as threads and pick up where you left off.",
      tag: "Everyday chat",
    },
    {
      icon: "mic",
      title: "Less typing. More talking.",
      text: "Dictate a thought, pause and continue, or have a reply read aloud. Voice input uses your device’s speech services.",
      tag: "Voice & dictation",
    },
    {
      icon: "mail",
      title: "From spoken thought to email.",
      text: "Dictate a subject and body with guided voice commands. Polish the wording, read it back, then copy it into your email app.",
      tag: "Email assistant",
    },
    {
      icon: "note",
      title: "Catch an idea. Clean it up.",
      text: "Write, save, and revisit notes on your device. Use AI polishing to give a rough draft a clearer shape.",
      tag: "Personal notes",
    },
    {
      icon: "file",
      title: "Bring your own reading.",
      text: "Import a text file or a PDF with extractable text and ask questions about its contents. Document answers are generated locally.",
      tag: "Document questions",
    },
    {
      icon: "layers",
      title: "Your phone. Your model.",
      text: "Start with lightweight Smarty. Explore Gema and TriGema with Premium or the trial, and manage downloads in Settings.",
      tag: "Three AI models",
    },
  ];
  return (
    <main id="main-content">
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> YOUR AI. YOUR DEVICE.
          </div>
          <h1>
            A little smarter.
            <br />A lot more <em>private.</em>
          </h1>
          <p className="hero-description">
            Meet the AI that stays close. Chat, write, and work through your
            ideas with AmigoLocal — powered by AI models that run right on your
            phone.
          </p>
          <StoreLinks />
          <p className="hero-note">
            Made for iOS & Android <span>·</span> No AmigoLocal account needed
          </p>
          <a className="text-link hero-explore" href="#features">
            Find your everyday Amigo <Icon name="arrow" />
          </a>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone hero-phone">
            <img
              src={shotSrc("09.29.12")}
              alt={shots[3].alt}
              width="1206"
              height="2622"
              fetchPriority="high"
            />
          </div>
          <div className="floating-label">
            <span className="mini-icon">
              <Icon name="lock" />
            </span>
            <span>
              Big ideas.
              <br />
              <strong>Kept close.</strong>
            </span>
          </div>
          <div className="visual-caption">
            <span className="status-dot" /> Real app. Real conversation.
          </div>
        </div>
      </section>
      <div className="trust-strip">
        <div className="container">
          <span>
            <Icon name="lock" /> On-device AI
          </span>
          <span>
            <Icon name="chat" /> Offline text chat after setup
          </span>
          <span>
            <Icon name="layers" /> Your choice of model
          </span>
        </div>
      </div>
      <section id="features" className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SMALL MOMENTS. REAL HELP.</p>
            <h2>
              A place for whatever
              <br />
              is on your mind.
            </h2>
          </div>
          <p>
            That half-written email. The idea you don’t want to lose. A question
            about a document. Bring it to Amigo.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.tag}>
              <Icon name={feature.icon} />
              <p className="feature-tag">{feature.tag}</p>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="inside" className="section screenshot-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MEET YOUR NEW AMIGO</p>
              <h2>
                A fresh look.
                <br />A familiar feeling.
              </h2>
            </div>
            <p>
              Deep colors. A quieter interface. Your conversation at the center.
              Take a look inside the app.
            </p>
          </div>
          <div className="screenshot-grid">
            {shots.map((shot, i) => (
              <figure key={shot.time}>
                <a
                  className="screenshot-link"
                  href={shotSrc(shot.time)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View full screenshot: ${shot.title}`}
                >
                  <div className="phone">
                    <img
                      src={shotSrc(shot.time)}
                      alt={shot.alt}
                      width="1206"
                      height="2622"
                      loading="lazy"
                    />
                  </div>
                  <span className="image-expand" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <figcaption>
                  <span className="shot-number">0{i + 1}</span>
                  <h3>{shot.title}</h3>
                  <p>{shot.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="section-note">
            Screenshots from the iOS app. Interface and voice availability may
            vary by device.
          </p>
        </div>
      </section>
      <section className="section container privacy-section">
        <div className="privacy-art" aria-hidden="true">
          <div className="privacy-ring">
            <Icon name="lock" />
          </div>
          <span>
            On your device.
            <br />
            <strong>In your hands.</strong>
          </span>
        </div>
        <div>
          <p className="eyebrow">PRIVATE BY DESIGN</p>
          <h2>
            Your thoughts deserve
            <br />
            their own space.
          </h2>
          <p>
            AI replies are generated on your device. Chats and saved notes are
            stored locally, without an AmigoLocal account or a cloud chat
            service.
          </p>
          <p>
            Download a model once, then use text chat offline. Model downloads,
            store purchases, and some device speech services can require a
            connection.
          </p>
          <Link className="text-link" to="/privacy">
            Read the app’s Privacy Policy <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section id="start" className="section container getting-started">
        <p className="eyebrow">SETTLE IN. START SOMETHING.</p>
        <h2>Three steps to your own AI.</h2>
        <div className="steps-grid">
          <article>
            <span>01</span>
            <h3>Make room for Amigo.</h3>
            <p>
              Install on iOS or Android. You don’t need to create an AmigoLocal
              account.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Download your model.</h3>
            <p>
              Start with Smarty, about 1.1 GB. Use Wi-Fi and leave room for the
              model and its working memory.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Let the ideas come.</h3>
            <p>
              Start a conversation, write a note, or explore a document. Text AI
              runs on your device after setup.
            </p>
          </article>
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <p className="eyebrow">A FEW GOOD QUESTIONS</p>
          <h2>Before you say hello.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>What’s included for free?</summary>
            <p>
              Free includes Smarty with unlimited chat, plus daily allowances of
              10 minutes of dictation, 3 email polishes, 10 note polishes, and 5
              document questions. Dictation time is shared across microphone
              features; allowances reset at local midnight.
            </p>
          </details>
          <details>
            <summary>What does Premium add?</summary>
            <p>
              Premium unlocks Gema and TriGema and removes the free plan’s daily
              feature allowances. The app includes a seven-day local trial.
              Monthly and yearly subscriptions are available; see the app’s
              store checkout for current prices. The local trial does not start
              a paid subscription automatically.
            </p>
          </details>
          <details>
            <summary>Does everything work offline?</summary>
            <p>
              Text generation and document answers run locally once a model is
              downloaded. Downloads and store purchases need internet. Voice
              recognition depends on your device’s speech services, permissions,
              and language support, and may need a connection.
            </p>
          </details>
          <details>
            <summary>Which model should I choose?</summary>
            <p>
              Smarty is the lightweight starting point at about 1.1 GB. Gema is
              about 1.6 GB, and TriGema about 2.8 GB. Larger models need more
              storage and memory. Availability and speed depend on your device;
              manage or delete models in Settings.
            </p>
          </details>
          <details>
            <summary>Can Amigo make mistakes?</summary>
            <p>
              Yes. AI responses can be inaccurate or incomplete, including
              answers about your documents. Check important details before
              relying on them.
            </p>
          </details>
        </div>
      </section>
      <section id="download" className="download-section container">
        <div className="eyebrow">A LITTLE HELP, CLOSE AT HAND</div>
        <h2>
          Your next idea
          <br />
          has an Amigo.
        </h2>
        <p>Private, on-device AI for iOS and Android.</p>
        <StoreLinks />
        <p className="section-note">
          Free features. Optional Premium. A model download to get started.
        </p>
      </section>
    </main>
  );
}

function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const page = legal[kind];
  return (
    <main id="main-content" className="legal-page container">
      <Link className="text-link" to="/">
        ← Back to AmigoLocal
      </Link>
      <p className="eyebrow">AMIGOLOCAL FOR IOS & ANDROID</p>
      <h1>{page.title}</h1>
      <p className="legal-date">Last updated: {legal.updated}</p>
      <p className="legal-intro">{page.intro}</p>
      <a className="text-link" href={`/${page.file}`}>
        Open standalone page <Icon name="arrow" />
      </a>
      <div className="legal-sections">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
      </div>
      <div className="legal-resources">
        <h2>Useful links</h2>
        {page.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label} ↗
          </a>
        ))}
      </div>
    </main>
  );
}
function Support() {
  return (
    <main id="main-content" className="support-page container">
      <p className="eyebrow">HERE TO HELP</p>
      <h1>Let’s figure it out.</h1>
      <p>
        Need help with AmigoLocal on iOS or Android? Tell us your device, app
        version, and what happened.
      </p>
      <a className="button" href={`mailto:${SUPPORT}`}>
        Email support <Icon name="arrow" />
      </a>
      <p className="support-email">{SUPPORT}</p>
      <div className="support-grid">
        <article>
          <h2>Models & downloads</h2>
          <p>
            Check your connection and available storage. Model downloads are
            large, so Wi-Fi is recommended. You can manage downloaded models in
            the app’s Settings.
          </p>
        </article>
        <article>
          <h2>Voice & microphone</h2>
          <p>
            Check microphone access in device settings. On iOS, speech
            recognition permission is also needed. Speech support can vary by
            device and language.
          </p>
        </article>
        <article>
          <h2>Purchases & subscriptions</h2>
          <p>
            Use Restore Purchases in the app when needed. Manage or cancel a
            subscription in the store account you used to purchase it.
          </p>
        </article>
        <article>
          <h2>App policies</h2>
          <p>
            <Link to="/privacy">Privacy Policy</Link>
            <br />
            <Link to="/terms">Terms of Use</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="AmigoLocal home">
            <span className="brand-mark">
              a<span>·</span>
            </span>
            Amigo<span className="brand-light">Local</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link className="desktop-link" to="/#features">
              Features
            </Link>
            <Link className="desktop-link" to="/#inside">
              Inside the app
            </Link>
            <NavLink to="/support">Support</NavLink>
            <Link className="nav-cta" to="/#download">
              Get Amigo <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="*"
          element={
            <main id="main-content" className="support-page container">
              <h1>A little off track.</h1>
              <p>This page doesn’t exist.</p>
              <Link className="text-link" to="/">
                Back to AmigoLocal <Icon name="arrow" />
              </Link>
            </main>
          }
        />
      </Routes>
      <footer className="site-footer container">
        <div>
          <Link to="/" className="footer-brand">
            AmigoLocal<span>·</span>
          </Link>
          <p>A little smarter. A lot more private.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/support">Support</Link>
        </nav>
        <small>© {new Date().getFullYear()} RedCalf</small>
      </footer>
    </BrowserRouter>
  );
}
export default App;
