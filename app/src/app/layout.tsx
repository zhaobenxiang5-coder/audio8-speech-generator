import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audio8 Speech Generator - Free Online AI Voice & ASR Studio",
  description: "Experience infinite-length AI voice generation and speech recognition with Audio8 online for free. Zero hardware installation.",
  keywords: ["audio8 speech generator", "audio8 asr online", "ai voice cloner free", "speech to text 2026"],
  openGraph: {
    title: "Audio8 Speech Generator - Free Online AI Voice Studio",
    description: "Generate natural AI speech and transcriptions with Audio8.",
    url: "https://zhaobenxiang5-coder.github.io/audio8-speech-generator/",
    siteName: "Audio8Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Audio8 Speech Generator",
        "url": "https://zhaobenxiang5-coder.github.io/audio8-speech-generator/",
        "applicationCategory": "AudioApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "description": "Infinite-length speech generation and recognition with Audio8 architecture."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Audio8 Speech Generator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Audio8 is a breakthrough 4B audio-language foundation model designed for ultra-low latency text-to-speech synthesis and infinite-context automatic speech recognition."
            }
          },
          {
            "@type": "Question",
            "name": "Can I clone voices commercially?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, commercial audio licensing is granted for podcasts, YouTube video narration, audiobooks, and indie game characters."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
