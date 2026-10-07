'use client';

import React, { useState, useEffect } from 'react';
import { signIn, signUp, signOut, useSession } from '@/lib/auth-client';

interface AuthCardProps {
  onSuccess?: () => void;
  initialMode?: 'signIn' | 'signUp';
  isModal?: boolean;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  onSuccess,
  initialMode = 'signIn',
  isModal = false,
}) => {
  const { data: sessionData, isPending: isSessionLoading } = useSession();
  const [mode, setMode] = useState<'signIn' | 'signUp'>(initialMode);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Protected route test state
  const [isTestingApi, setIsTestingApi] = useState(false);
  const [apiTestResult, setApiTestResult] = useState<{
    status: number;
    message: string;
    success: boolean;
  } | null>(null);

  // Clear messages when switching tabs
  const handleTabSwitch = (newMode: 'signIn' | 'signUp') => {
    setMode(newMode);
    setAuthError(null);
    setAuthSuccess(null);
    setFieldErrors({});
  };

  const validateEmail = (val: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!email.trim()) {
      errors.email = 'Alamat email wajib diisi.';
    } else if (!validateEmail(email.trim())) {
      errors.email = 'Format alamat email tidak valid.';
    }

    if (!password) {
      errors.password = 'Kata sandi wajib diisi.';
    } else if (password.length < 8) {
      errors.password = 'Kata sandi minimal 8 karakter.';
    }

    if (mode === 'signUp') {
      if (!name.trim()) {
        errors.name = 'Nama lengkap wajib diisi.';
      }
      if (password !== confirmPassword) {
        errors.confirmPassword = 'Konfirmasi kata sandi tidak cocok.';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await signIn.email({
        email: email.trim(),
        password,
      });

      if (res?.error) {
        const msg = res.error.message || 'Gagal masuk. Periksa kembali email dan kata sandi Anda.';
        setAuthError(
          msg.toLowerCase().includes('invalid')
            ? 'Email atau kata sandi tidak cocok.'
            : msg
        );
      } else {
        setAuthSuccess('Berhasil masuk ke sesi.');
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 800);
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala jaringan saat masuk.';
      setAuthError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await signUp.email({
        name: name.trim(),
        email: email.trim(),
        password,
      });

      if (res?.error) {
        const msg = res.error.message || 'Gagal mendaftar akun baru.';
        setAuthError(
          msg.toLowerCase().includes('already')
            ? 'Email ini sudah terdaftar. Silakan masuk menggunakan akun Anda.'
            : msg
        );
      } else {
        setAuthSuccess('Pendaftaran berhasil! Sesi akun Anda kini aktif.');
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 1000);
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala jaringan saat mendaftar.';
      setAuthError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    setIsSigningOut(true);
    setAuthError(null);
    setAuthSuccess(null);
    setApiTestResult(null);

    try {
      await signOut();
      setAuthSuccess('Anda berhasil keluar dari sesi.');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Gagal keluar dari sesi.';
      setAuthError(message);
    } finally {
      setIsSigningOut(false);
    }
  };

  const handleTestProtectedApi = async () => {
    setIsTestingApi(true);
    setApiTestResult(null);
    try {
      const res = await fetch('/api/protected');
      const data = await res.json();
      if (res.ok) {
        setApiTestResult({
          status: res.status,
          message: data.message || 'Sesi terverifikasi oleh backend.',
          success: true,
        });
      } else {
        setApiTestResult({
          status: res.status,
          message: data.message || 'Sesi tidak valid atau tidak terotorisasi.',
          success: false,
        });
      }
    } catch (err: unknown) {
      setApiTestResult({
        status: 0,
        message: err instanceof Error ? err.message : 'Gagal memanggil rute API.',
        success: false,
      });
    } finally {
      setIsTestingApi(false);
    }
  };

  // State: Loading Session
  if (isSessionLoading) {
    return (
      <div className="auth-card" role="status" aria-live="polite">
        <div className="auth-loading-state">
          <span className="auth-spinner large" aria-hidden="true" />
          <p className="auth-loading-text">Memuat status sesi...</p>
        </div>
      </div>
    );
  }

  // State: Signed In
  if (sessionData?.user) {
    const user = sessionData.user;
    return (
      <div className="auth-card" aria-labelledby="auth-session-heading">
        <div className="auth-card-header">
          <div className="auth-session-badge" role="status" aria-live="polite">
            <span className="auth-status-dot active" aria-hidden="true" />
            <span>Sesi Aktif</span>
          </div>
          <h2 id="auth-session-heading" className="auth-title">
            Akun Terautentikasi
          </h2>
          <p className="auth-subtitle">
            Anda sedang masuk dengan kredensial Better Auth email dan password.
          </p>
        </div>

        {authSuccess && (
          <div className="auth-alert success" role="status" aria-live="polite">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{authSuccess}</span>
          </div>
        )}

        {authError && (
          <div className="auth-alert error" role="alert" aria-live="assertive">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{authError}</span>
          </div>
        )}

        <div className="auth-profile-details">
          <div className="auth-profile-row">
            <span className="auth-profile-label">Nama</span>
            <span className="auth-profile-value">{user.name || '(Tanpa nama)'}</span>
          </div>
          <div className="auth-profile-row">
            <span className="auth-profile-label">Email</span>
            <span className="auth-profile-value">{user.email}</span>
          </div>
          <div className="auth-profile-row">
            <span className="auth-profile-label">User ID</span>
            <span className="auth-profile-value mono">{user.id}</span>
          </div>
        </div>

        <div className="auth-action-group">
          <button
            type="button"
            className="btn btn-secondary auth-api-test-btn"
            onClick={handleTestProtectedApi}
            disabled={isTestingApi}
            aria-busy={isTestingApi}
          >
            {isTestingApi ? (
              <>
                <span className="auth-spinner" aria-hidden="true" />
                <span>Memeriksa /api/protected...</span>
              </>
            ) : (
              <>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Verifikasi Sesi API (/api/protected)</span>
              </>
            )}
          </button>

          {apiTestResult && (
            <div
              className={`auth-api-feedback ${apiTestResult.success ? 'success' : 'error'}`}
              role="status"
              aria-live="polite"
            >
              <span className="auth-api-status-code">HTTP {apiTestResult.status}</span>
              <span className="auth-api-status-msg">{apiTestResult.message}</span>
            </div>
          )}

          <button
            type="button"
            className="btn btn-outline auth-signout-btn"
            onClick={handleSignOut}
            disabled={isSigningOut}
            aria-busy={isSigningOut}
          >
            {isSigningOut ? (
              <>
                <span className="auth-spinner" aria-hidden="true" />
                <span>Memproses keluar...</span>
              </>
            ) : (
              <>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Keluar dari Sesi</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // State: Signed Out or Form View
  return (
    <div className="auth-card" aria-labelledby="auth-form-heading">
      <div className="auth-card-header">
        <h2 id="auth-form-heading" className="auth-title">
          {mode === 'signIn' ? 'Masuk ke Akun' : 'Daftar Akun Baru'}
        </h2>
        <p className="auth-subtitle">
          {mode === 'signIn'
            ? 'Gunakan email dan kata sandi yang telah terdaftar.'
            : 'Buat kredensial akun baru untuk autentikasi sistem.'}
        </p>

        {/* Tab switch */}
        <div className="auth-tabs" role="tablist" aria-label="Pilihan autentikasi">
          <button
            type="button"
            role="tab"
            id="tab-signin"
            aria-selected={mode === 'signIn'}
            aria-controls="panel-auth-form"
            className={`auth-tab ${mode === 'signIn' ? 'active' : ''}`}
            onClick={() => handleTabSwitch('signIn')}
          >
            Masuk
          </button>
          <button
            type="button"
            role="tab"
            id="tab-signup"
            aria-selected={mode === 'signUp'}
            aria-controls="panel-auth-form"
            className={`auth-tab ${mode === 'signUp' ? 'active' : ''}`}
            onClick={() => handleTabSwitch('signUp')}
          >
            Daftar
          </button>
        </div>
      </div>

      {authSuccess && (
        <div className="auth-alert success" role="status" aria-live="polite">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{authSuccess}</span>
        </div>
      )}

      {authError && (
        <div className="auth-alert error" role="alert" aria-live="assertive">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{authError}</span>
        </div>
      )}

      <form
        id="panel-auth-form"
        role="tabpanel"
        aria-labelledby={mode === 'signIn' ? 'tab-signin' : 'tab-signup'}
        noValidate
        onSubmit={mode === 'signIn' ? handleSignIn : handleSignUp}
        className="auth-form"
      >
        {mode === 'signUp' && (
          <div className="auth-field">
            <label htmlFor="auth-name" className="auth-label">
              Nama Lengkap <span className="auth-required" aria-hidden="true">*</span>
            </label>
            <input
              id="auth-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              disabled={isSubmitting}
              className={`auth-input ${fieldErrors.name ? 'invalid' : ''}`}
              placeholder="Contoh: Tonang Arivin"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (fieldErrors.name) {
                  setFieldErrors((prev) => ({ ...prev, name: '' }));
                }
              }}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? 'auth-name-error' : undefined}
            />
            {fieldErrors.name && (
              <p id="auth-name-error" className="auth-field-error" role="alert">
                {fieldErrors.name}
              </p>
            )}
          </div>
        )}

        <div className="auth-field">
          <label htmlFor="auth-email" className="auth-label">
            Alamat Email <span className="auth-required" aria-hidden="true">*</span>
          </label>
          <input
            id="auth-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            disabled={isSubmitting}
            className={`auth-input ${fieldErrors.email ? 'invalid' : ''}`}
            placeholder="nama@domain.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldErrors.email) {
                setFieldErrors((prev) => ({ ...prev, email: '' }));
              }
            }}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'auth-email-error' : undefined}
          />
          {fieldErrors.email && (
            <p id="auth-email-error" className="auth-field-error" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="auth-field">
          <label htmlFor="auth-password" className="auth-label">
            Kata Sandi <span className="auth-required" aria-hidden="true">*</span>
          </label>
          <input
            id="auth-password"
            type="password"
            name="password"
            autoComplete={mode === 'signIn' ? 'current-password' : 'new-password'}
            required
            disabled={isSubmitting}
            className={`auth-input ${fieldErrors.password ? 'invalid' : ''}`}
            placeholder="Minimal 8 karakter"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (fieldErrors.password) {
                setFieldErrors((prev) => ({ ...prev, password: '' }));
              }
            }}
            aria-invalid={!!fieldErrors.password}
            aria-describedby={fieldErrors.password ? 'auth-password-error' : undefined}
          />
          {fieldErrors.password && (
            <p id="auth-password-error" className="auth-field-error" role="alert">
              {fieldErrors.password}
            </p>
          )}
        </div>

        {mode === 'signUp' && (
          <div className="auth-field">
            <label htmlFor="auth-confirm-password" className="auth-label">
              Konfirmasi Kata Sandi <span className="auth-required" aria-hidden="true">*</span>
            </label>
            <input
              id="auth-confirm-password"
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              required
              disabled={isSubmitting}
              className={`auth-input ${fieldErrors.confirmPassword ? 'invalid' : ''}`}
              placeholder="Ulangi kata sandi"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (fieldErrors.confirmPassword) {
                  setFieldErrors((prev) => ({ ...prev, confirmPassword: '' }));
                }
              }}
              aria-invalid={!!fieldErrors.confirmPassword}
              aria-describedby={fieldErrors.confirmPassword ? 'auth-confirm-error' : undefined}
            />
            {fieldErrors.confirmPassword && (
              <p id="auth-confirm-error" className="auth-field-error" role="alert">
                {fieldErrors.confirmPassword}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary auth-submit-btn"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="auth-spinner" aria-hidden="true" />
              <span>{mode === 'signIn' ? 'Memproses masuk...' : 'Memproses pendaftaran...'}</span>
            </>
          ) : (
            <span>{mode === 'signIn' ? 'Masuk ke Akun' : 'Daftar Akun'}</span>
          )}
        </button>

        <div className="auth-footer-prompt">
          {mode === 'signIn' ? (
            <p>
              Belum memiliki akun?{' '}
              <button
                type="button"
                className="auth-link-btn"
                onClick={() => handleTabSwitch('signUp')}
              >
                Daftar sekarang
              </button>
            </p>
          ) : (
            <p>
              Sudah memiliki akun?{' '}
              <button
                type="button"
                className="auth-link-btn"
                onClick={() => handleTabSwitch('signIn')}
              >
                Masuk ke akun Anda
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
