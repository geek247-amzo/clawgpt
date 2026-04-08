import React, { useState } from 'react';

export default function UploadDropzone() {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    // In production, handle file upload here
    const files = Array.from(e.dataTransfer.files);
    console.log('Dropped files:', files);
  };

  return (
    <div
      className={`upload-dropzone ${dragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('kb-file-input').click()}
    >
      <input type="file" id="kb-file-input" hidden multiple accept=".pdf,.txt,.md,.csv,.json,.docx" />
      <div className="upload-dropzone-icon">📄</div>
      <div className="upload-dropzone-title">Drop files here or click to browse</div>
      <div className="upload-dropzone-hint">
        Upload documents to add to the vector knowledge base
      </div>
      <div className="upload-dropzone-formats">
        <span className="format-badge">.pdf</span>
        <span className="format-badge">.txt</span>
        <span className="format-badge">.md</span>
        <span className="format-badge">.csv</span>
        <span className="format-badge">.json</span>
        <span className="format-badge">.docx</span>
      </div>
    </div>
  );
}
