'use client'

import { useState } from 'react'
import { Eye, EyeOff, Lock, User } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="min-h-screen bg-day text-slate-ink py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 items-center gap-20">
        
        {/* Welcome Message */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold font-serif tracking-tight">
            Welcome back.
          </h2>
          <p className="text-slate-soft text-lg max-w-md">
            Enter your details to access your curated intimacy experience. All information is encrypted and confidential.
          </p>

          <div className="flex items-center gap-3 text-sm text-slate-soft">
            <Lock size={16} className="text-slate-soft" />
            Encrypted & Private Login System
          </div>
        </div>

        {/* Login Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-day-2 border border-slate-ink/12 rounded-2xl p-10 shadow-lg w-full space-y-6"
        >
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 pr-10 border border-slate-ink/12 rounded-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none"
                required
              />
              <User className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-soft" size={18} />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-10 border border-slate-ink/12 rounded-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-soft hover:text-slate-soft"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-zinc-600" />
              Remember me
            </label>
            <a href="/forgot" className="text-slate-soft hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-slate-ink text-day rounded-xl font-semibold hover:bg-slate-ink transition shadow-lg"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-slate-soft">
            Don’t have an account?{' '}
            <a href="/register" className="text-slate-soft hover:underline font-medium">
              Register here
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}
