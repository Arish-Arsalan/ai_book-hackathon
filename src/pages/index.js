import React from 'react';
import Layout from '@theme/Layout';
import '../css/custom.css';
import { useColorMode } from '@docusaurus/theme-common';
import ChatBot from '../components/ChatBot';
function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <button
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '8px 14px',
        background: 'rgba(255,255,255,0.25)',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        backdropFilter: 'blur(6px)',
        color: colorMode === 'dark' ? 'white' : 'black',
        transition: '0.3s',
      }}
    >
      {colorMode === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default function Home() {
  return (
    <Layout
      title="My AI Book"
      description="A modern AI-generated textbook exploring physical & embodied intelligence."
    >
      <ThemeToggle />
      <ChatBot />   {/* ⬅ floating chat widget */}
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">My AI Book</h1>

          <p className="hero__subtitle">
            A modern, AI-generated textbook exploring physical & embodied intelligence.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <a className="button button--primary button--lg" href="/docs/intro">
              Start Reading →
            </a>
          </div>
        </div>
      </header>
    </Layout>
  );
}
