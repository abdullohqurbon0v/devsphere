import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-roboto",
  subsets: ["cyrillic", "latin"],
});
const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Startup Oquv platformasi",
  description: "Dasturlash kurslarini mutlaqo tekin organing",
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
        className={`${roboto.variable} ${montserrat.variable}  antialiased`}
        suppressHydrationWarning
      >
        {/* <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
        </ThemeProvider> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
