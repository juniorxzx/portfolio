import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "@/lib/register";
import { GlobalProvider } from "@/context/GlobalContext";
import { ThemeProviderNext } from "@/context/ThemeProvider";
import { GlobalStyles } from "@/assets/styles/global";
import Header from "@/components/header/header";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by JR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalProvider>
      <StyledComponentsRegistry>
        <ThemeProviderNext>
          <GlobalStyles />
          <html lang="pt-BR">
            <body className={font.className}>
              {/* <Header /> */}
              {children}
            </body>
          </html>
        </ThemeProviderNext>
      </StyledComponentsRegistry>
    </GlobalProvider>
  );
}
