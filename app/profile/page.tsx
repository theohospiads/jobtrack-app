'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProfilePage() {
  const router = useRouter()

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        {/* Page Header */}
        <header className="mb-12">
          <h1
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Profile
          </h1>
          <p style={{ fontSize: "14px", color: "#64748B", margin: "8px 0 0 0" }}>
            Who you are, what you want — so the system makes better decisions for you
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {/* 1. Identity Hero Section */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: "0 0 12px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Current Role
                </p>
                <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#0F172A", margin: "0 0 16px 0" }}>
                  Senior Product Analyst
                </h2>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: "#94A3B8", margin: "0 0 6px 0", textTransform: "uppercase" }}>
                      Experience
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                      4 years
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: "#94A3B8", margin: "0 0 6px 0", textTransform: "uppercase" }}>
                      Location
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                      Remote EU
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: "600", color: "#94A3B8", margin: "0 0 6px 0", textTransform: "uppercase" }}>
                      Type
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                      Full-time
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => router.push('/profile/edit')}
                style={{
                  background: "#2563EB",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  letterSpacing: "-0.2px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  height: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1E40AF"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB"
                }}
              >
                Edit
              </button>
            </div>
          </section>

          {/* 2. What You're Looking For */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div style={{ marginBottom: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Target Roles
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Target 1 */}
              <div
                style={{
                  padding: "14px 16px",
                  background: "#EFF6FF",
                  border: "2px solid #2563EB",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#2563EB", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                    Primary
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                    Senior Product Analyst
                  </p>
                </div>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#0369A1" }}>92% fit</span>
              </div>

              {/* Target 2 */}
              <div
                style={{
                  padding: "14px 16px",
                  background: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                    Secondary
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                    Product Manager
                  </p>
                </div>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748B" }}>85% fit</span>
              </div>
            </div>
          </section>

          {/* 3. Key Strengths */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div style={{ marginBottom: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Key Skills
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["A/B Testing", "User Research", "SQL", "Data Visualization", "Leadership"].map((strength) => (
                <div
                  key={strength}
                  style={{
                    padding: "8px 12px",
                    background: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "500",
                    color: "#0369A1",
                  }}
                >
                  {strength}
                </div>
              ))}
            </div>
          </section>

          {/* 4. Preferences & Search Settings */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div style={{ marginBottom: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Preferences
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: "600", color: "#94A3B8", margin: "0 0 6px 0", textTransform: "uppercase" }}>
                  Salary
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  €80k – €120k
                </p>
              </div>

              <div>
                <p style={{ fontSize: "11px", fontWeight: "600", color: "#94A3B8", margin: "0 0 6px 0", textTransform: "uppercase" }}>
                  Company
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  B2B SaaS
                </p>
              </div>

              <div>
                <p style={{ fontSize: "11px", fontWeight: "600", color: "#94A3B8", margin: "0 0 6px 0", textTransform: "uppercase" }}>
                  Work
                </p>
                <p style={{ fontSize: "15px", fontWeight: "600", color: "#0F172A", margin: 0 }}>
                  Remote only
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
