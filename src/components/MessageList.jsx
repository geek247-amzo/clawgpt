import React, { useRef, useEffect } from 'react';

const mockMessages = [
  {
    id: 1,
    role: 'agent',
    text: 'Hello! I\'m your OpenClaw agent. I have access to your knowledge base with 619 indexed document chunks. How can I help you today?',
    time: '18:01',
  },
  {
    id: 2,
    role: 'user',
    text: 'What are the key findings from the Q1 quarterly report?',
    time: '18:02',
  },
  {
    id: 3,
    role: 'agent',
    text: 'Based on the quarterly report (Q1 2026), here are the key findings:\n\n• Revenue increased 23% year-over-year\n• Customer acquisition cost decreased by 15%\n• Three new enterprise partnerships were signed\n• The RAG pipeline processed 2.4M queries during Q1',
    time: '18:02',
    citation: {
      source: 'quarterly_report_q1.pdf',
      chunk: 'Section 2.1 — Executive Summary',
      score: 0.94,
    },
  },
  {
    id: 4,
    role: 'user',
    text: 'Can you summarize the architecture changes mentioned in the overview document?',
    time: '18:04',
  },
  {
    id: 5,
    role: 'agent',
    text: 'The architecture overview describes a migration from a monolithic FastAPI backend to a microservices approach. Key changes include:\n\n1. Splitting the embedding pipeline into its own service\n2. Adding a Redis caching layer for frequently accessed vectors\n3. Moving to pgvector for native PostgreSQL vector operations\n4. Implementing a queue-based ingestion system for large document batches',
    time: '18:04',
    citation: {
      source: 'architecture_overview.md',
      chunk: 'Section 3 — Migration Plan',
      score: 0.91,
    },
  },
];

export default function MessageList() {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="message-list" ref={listRef}>
      {mockMessages.map((msg) => (
        <div className={`message ${msg.role}`} key={msg.id}>
          <div className="message-avatar">
            {msg.role === 'agent' ? '⚡' : '👤'}
          </div>
          <div>
            <div className="message-bubble">
              {msg.text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < msg.text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
            {msg.citation && (
              <div className="message-citation">
                <div className="message-citation-label">📎 Source: {msg.citation.source}</div>
                <div>{msg.citation.chunk} — similarity: {msg.citation.score}</div>
              </div>
            )}
            <div className="message-time">{msg.time}</div>
          </div>
        </div>
      ))}

      {/* Typing indicator */}
      <div className="typing-indicator">
        <div className="typing-dots">
          <span></span><span></span><span></span>
        </div>
        Agent is thinking...
      </div>
    </div>
  );
}
