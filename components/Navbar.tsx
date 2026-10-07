'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { AuthModal } from './AuthModal';
import { useSession, signOut } from '@/lib/auth-client';

const NAV_LINKS = [
  { href: '#selected-work', label: 'Karya' },
  { href: '#about', label: 'Tentang' },
  { href: '#services', label: 'Layanan' },
  { href: '#contact', label: 'Kontak' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { data: sessionData, isPending: isSessionLoading } = useSession();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    toggleButtonRef.current?.focus();
  };

  // Listen for hash change #auth or #masuk
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && (window.location.hash === '#auth' || window.location.hash === '#masuk')) {
        setIsAuthModalOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-inner">
          <a href="#top" className="brand-wordmark" aria-label="Tonang Arivin - Beranda">
            Tonang Arivin
          </a>

          <nav className="desktop-nav" aria-label="Navigasi Utama">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />

            {/* Desktop Auth Controls */}
            <div className="desktop-auth-actions">
              {isSessionLoading ? (
                <div className="nav-auth-skeleton" aria-hidden="true" />
              ) : sessionData?.user ? (
                <div className="nav-session-pill-group">
                  <button
                    type="button"
                    className="nav-session-user-btn"
                    onClick={() => setIsAuthModalOpen(true)}
                    aria-label={`Sesi aktif: ${sessionData.user.name || sessionData.user.email}. Klik untuk melihat status sesi.`}
                    title="Buka status sesi akun"
                  >
                    <span className="auth-status-dot active" aria-hidden="true" />
                    <span className="nav-session-username">
                      {sessionData.user.name || sessionData.user.email.split('@')[0]}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="nav-auth-logout-btn"
                    onClick={async () => {
                      await signOut();
                    }}
                    aria-label="Keluar dari sesi akun"
                    title="Keluar dari sesi"
                  >
                    Keluar
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="nav-auth-signin-btn"
                  onClick={() => setIsAuthModalOpen(true)}
                  aria-label="Masuk atau daftar akun autentikasi"
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Masuk</span>
                </button>
              )}
            </div>

            <button
              ref={toggleButtonRef}
              type="button"
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeMenu();
            }
          }}
        >
          <div
            id="mobile-navigation"
            ref={drawerRef}
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi mobile"
          >
            <div className="mobile-drawer-header">
              <span className="brand-wordmark">Tonang Arivin</span>
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={closeMenu}
                aria-label="Tutup menu navigasi"
              >
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mobile-drawer-links" aria-label="Navigasi Menu Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-drawer-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Auth Actions */}
            <div className="mobile-drawer-auth">
              <div className="mobile-drawer-auth-title">Status Akun</div>
              {sessionData?.user ? (
                <div className="mobile-session-card">
                  <div className="mobile-session-user">
                    <span className="auth-status-dot active" aria-hidden="true" />
                    <span className="mobile-session-name">
                      {sessionData.user.name || sessionData.user.email}
                    </span>
                  </div>
                  <div className="mobile-session-buttons">
                    <button
                      type="button"
                      className="btn btn-secondary mobile-auth-btn"
                      onClick={() => {
                        closeMenu();
                        setIsAuthModalOpen(true);
                      }}
                    >
                      Detail Sesi
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline mobile-auth-btn"
                      onClick={async () => {
                        await signOut();
                        closeMenu();
                      }}
                    >
                      Keluar
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary mobile-auth-btn"
                  onClick={() => {
                    closeMenu();
                    setIsAuthModalOpen(true);
                  }}
                >
                  Masuk / Daftar Akun
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Accessible Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};
