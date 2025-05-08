import Header from "@/components/header";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overflow-hidden">
      <body className="w-full h-full dark">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
