import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "./styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fiuzar | AI-Powered Marketing Automation for Growing Businesses",
  keywords: "AI, Marketing, Automation, Business, Growth",
  authors: [{ name: "Fiuzar" }],
  creator: "Fiuzar",
  publisher: "Fiuzar",
  publisherLogo: "/logo.png",
  openGraph: {
    title: "Fiuzar | AI-Powered Marketing Automation for Growing Businesses",
    description:
      "Fiuzar is an AI-powered marketing automation platform designed to help growing businesses streamline their marketing efforts and achieve better results.",
    url: "https://fiuzar.com",
    siteName: "Fiuzar",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiuzar | AI-Powered Marketing Automation for Growing Businesses",
    description:
      "Fiuzar is an AI-powered marketing automation platform designed to help growing businesses streamline their marketing efforts and achieve better results.",
    images: "/logo.png",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  // manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-hidden">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
