import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import { SuppressHydrationWarnings } from "./suppress-warnings";

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
  title: "קווין ליאקס וטל חקוקי | AI לארגונים",
  description: "שירותי AI, אוטומציה וליווי ארגוני. הופכים AI מתיאוריה למציאות מדידה תוך 90 יום.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${inter.variable} font-sans`}>
        <SuppressHydrationWarnings />
        {children}
      </body>
    </html>
  );
}
