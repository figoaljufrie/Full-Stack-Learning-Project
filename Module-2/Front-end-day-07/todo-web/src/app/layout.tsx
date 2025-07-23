import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat ({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-monserrat'
})

export const metadata: Metadata = {
  title: "Your Personal To-Do Manager",
  description: "Productive On Your Finest Way!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
