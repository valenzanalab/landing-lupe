import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lupé — Restaurante en Las Palmas con cocina tradicional y moderna',
  description: 'Disfruta en Lupé de platos frescos y auténticos en un ambiente acogedor en Las Palmas. Reserva ya y vive una experiencia única.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
