import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Diego Vicuña • Software Architect</p>
    </footer>
  );
}