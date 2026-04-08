import React from 'react';

const documents = [
  { id: 1, name: 'company_policies_2025.pdf', type: 'PDF', size: '2.4 MB', chunks: 142, status: 'indexed', date: '2026-04-01' },
  { id: 2, name: 'api_reference_v3.md', type: 'MD', size: '890 KB', chunks: 67, status: 'indexed', date: '2026-04-03' },
  { id: 3, name: 'quarterly_report_q1.pdf', type: 'PDF', size: '5.1 MB', chunks: 284, status: 'processing', date: '2026-04-06' },
  { id: 4, name: 'user_feedback_data.csv', type: 'CSV', size: '1.2 MB', chunks: 95, status: 'indexed', date: '2026-03-28' },
  { id: 5, name: 'architecture_overview.md', type: 'MD', size: '340 KB', chunks: 23, status: 'indexed', date: '2026-04-05' },
  { id: 6, name: 'meeting_notes_apr.txt', type: 'TXT', size: '56 KB', chunks: 8, status: 'error', date: '2026-04-07' },
];

const typeIcons = {
  PDF: '📕',
  MD: '📘',
  CSV: '📗',
  TXT: '📝',
};

export default function DocumentList() {
  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">Indexed Documents</h2>
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>
          {documents.length} documents · {documents.reduce((s, d) => s + d.chunks, 0)} chunks
        </span>
      </div>
      <div className="document-list">
        {documents.map((doc, i) => (
          <div
            className="document-item"
            key={doc.id}
            style={{ animation: `fade-in 0.4s ease-out ${i * 60}ms both` }}
          >
            <div className="document-icon">{typeIcons[doc.type] || '📄'}</div>
            <div className="document-info">
              <div className="document-name">{doc.name}</div>
              <div className="document-meta">
                <span>{doc.size}</span>
                <span>·</span>
                <span>{doc.chunks} chunks</span>
                <span>·</span>
                <span>{doc.date}</span>
              </div>
            </div>
            <span className={`document-status ${doc.status}`}>{doc.status}</span>
            <div className="document-actions">
              <button className="icon-btn" title="Re-index">🔄</button>
              <button className="icon-btn danger" title="Delete">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
