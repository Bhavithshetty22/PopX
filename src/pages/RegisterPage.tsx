"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RegisterPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phoneNumber: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: "yes",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === "radio" ? e.target.id : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate and submit the form data
    navigate("/account")
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1>
          Create your
          <br />
          PopX account
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="input-group">
          <label htmlFor="fullName" className="required">
            Full Name
          </label>
          <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label htmlFor="phoneNumber" className="required">
            Phone number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="required">
            Email address
          </label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="required">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="companyName">Company name</label>
          <input id="companyName" name="companyName" type="text" value={formData.companyName} onChange={handleChange} />
        </div>

        <div className="mb-8">
          <label className="required block mb-2">Are you an Agency?</label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="yes"
                name="isAgency"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
                required
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="no"
                name="isAgency"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
                required
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}
