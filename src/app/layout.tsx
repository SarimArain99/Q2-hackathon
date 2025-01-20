import type { Metadata } from "next";
import "./globals.css";
import { ShopProvider } from "../../context/ShopContext";

export const metadata: Metadata = {
  title: "Hekto - Find Your Perfect Furniture Match",
  description:
    "Find your perfect furniture match at Hekto. Our diverse selection of stylish and comfortable pieces ensures you'll meet your ideal home decor needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <ShopProvider>
        <body>{children}</body>
      </ShopProvider>
    </html>
  );
}
