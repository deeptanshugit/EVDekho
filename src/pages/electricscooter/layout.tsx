import { Inter } from "next/font/google";
import NavigationBar from "@/app/components/navbar/navbar";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavigationBar />
        {children}
        </body>
    </html>
  );
}
