import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kate Farrar",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@400..700&family=Stack+Sans+Text:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900 text-base flex flex-col min-h-screen">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-16 flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
