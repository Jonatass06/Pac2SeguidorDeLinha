import Header from "@/components/header";
import "./globals.css";
import { use } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full bg-background">
      <body
        className="w-full h-full"
      >
        <Header ></Header>
        {children}
      </body>
    </html>
  );
}
