import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">⚡</div>
          <span className="sidebar-logo-text">OpenClaw</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`} end>
          <span className="sidebar-link-icon">📊</span>
          Dashboard
        </NavLink>
        <NavLink to="/knowledge-base" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span className="sidebar-link-icon">📚</span>
          Knowledge Base
        </NavLink>
        <NavLink to="/chat" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span className="sidebar-link-icon">💬</span>
          Chat Interface
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-status">
          <div className="status-dot"></div>
          Server connected — PostgreSQL active
        </div>
      </div>
    </aside>
  );
}
