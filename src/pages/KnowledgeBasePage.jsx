import React from 'react';
import UploadDropzone from '../components/UploadDropzone';
import DocumentList from '../components/DocumentList';

export default function KnowledgeBasePage() {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Knowledge Base</h1>
        <p className="page-subtitle">Manage your RAG document store and vector embeddings</p>
      </div>

      {/* Stats bar */}
      <div className="metrics-grid" style={{ marginBottom: 'var(--space-xl)' }}>
        <div className="metric-card purple">
          <div className="metric-card-header">
            <div className="metric-card-icon purple">📚</div>
            <span className="metric-card-label">Total Documents</span>
          </div>
          <div className="metric-card-value">6</div>
        </div>
        <div className="metric-card green">
          <div className="metric-card-header">
            <div className="metric-card-icon green">🧩</div>
            <span className="metric-card-label">Total Chunks</span>
          </div>
          <div className="metric-card-value">619</div>
        </div>
        <div className="metric-card cyan">
          <div className="metric-card-header">
            <div className="metric-card-icon cyan">💾</div>
            <span className="metric-card-label">Vector DB Size</span>
          </div>
          <div className="metric-card-value">48 MB</div>
        </div>
        <div className="metric-card orange">
          <div className="metric-card-header">
            <div className="metric-card-icon orange">🔄</div>
            <span className="metric-card-label">Processing</span>
          </div>
          <div className="metric-card-value">1</div>
        </div>
      </div>

      <div className="kb-layout">
        <UploadDropzone />
        <DocumentList />
      </div>
    </div>
  );
}
