import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Progbiz Private Limited",
  description:
    "We at progbiz offers Corporate Branding Services. Our team can offer you the best branding services like logo designing,brand logo making and advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="flex h-screen w-full bg-gray-50  ">
          <Sidebar />
          <div className="px-7 h-full py-6 flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
