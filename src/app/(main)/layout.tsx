import Footer from "@/components/general/footer";
import Header from "@/components/general/header";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
