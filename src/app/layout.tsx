import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sahityasrijanwasamvad.online"),
  title: {
    default: "साहित्य सृजन संवाद",
    template: "%s | साहित्य सृजन संवाद",
  },
  description: "कला संस्कृति चिंतन का पोर्टल।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className="antialiased">{children}</body>
    </html>
  );
}