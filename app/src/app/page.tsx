"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Zap, CheckCircle2, Shield, Flame, Mic, Volume2, CreditCard, BarChart3 } from "lucide-react";

export default function Home() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("Narrator Pro");
  const [status, setStatus] = useState<string | null>(null);
  const [stats, setStats] = useState<{ totalVisits: number; generateClicks: number }>({ totalVisits: 0, generateClicks: 0 });

  useEffect(() => {
    try {
      const v = parseInt(localStorage.getItem("audio8_visits") || "0", 10) + 1;
      localStorage.setItem("audio8_visits", v.toString());
      const c = parseInt(localStorage.getItem("audio8_clicks") || "0", 10);
      setStats({ totalVisits: v, generateClicks: c });
    } catch (e) {}
  }, []);

  const handleAction = async () => {
    if (!text.trim()) {
      setStatus("Please enter script or text to synthesize speech.");
      return;
    }
    try {
      const newClicks = stats.generateClicks + 1;
      localStorage.setItem("audio8_clicks", newClicks.toString());
      setStats((prev) => ({ ...prev, generateClicks: newClicks }));
    } catch (e) {}

    window.location.href = "/audio8-speech-generator/pricing/";
  };

  return (
    <main className="w-full flex flex-col items-center px-4 py-10 md:py-16 max-w-5xl mx-auto">
      <div className="w-full flex justify-between items-center mb-8 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2 font-bold text-white text-base md:text-lg">
          <Volume2 className="w-5 h-5 text-indigo-400" />
          <span>Audio8 Voice Studio</span>
        </div>
        <Link
          href="/pricing/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all"
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>Pricing & Credits</span>
        </Link>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs md:text-sm mb-6 animate-pulse">
        <Flame className="w-4 h-4 text-orange-400" />
        <span>Trending: Audio8 Infinite-Context Neural Engine</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white mb-6">
        Free Online <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">Audio8 Speech Generator</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-10">
        Generate natural human-like voiceovers and audiobooks in seconds. High dynamic emotional nuance and multi-language support.
      </p>

      <div className="w-full max-w-2xl bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-xl mb-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Speech Script:
            </label>
            <div className="flex gap-2 text-xs">
              {["Narrator Pro", "Warm Female", "Epic Movie", "Podcast Host"].map((v) => (
                <button
                  key={v}
                  onClick={() => setVoice(v)}
                  className={`px-2 py-0.5 rounded-md transition-colors ${
                    voice === v ? "bg-indigo-600 text-white" : "bg-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. Welcome back to another episode of Future Tech. Today we are diving deep into neural audio synthesis..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-gray-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[90px] resize-none"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" /> 10,000 Free Speech Characters included
            </span>
            <button
              onClick={handleAction}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm px-6 py-2.5 rounded-xl shadow-lg transition-all transform active:scale-95"
            >
              <span>Generate Audio</span>
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
          <span className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-indigo-400" /> Live Interaction Tracker
          </span>
          <div className="flex gap-4">
            <span>Visits: <strong className="text-zinc-300">{stats.totalVisits}</strong></span>
            <span>Voices: <strong className="text-indigo-400">{stats.generateClicks}</strong></span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16">
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <Zap className="w-8 h-8 text-indigo-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Humanlike Emotion</h3>
          <p className="text-xs text-gray-400">Micro-intonations, realistic breathing, and dynamic pacing that sounds indistinguishable from real humans.</p>
        </div>
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Infinite Context</h3>
          <p className="text-xs text-gray-400">Capable of generating full audiobook chapters without memory drift or voice pitch changes.</p>
        </div>
        <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col items-center text-center">
          <Shield className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="font-semibold text-white mb-1">Commercial Audio Rights</h3>
          <p className="text-xs text-gray-400">Use all voice outputs in monetization channels like YouTube, TikTok, and Spotify.</p>
        </div>
      </div>

      <footer className="mt-20 text-center text-xs text-zinc-600">
        © 2026 Audio8 Voice Studio. All rights reserved.
      </footer>
    </main>
  );
}
