'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

export default function ProfilePage() {
  const router = useRouter()
  const { user, profile } = useAuth()

  // Derive display values from onboarding data
  const profileType = profile?.profile_type || ""
  const currentRole = profile?.current_role || profile?.target_role || "Not set"
  const workLocation = profile?.work_location === "remote" ? "Remote" : profile?.work_location === "on-site" ? "On-site" : profile?.work_location === "hybrid" || profile?.work_location === "flexible" ? "Flexible" : "Not set"
  const experience = profile?.experience || profile?.years_experience || ""
  const fieldOfStudy = profile?.field_of_study || ""
  const lookingFor = profile?.looking_for === "similar" ? "Similar role, better company" : profile?.looking_for === "growth" ? "Growth opportunity" : profile?.looking_for === "change" ? "Career pivot" : ""
  const salaryRange = profile?.salary_expectations ? `$${profile.salary_expectations}k` : ""
  const graduation = profile?.graduation === "this-year" ? "This year" : profile?.graduation === "next-year" ? "Next year" : profile?.graduation === "later" ? "1+ year away" : ""
  const targetRoleType = profile?.target_role === "internship" ? "Internship" : profile?.target_role === "entry-level" ? "Entry-level" : profile?.target_role === "both" ? "Internship & Entry-level" : ""

  // Build dynamic assets based on profile data
  const assets = []
  if (currentRole && currentRole !== "Not set") {
    assets.push({ label: currentRole, detail: experience ? `${experience} years of experience` : "Your primary expertise", strength: "Top skill" })
  }
  if (workLocation !== "Not set") {
    assets.push({ label: `${workLocation} work preference`, detail: profileType === "student" ? "Flexible for internships & entry roles" : "Proven ability to deliver remotely", strength: "Differentiator" })
  }
  if (fieldOfStudy) {
    assets.push({ label: fieldOfStudy, detail: "Academic background", strength: "Foundation" })
  }
  if (lookingFor) {
    assets.push({ label: lookingFor, detail: "Career direction", strength: "Focus" })
  }
  if (assets.length === 0) {
    assets.push(
      { label: "Product Analytics", detail: "SQL, A/B testing, metrics design", strength: "Top skill" },
      { label: "Cross-functional Communication", detail: "Stakeholder alignment & storytelling with data", strength: "High demand" },
      { label: "Remote-first Experience", detail: "Proven async collaboration & self-management", strength: "Differentiator" },
    )
  }

  // Primary career target
  const primaryTarget = profile?.current_role || profile?.target_role || "Product Analyst"
  const primarySubtitle = profileType === "student" ? (targetRoleType || "Best match for your profile") : "Best match for your profile"

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        {/* Page Header */}
        <header className="mb-8">
          <h1
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Profile
          </h1>
        </header>

        <div className="flex flex-col gap-8">
          {/* 1. Your Best Assets */}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 className="text-base font-semibold" style={{ color: "#0F172A", margin: 0 }}>
                Your Best Assets
              </h2>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "#94A3B8", margin: 0 }}>
                What makes you stand out to employers
              </p>
            </div>

            {/* Top strengths */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {assets.map((asset) => (
                <div
                  key={asset.label}
                  style={{
                    padding: "14px",
                    background: "#F8FAFC",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", margin: "0 0 3px 0" }}>
                      {asset.label}
                    </p>
                    <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
                      {asset.detail}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#2563EB",
                      background: "#EFF6FF",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {asset.strength}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. View profile information */}
          <section
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
            }}
          >
            <p style={{ fontSize: "13px", color: "#64748B", margin: 0, lineHeight: "1.5", flex: 1 }}>
              This information is used to build your profile and generate your CV.
            </p>
            <button
              onClick={() => router.push('/profile/preferences')}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                padding: "11px 18px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "-0.2px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
              }}
            >
              View profile details
            </button>
          </section>

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
            <h2 className="text-base font-semibold" style={{ color: "#0F172A", marginBottom: "20px" }}>
              Career Targets
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Primary Focus */}
              <div
                style={{
                  padding: "20px",
                  background: "#F0F9FF",
                  borderRadius: "12px",
                  border: "2px solid #2563EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span
                      style={{
                        background: "#2563EB",
                        color: "#FFFFFF",
                        padding: "3px 10px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontWeight: "700",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      PRIMARY
                    </span>
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    {primaryTarget}
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                    {primarySubtitle}
                  </p>
                </div>
                <button
                  style={{
                    background: "#2563EB",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1E40AF"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#2563EB"
                  }}
                >
                  Search jobs
                </button>
              </div>

              {/* Secondary Option */}
              <div
                style={{
                  padding: "20px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    BI Analyst
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                    Growing demand, strong fit
                  </p>
                </div>
                <button
                  style={{
                    background: "#FFFFFF",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F1F5F9"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF"
                  }}
                >
                  Include in search
                </button>
              </div>

              {/* Stretch Option */}
              <div
                style={{
                  padding: "20px",
                  background: "#F8FAFC",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#0F172A", margin: "0 0 4px 0" }}>
                    Data Analyst
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 6px 0" }}>
                    Skill gap: Advanced experimentation
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      color: "#2563EB",
                      border: "none",
                      padding: "0",
                      fontSize: "12px",
                      fontWeight: "500",
                      cursor: "pointer",
                      textDecoration: "underline",
                      marginTop: "4px",
                    }}
                  >
                    Learn skill
                  </button>
                </div>
                <button
                  style={{
                    background: "#FFFFFF",
                    color: "#2563EB",
                    border: "1px solid #E5E7EB",
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F1F5F9"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFFFFF"
                  }}
                >
                  Add to search
                </button>
              </div>
            </div>
          </section>



          {/* 6. CV Generator */}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px" }}>
              <div>
                <h2 className="text-base font-semibold" style={{ color: "#0F172A", margin: "0 0 4px 0" }}>
                  CV Generator
                </h2>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
                  Your baseline, system-generated CV
                </p>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#64748B", margin: "0 0 16px 0" }}>
              This is a professional CV generated from your profile. It's not tailored to specific jobs — per-job optimization happens during the application process.
            </p>
            <button
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                padding: "10px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1E40AF"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
              }}
            >
              Download CV
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11L4 7M8 11L12 7M8 11V2M2 13H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
