import './globals.css';

export const metadata = {
  title: 'One People Studio | Mockup',
  description: 'Creative workshops for community and educational settings.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Special+Elite&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    mono: ['"Special Elite"', 'monospace'],
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body className="bg-[#FAF8F5] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
