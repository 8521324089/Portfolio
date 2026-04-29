import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function Resume() {
  const [showModal, setShowModal] = useState(false);
  const iframeRef = useRef(null);

  const handlePrint = useCallback(() => {
    if (showModal && iframeRef.current) {
      iframeRef.current.contentWindow.print();
    }
  }, [showModal]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
          e.preventDefault();
          handlePrint();
        }
        if (e.key === 'Escape') {
          setShowModal(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [showModal, handlePrint]);

  return (
    <section className="section" id="resume">
      <div className="section-header fade-in">
        <p className="section-label">My Resume</p>
        <h2 className="section-title">Download CV</h2>
        <div className="section-line"></div>
      </div>

      <div className="resume-wrapper fade-in">
        <div
          className="resume-preview"
          onClick={() => setShowModal(true)}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setShowModal(true)}
        >
          <div className="resume-icon">
            <i className="fa-solid fa-file-pdf"></i>
          </div>
          <h3>Vivek Kumar — Resume</h3>
          <p>Click to preview my resume</p>
        </div>
        <a
          href={`${process.env.PUBLIC_URL}/VivekKumar__CV.pdf`}
          download
          className="btn-primary-custom"
          style={{ display: 'inline-flex' }}
        >
          <i className="fa-solid fa-download"></i> Download Resume
        </a>
      </div>

      {showModal && (
        <div className="resume-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="resume-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close resume preview"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <iframe
              ref={iframeRef}
              src={`${process.env.PUBLIC_URL}/VivekKumar_Resume.html`}
              title="Resume Preview"
              className="resume-iframe"
            />
          </div>
        </div>
      )}
    </section>
  );
}
