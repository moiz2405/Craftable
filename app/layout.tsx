import { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Craftable",
  description: "Websites Made In Minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
      </body>

    </html>
  );
}
