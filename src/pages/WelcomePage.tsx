"use client"

import { useNavigate } from "react-router-dom"

export default function WelcomePage() {
  const navigate = useNavigate()

  return (
    <div className="welcome-container">
      <div>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="button-container">
          <button className="btn-primary" onClick={() => navigate("/register")}>
            Create Account
          </button>

          <button className="btn-secondary" onClick={() => navigate("/login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}
