import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AuthCard } from '@/components/AuthCard';

export const metadata: Metadata = {
  title: 'Autentikasi Akun | Tonang Arivin',
  description: 'Masuk atau daftarkan akun autentikasi Better Auth email dan password.',
};

export default function AuthPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="auth-page-main">
        <div className="container">
          <div className="auth-page-wrapper">
            <div className="auth-page-nav-back">
              <Link href="/" className="auth-back-link">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Kembali ke Portfolio Utama</span>
              </Link>
            </div>
            <AuthCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
