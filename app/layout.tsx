import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code Club",
  description: "Learn Scratch, Python and Web Development",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900`}>
        <MobileNav />

        <div className="flex min-h-[calc(100vh-64px)]">
          <Sidebar />

          <div className="flex-1 flex flex-col">
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}