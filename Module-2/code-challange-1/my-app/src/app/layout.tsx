import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Figo",
  description: "Here is my experiences, projects, and contacts!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= "antialiased"
      >
        {children}
      </body>
    </html>
  );
}
