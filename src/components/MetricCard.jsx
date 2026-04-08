import React from 'react';

export default function MetricCard({ icon, label, value, change, changeType, color }) {
  return (
    <div className={`metric-card ${color}`}>
      <div className="metric-card-header">
        <div className={`metric-card-icon ${color}`}>{icon}</div>
        <span className="metric-card-label">{label}</span>
      </div>
      <div className="metric-card-value">{value}</div>
      {change && (
        <div className={`metric-card-change ${changeType}`}>
          {changeType === 'positive' ? '↑' : '↓'} {change}
        </div>
      )}
    </div>
  );
}
