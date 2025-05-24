"use client"
import { useRouter } from "next/navigation"

export default function WelcomePage() {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-between min-h-screen p-6">
      <div className="mt-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to PopX</h1>
        <p className="text-2xl text-gray-500 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="space-y-4">
          <button className="btn-primary" onClick={() => router.push("/register")}>
            Create Account
          </button>

          <button className="btn-secondary" onClick={() => router.push("/login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}
