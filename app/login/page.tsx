"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate and authenticate here
    router.push("/account")
  }

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="text-xl text-gray-500">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="relative border border-gray-300 rounded-xl bg-gray-50 px-4 pt-5 pb-2 w-full">
  <label
    htmlFor="email"
    className="absolute -top-2 left-4 bg-gray-50 px-1 text-sm font-semibold text-purple-600"
  >
    Email Address <span className="text-red-500">*</span>
  </label>
  <input
    id="email"
    type="email"
    placeholder="Enter email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full border-none bg-transparent focus:outline-none text-sm mt-1"
  />
</div>


        <div className="relative border border-gray-300 rounded-xl bg-gray-50 px-4 pt-5 pb-2 w-full">
  <label
    htmlFor="password"
    className="absolute -top-2 left-4 bg-gray-50 px-1 text-sm font-semibold text-purple-600"
  >
    Password <span className="text-red-500">*</span>
  </label>
  <input
    id="password"
    type="password"
    placeholder="Enter password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full border-none bg-transparent focus:outline-none text-sm mt-1"
  />
</div>


        <button type="submit" className="btn-gray">
          Login
        </button>
      </form>
    </div>
  )
}
