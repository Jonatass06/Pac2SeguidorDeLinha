import Header from "@/components/header";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full overflow-hidden">
        <body className="w-full h-full relative">
      <ThemeProvider>
          <Header></Header>
          {children}
      </ThemeProvider>

        </body>
    </html>
  );
}
