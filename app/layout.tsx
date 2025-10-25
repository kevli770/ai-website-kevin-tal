import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";

// Hebrew font - Heebo
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// English font - Inter (fallback)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "טל חקוקי וקווין טל | AI לארגונים",
  description: "שירותי AI, אוטומציה וליווי ארגוני. הפכנו AI מתיאוריה ליכולת ארגונית מדידה תוך 90 יום.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
