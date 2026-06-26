import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "升學指南針｜基北區高中職互動地圖",
  description: "給國中生、家長與輔導老師使用的基北區高中職互動地圖。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
