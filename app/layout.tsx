import { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/common/Navbar";
import ClientOnlyProvider from "../context/ClientOnlyProvider"; // Import the ClientOnlyProvider

export const metadata: Metadata = {
  title: "Craftable",
  description: "Create Your Website In Minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Use ClientOnlyProvider here */}
      <ClientOnlyProvider>
        <body>
          <Navbar />
          {children}
        </body>
      </ClientOnlyProvider>
    </html>
  );
}
