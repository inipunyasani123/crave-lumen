'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send, ShieldCheck } from 'lucide-react'

export default function ContactSupport() {
  const [mode, setMode] = useState('chat') // 'chat' | 'email'

  return (
    <section className="bg-day text-slate-ink py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight">
            Contact Our Support Team
          </h2>
          <p className="text-lg text-slate-soft">
            We’re here to help — fast, friendly, and fully private.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex justify-center gap-6 text-sm font-medium">
          <button
            onClick={() => setMode('chat')}
            className={`px-4 py-2 rounded-full border transition ${
              mode === 'chat'
                ? 'bg-slate-ink text-day border-slate-ink/12 shadow'
                : 'text-slate-soft border-slate-ink/12 hover:border-slate-ink/12 hover:text-slate-ink'
            }`}
          >
            <MessageSquare className="inline-block w-4 h-4 mr-1" />
            Live Chat Request
          </button>
          <button
            onClick={() => setMode('email')}
            className={`px-4 py-2 rounded-full border transition ${
              mode === 'email'
                ? 'bg-slate-ink text-day border-slate-ink/12 shadow'
                : 'text-slate-soft border-slate-ink/12 hover:border-slate-ink/12 hover:text-slate-ink'
            }`}
          >
            <Mail className="inline-block w-4 h-4 mr-1" />
            Email Support
          </button>
        </div>

        {/* Contact Form */}
        <div className="bg-day border border-slate-ink/12 rounded-xl p-8 md:p-12 shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Aulia W."
                className="w-full border border-slate-ink/12 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-slate-ink/12 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium">
              {mode === 'chat' ? 'Chat Message' : 'Your Issue or Question'}
            </label>
            <textarea
              rows={5}
              placeholder={
                mode === 'chat'
                  ? 'I’d like to talk to someone about...'
                  : 'I have a concern about order #1234...'
              }
              className="w-full border border-slate-ink/12 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-slate-ink hover:bg-slate-ink text-day font-semibold rounded-xl transition">
            <Send size={16} />
            Submit Request
          </button>

          <div className="flex items-center gap-2 text-sm text-slate-soft mt-2">
            <ShieldCheck size={16} className="text-slate-soft" />
            We respond within 12 hours, 7 days a week — fully private & secure.
          </div>
        </div>
      </div>
    </section>
  )
}
