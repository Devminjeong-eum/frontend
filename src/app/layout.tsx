'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(new QueryClient());

  return (
    <html lang="ko">
      <QueryClientProvider client={client}>
        <body>
          <div className="flex justify-center min-h-screen bg-[#FBFCFE]">
            <div className="w-full max-w-[430px] border-1 border-x border-gray-200 shadow-xl">
              {children}
            </div>
          </div>
        </body>
      </QueryClientProvider>
    </html>
  );
}
