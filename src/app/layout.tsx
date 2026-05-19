import type { Metadata } from "next";
import "../../src/app/styles/css/bootstrap.min.css";
import "../../src/app/styles/css/style.css";
import "../../src/app/styles/css/style-2.css";
import "../../src/app/styles/css/style-3.css";
import "../../src/app/styles/css/style-4.css";
import "../../src/app/styles/css/style-5.css";
import ClientPreloader from "./components/ClientPreloader";
import ClientErrorBoundary from "./components/ClientErrorBoundary";
import { dmSans, monaSans, outfit, playfairDisplay } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Saasflow | React Next JS Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} ${monaSans.variable} ${outfit.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"></link>
      </head>
      <body className="scroll-smooth" suppressHydrationWarning>
        <ClientErrorBoundary>
          <ClientPreloader />
          {children}
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
