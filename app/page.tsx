'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="page">
      <header className="header">
        <div className="brand">Android Studio Cloud</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Pricing</a>
          <Link href="/api/health">Status</Link>
        </nav>
      </header>

      <section className="hero">
        <h1>Android development, instantly in the cloud</h1>
        <p>Launch a ready-to-code workspace with emulators, builds, and CI?no setup.</p>
        <div className="cta">
          <a className="btn primary" href="#demo">Try the Web IDE</a>
          <a className="btn" href="#features">Explore features</a>
        </div>
      </section>

      <section id="features" className="features">
        <div className="card">
          <h3>Zero Install</h3>
          <p>Open a browser and start coding. Environments spin up in seconds.</p>
        </div>
        <div className="card">
          <h3>Device Farm</h3>
          <p>Test on virtual Pixel, Galaxy, and tablets with one click.</p>
        </div>
        <div className="card">
          <h3>Blazing Builds</h3>
          <p>Hosted Gradle caches and remote executors deliver fast feedback.</p>
        </div>
        <div className="card">
          <h3>Team Workspaces</h3>
          <p>Share links, review diffs, and pair in real-time without conflicts.</p>
        </div>
      </section>

      <section id="demo" className="demo">
        <div className="editor">
          <div className="editor-header">MainActivity.kt</div>
          <textarea
            className="code"
            defaultValue={`package com.example.app\n\nimport android.os.Bundle\nimport androidx.activity.ComponentActivity\nimport androidx.activity.compose.setContent\nimport androidx.compose.material3.Text\n\nclass MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContent {\n            Text(\"Hello, Android Studio Cloud!\")\n        }\n    }\n}`}
          />
          <div className="actions">
            <button className="btn primary" onClick={() => simulateBuild()}>Run</button>
            <button className="btn" onClick={() => simulateTest()}>Test</button>
          </div>
          <pre id="output" className="output" aria-live="polite">$ Ready.</pre>
        </div>
        <aside className="aside">
          <h3>What this demo shows</h3>
          <ul>
            <li>Fast UI, keyboard-first editing</li>
            <li>One-click build & run simulation</li>
            <li>Simple logs and status</li>
          </ul>
          <p className="muted">Note: This is a lightweight web demo, not a full emulator.</p>
        </aside>
      </section>

      <section id="pricing" className="pricing">
        <div className="plan">
          <h3>Hobby</h3>
          <div className="price">$0</div>
          <ul>
            <li>Public projects</li>
            <li>1 ephemeral workspace/day</li>
            <li>Community support</li>
          </ul>
          <a className="btn">Get started</a>
        </div>
        <div className="plan featured">
          <h3>Team</h3>
          <div className="price">$19<span>/dev/mo</span></div>
          <ul>
            <li>Private & protected repos</li>
            <li>Concurrent workspaces</li>
            <li>Shared caches & runners</li>
          </ul>
          <a className="btn primary">Start free trial</a>
        </div>
        <div className="plan">
          <h3>Enterprise</h3>
          <div className="price">Custom</div>
          <ul>
            <li>SAML SSO, SCIM</li>
            <li>VPC peering</li>
            <li>99.9% uptime SLA</li>
          </ul>
          <a className="btn">Contact sales</a>
        </div>
      </section>

      <footer className="footer">
        <div>? {new Date().getFullYear()} Android Studio Cloud</div>
        <a href="/api/health">API Health</a>
      </footer>
    </main>
  );
}

function simulateBuild() {
  const out = document.getElementById('output');
  if (!out) return;
  const steps = [
    '$ gradlew assembleDebug',
    'Resolving dependencies?',
    'Compiling Kotlin sources?',
    'Running unit tests?',
    'Packaging APK?',
    'Build success ? 2.4s'
  ];
  runSteps(out as HTMLElement, steps);
}

function simulateTest() {
  const out = document.getElementById('output');
  if (!out) return;
  const steps = [
    '$ gradlew test',
    'Initializing test runner?',
    'Executing 24 tests?',
    'All tests passed ? 1.3s'
  ];
  runSteps(out as HTMLElement, steps);
}

function runSteps(el: HTMLElement, steps: string[]) {
  el.textContent = '';
  let i = 0;
  const tick = () => {
    if (i < steps.length) {
      el.textContent += (i ? '\n' : '') + steps[i++];
      setTimeout(tick, 350);
    }
  };
  tick();
}
