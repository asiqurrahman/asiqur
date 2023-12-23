import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import StyledComponentsRegistry from "@/lib/registery";
import { ChakraProviders } from "@/lib/chakraRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asiqur Rahman",
  description: "0.5x Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <ChakraProviders>{children}</ChakraProviders>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
