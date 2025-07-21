import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To-do-list",
  description: "Productivity is the main thing in life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
