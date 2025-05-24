"use client";

import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="welcome-container">
      <div>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="button-container">
          <button className="btn-primary" onClick={() => router.push("/register")}>
            Create Account
          </button>

          <button className="btn-secondary" onClick={() => router.push("/login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
