import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Authprovider from "@/components/Admin-panel/Authprovider";
import App from "./App";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>
          <App>
            {children}
          </App>
        </Authprovider>

        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
