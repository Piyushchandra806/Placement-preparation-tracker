import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/context/ProgressContext";
import { ReminderProvider } from "@/context/ReminderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mission 90 — Placement Preparation Tracker",
  description:
    "Your 90-Day Placement Journey. Track DSA, Aptitude, Reasoning & English preparation with a structured daily study plan.",
  keywords: [
    "placement preparation",
    "DSA",
    "aptitude",
    "reasoning",
    "english",
    "study tracker",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('mission90_theme') === 'dark' || (!localStorage.getItem('mission90_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ProgressProvider>
          <ReminderProvider>{children}</ReminderProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
