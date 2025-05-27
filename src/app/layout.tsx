import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/utils/client-layout";

export const metadata: Metadata = {
  title: "LevelUP - GYM"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased dark`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
