import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tran Minh Chien — Digital Experiences",
  description: "A cinematic portfolio for Tran Minh Chien.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
