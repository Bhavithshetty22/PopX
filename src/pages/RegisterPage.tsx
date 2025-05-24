"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, id } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? id : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Validate form data here before navigation

    router.push("/account");
  };

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1>
          Create your
          <br />
          PopX account
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
        <div className="input-group">
          <label htmlFor="fullName" className="required">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="phoneNumber" className="required">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="required">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
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
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
          />
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
  );
}
