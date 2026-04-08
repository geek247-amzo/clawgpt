import React from 'react';
import MetricCard from '../components/MetricCard';
import AgentStatusList from '../components/AgentStatusList';

export default function DashboardPage() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Monitor your OpenClaw agents and RAG pipeline at a glance</p>
      </div>

      <div className="metrics-grid">
        <MetricCard
          icon="⚡"
          label="Active Agents"
          value="3"
          change="1 new this week"
          changeType="positive"
          color="cyan"
        />
        <MetricCard
          icon="📄"
          label="Indexed Documents"
          value="6"
          change="+2 today"
          changeType="positive"
          color="purple"
        />
        <MetricCard
          icon="🧩"
          label="Vector Chunks"
          value="619"
          change="+284 processing"
          changeType="positive"
          color="green"
        />
        <MetricCard
          icon="💬"
          label="Queries Today"
          value="1,247"
          change="12% vs yesterday"
          changeType="positive"
          color="orange"
        />
      </div>

      <AgentStatusList />

      <div className="card fade-in" style={{ animationDelay: '300ms', animation: 'fade-in 0.5s ease-out 300ms both' }}>
        <div className="section-header">
          <h2 className="section-title">Recent Activity</h2>
        </div>
        <div className="agent-list">
          {[
            { icon: '📥', text: 'quarterly_report_q1.pdf uploaded and queued for processing', time: '2 min ago', color: 'var(--accent-primary)' },
            { icon: '✅', text: 'architecture_overview.md successfully indexed — 23 chunks', time: '18 min ago', color: 'var(--accent-tertiary)' },
            { icon: '🔍', text: 'Agent Charlie completed 48 RAG queries in the last hour', time: '1 hr ago', color: 'var(--accent-secondary)' },
            { icon: '⚠️', text: 'meeting_notes_apr.txt — encoding error during chunk extraction', time: '3 hrs ago', color: 'var(--accent-warning)' },
          ].map((item, i) => (
            <div
              className="agent-item"
              key={i}
              style={{ animation: `fade-in 0.4s ease-out ${400 + i * 80}ms both` }}
            >
              <div className="agent-avatar" style={{ background: `${item.color}20`, color: item.color, fontSize: '18px' }}>
                {item.icon}
              </div>
              <div className="agent-info">
                <div className="agent-name" style={{ fontWeight: 500 }}>{item.text}</div>
              </div>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
