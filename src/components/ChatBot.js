import React, { useState } from 'react';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const botMessage = {
      from: 'bot',
      text: 'This is a sample AI response! I can help you with anything in your AI Book.'
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#4a90e2',
          border: 'none',
          color: 'white',
          fontSize: '28px',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '95px',
            right: '25px',
            width: '320px',
            height: '420px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: '#4a90e2',
              color: 'white',
              padding: '12px',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            AI Assistant
          </div>

          <div
            style={{
              flex: 1,
              padding: '10px',
              overflowY: 'auto',
              background: '#f7f7f7',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  margin: '6px 0',
                  textAlign: msg.from === 'user' ? 'right' : 'left',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    background:
                      msg.from === 'user' ? '#4a90e2' : '#e0e0e0',
                    color: msg.from === 'user' ? 'white' : 'black',
                    maxWidth: '80%',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ display: 'flex', padding: '10px', background: '#fff' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: '8px',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                marginLeft: '8px',
                padding: '8px 12px',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
