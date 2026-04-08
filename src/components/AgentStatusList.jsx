import React from 'react';

const agents = [
  { id: 1, name: 'Agent Alpha', desc: 'General-purpose reasoning & code generation', status: 'online', initial: 'Aα' },
  { id: 2, name: 'Agent Bravo', desc: 'Document analysis & summarization pipeline', status: 'online', initial: 'Bβ' },
  { id: 3, name: 'Agent Charlie', desc: 'RAG retrieval & contextual search agent', status: 'busy', initial: 'Cγ' },
  { id: 4, name: 'Agent Delta', desc: 'Code review & vulnerability scanning', status: 'offline', initial: 'Dδ' },
];

export default function AgentStatusList() {
  return (
    <div className="agent-list-section fade-in">
      <div className="section-header">
        <h2 className="section-title">Active Agent Instances</h2>
        <button className="btn btn-ghost">View All</button>
      </div>
      <div className="agent-list">
        {agents.map((agent, i) => (
          <div
            className="agent-item"
            key={agent.id}
            style={{ animationDelay: `${i * 80}ms`, animation: `fade-in 0.4s ease-out ${i * 80}ms both` }}
          >
            <div className="agent-avatar">{agent.initial}</div>
            <div className="agent-info">
              <div className="agent-name">{agent.name}</div>
              <div className="agent-desc">{agent.desc}</div>
            </div>
            <span className={`agent-status-badge ${agent.status}`}>
              {agent.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
