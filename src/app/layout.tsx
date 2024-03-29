import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
      {/* <body className={`${inter.className} flex justify-center xl:bg-gray-100 md:bg-gray-200 sm:bg-gray-300 bg-gray-400`}> */}
      <body className={`${inter.className} flex justify-center`}>
        <div className="flex flex-col items-center md:w-[1080px] w-[90%]">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
