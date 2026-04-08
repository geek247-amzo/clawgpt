import React from 'react';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';

export default function ChatPage() {
  return (
    <div className="fade-in" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="chat-layout">
        <div className="chat-main">
          <div className="chat-header">
            <div className="chat-agent-info">
              <div className="chat-agent-avatar">⚡</div>
              <div>
                <div className="chat-agent-name">Agent Alpha</div>
                <div className="chat-agent-status">● Online — RAG enabled</div>
              </div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-sm)' }}>
              <button className="btn btn-ghost" id="chat-clear-btn">Clear</button>
              <button className="btn btn-ghost" id="chat-export-btn">Export</button>
            </div>
          </div>

          <MessageList />
          <ChatInput />
        </div>

        <div className="chat-sidebar">
          {/* Agent selector */}
          <div className="chat-sidebar-card">
            <div className="chat-sidebar-title">Select Agent</div>
            {['Agent Alpha', 'Agent Bravo', 'Agent Charlie'].map((name, i) => (
              <div
                className="context-item"
                key={i}
                style={{
                  cursor: 'pointer',
                  padding: 'var(--space-sm)',
                  borderRadius: 'var(--radius-sm)',
                  background: i === 0 ? 'var(--accent-primary-dim)' : 'transparent',
                  border: i === 0 ? '1px solid var(--border-accent)' : '1px solid transparent',
                  marginBottom: 'var(--space-xs)',
                }}
              >
                <span style={{ fontSize: '14px' }}>⚡</span>
                <span style={{ flex: 1, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>{name}</span>
                <span className={`agent-status-badge ${i < 2 ? 'online' : 'busy'}`} style={{ fontSize: '9px', padding: '2px 6px' }}>
                  {i < 2 ? 'online' : 'busy'}
                </span>
              </div>
            ))}
          </div>

          {/* Retrieved context */}
          <div className="chat-sidebar-card" style={{ flex: 1 }}>
            <div className="chat-sidebar-title">Retrieved Context</div>
            {[
              { source: 'quarterly_report_q1.pdf', chunk: 'Sec 2.1 — Executive Summary', score: '0.94' },
              { source: 'architecture_overview.md', chunk: 'Sec 3 — Migration Plan', score: '0.91' },
              { source: 'api_reference_v3.md', chunk: 'Endpoints — /embed', score: '0.87' },
              { source: 'company_policies_2025.pdf', chunk: 'Sec 7 — Data Retention', score: '0.82' },
            ].map((ctx, i) => (
              <div className="context-item" key={i} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 'var(--font-size-xs)' }}>📄 {ctx.source}</span>
                  <span className="context-score">{ctx.score}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{ctx.chunk}</span>
              </div>
            ))}
          </div>

          {/* RAG config */}
          <div className="chat-sidebar-card">
            <div className="chat-sidebar-title">RAG Settings</div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Top K results</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>5</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Similarity threshold</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>0.75</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Embedding model</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>all-MiniLM-L6</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Vector dimensions</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>384</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
