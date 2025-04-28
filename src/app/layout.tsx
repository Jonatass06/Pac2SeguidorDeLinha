import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full bg-[#CACACA]">
      <body
        className="w-full h-full"
      >
        {children}
      </body>
    </html>
  );
}
