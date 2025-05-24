"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
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
    router.push("/account")
  }

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mt-6 ">
          Create your
          <br />
          PopX account
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative border border-gray-300 rounded-xl bg-gray-50 px-4 pt-5 pb-2 w-full">
  <label
    htmlFor="fullName"
    className="absolute -top-2 left-4 bg-gray-50 px-1 text-sm font-semibold text-purple-600"
  >
    Full Name<span className="text-red-500">*</span>
  </label>
  <input
    id="fullName"
    name="fullName"
    type="text"
    value={formData.fullName}
    onChange={handleChange}
    required
    className="w-full border-none bg-transparent focus:outline-none text-sm mt-1"
  />
</div>



        <div className="relative border border-gray-300 rounded-xl bg-gray-50 px-4 pt-5 pb-2 w-full">
  <label htmlFor="phoneNumber" className="absolute -top-2 left-4 bg-gray-50 px-1 text-sm font-semibold text-purple-600">
    Phone number<span className="text-red-500">*</span>
  </label>
  <input
    id="phoneNumber"
    name="phoneNumber"
    type="text"
    value={formData.phoneNumber}
    onChange={handleChange}
    required
    className="w-full border-none bg-transparent focus:outline-none text-sm mt-1"
  />
</div>


        <div className="relative border border-gray-300 rounded-xl bg-gray-50 px-4 pt-5 pb-2 w-full">
  <label htmlFor="email" className="absolute -top-2 left-4 bg-gray-50 px-1 text-sm font-semibold text-purple-600">
    Email address<span className="text-red-500">*</span>
  </label>
  <input
    id="email"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full border-none bg-transparent focus:outline-none text-sm mt-1"
  />
</div>


        <div className="relative border border-gray-300 rounded-xl bg-gray-50 px-4 pt-5 pb-2 w-full">
  <label htmlFor="password" className="absolute -top-2 left-4 bg-gray-50 px-1 text-sm font-semibold text-purple-600">
    Password<span className="text-red-500">*</span>
  </label>
  <input
    id="password"
    name="password"
    type="password"
    value={formData.password}
    onChange={handleChange}
    required
    className="w-full border-none bg-transparent focus:outline-none text-sm mt-1"
  />
</div>


        <div className="relative border border-gray-300 rounded-xl bg-gray-50 px-4 pt-5 pb-2 w-full">
  <label htmlFor="companyName" className="absolute -top-2 left-4 bg-gray-50 px-1 text-sm font-semibold text-purple-600">
    Company name
  </label>
  <input
    id="companyName"
    name="companyName"
    type="text"
    value={formData.companyName}
    onChange={handleChange}
    className="w-full border-none bg-transparent focus:outline-none text-sm mt-1"
  />
</div>


        <div className="mb-8">
          <label className="required block mb-2">Are you an Agency?<span className="text-red-500">*</span></label>
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
