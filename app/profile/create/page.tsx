'use client';

import { TopNav } from "@/components/top-nav"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateProfilePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [profileData, setProfileData] = useState({
    targetRole: '',
    seniority: '',
    industries: [],
    locations: [],
    skills: [],
    yearsExperience: '',
    companySize: '',
    jobType: [],
  })

  const totalSteps = 5

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Save profile and redirect
      router.push('/profile')
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const updateProfileData = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const progress = (step / totalSteps) * 100

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <TopNav />
      
      <main className="mx-auto max-w-[600px] px-6 py-12">
        {/* Progress Bar */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ height: "4px", background: "#E5E7EB", borderRadius: "2px", overflow: "hidden", marginBottom: "12px" }}>
            <div
              style={{
                height: "100%",
                background: "#2563EB",
                width: `${progress}%`,
                transition: "width 0.3s ease",
              }}
            />
          </div>
          <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>
            Step {step} of {totalSteps}
          </p>
        </div>

        {/* Step 1: Target Role */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#0F172A", margin: "0 0 8px 0" }}>
              What's your target role?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 24px 0" }}>
              We'll use this to personalize job matches and recommendations.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Product Analyst", "Data Analyst", "Business Analyst", "Product Manager"].map(role => (
                <button
                  key={role}
                  onClick={() => updateProfileData('targetRole', role)}
                  style={{
                    padding: "16px 20px",
                    background: profileData.targetRole === role ? "#F0F9FF" : "#FFFFFF",
                    border: profileData.targetRole === role ? "2px solid #2563EB" : "1px solid #E5E7EB",
                    borderRadius: "12px",
                    fontSize: "16px",
                    color: "#0F172A",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    if (profileData.targetRole !== role) {
                      e.currentTarget.style.background = "#F8FAFC"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (profileData.targetRole !== role) {
                      e.currentTarget.style.background = "#FFFFFF"
                    }
                  }}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Seniority & Experience */}
        {step === 2 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#0F172A", margin: "0 0 8px 0" }}>
              What's your seniority level?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 24px 0" }}>
              This helps us match you with the right opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {["Entry-level (0-2 years)", "Mid-level (2-5 years)", "Senior (5-10 years)", "Lead (10+ years)"].map(level => (
                <button
                  key={level}
                  onClick={() => updateProfileData('seniority', level)}
                  style={{
                    padding: "16px 20px",
                    background: profileData.seniority === level ? "#F0F9FF" : "#FFFFFF",
                    border: profileData.seniority === level ? "2px solid #2563EB" : "1px solid #E5E7EB",
                    borderRadius: "12px",
                    fontSize: "16px",
                    color: "#0F172A",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    if (profileData.seniority !== level) {
                      e.currentTarget.style.background = "#F8FAFC"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (profileData.seniority !== level) {
                      e.currentTarget.style.background = "#FFFFFF"
                    }
                  }}
                >
                  {level}
                </button>
              ))}
            </div>

            <div>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", display: "block", marginBottom: "8px" }}>
                Years of experience
              </label>
              <input
                type="number"
                value={profileData.yearsExperience}
                onChange={(e) => updateProfileData('yearsExperience', e.target.value)}
                placeholder="e.g., 3"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "inherit",
                }}
              />
            </div>
          </div>
        )}

        {/* Step 3: Industries & Locations */}
        {step === 3 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#0F172A", margin: "0 0 8px 0" }}>
              What industries interest you?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 24px 0" }}>
              Select all that apply (pick at least one).
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              {["SaaS", "FinTech", "AI/ML", "E-commerce", "Healthcare", "EdTech"].map(industry => (
                <button
                  key={industry}
                  onClick={() => {
                    const updated = profileData.industries.includes(industry)
                      ? profileData.industries.filter(i => i !== industry)
                      : [...profileData.industries, industry]
                    updateProfileData('industries', updated)
                  }}
                  style={{
                    padding: "12px 16px",
                    background: profileData.industries.includes(industry) ? "#F0F9FF" : "#FFFFFF",
                    border: profileData.industries.includes(industry) ? "2px solid #2563EB" : "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0F172A",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {industry}
                </button>
              ))}
            </div>

            <div>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", display: "block", marginBottom: "8px" }}>
                Preferred locations
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["Remote", "EU", "US", "Global"].map(loc => (
                  <button
                    key={loc}
                    onClick={() => {
                      const updated = profileData.locations.includes(loc)
                        ? profileData.locations.filter(l => l !== loc)
                        : [...profileData.locations, loc]
                      updateProfileData('locations', updated)
                    }}
                    style={{
                      padding: "12px 16px",
                      background: profileData.locations.includes(loc) ? "#F0F9FF" : "#FFFFFF",
                      border: profileData.locations.includes(loc) ? "2px solid #2563EB" : "1px solid #E5E7EB",
                      borderRadius: "8px",
                      fontSize: "14px",
                      color: "#0F172A",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Key Skills */}
        {step === 4 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#0F172A", margin: "0 0 8px 0" }}>
              What are your core skills?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 24px 0" }}>
              Pick your 3-5 strongest skills.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {["SQL", "Python", "Excel", "Tableau", "Statistics", "A/B Testing", "Product Analytics", "Data Visualization"].map(skill => (
                <button
                  key={skill}
                  onClick={() => {
                    const updated = profileData.skills.includes(skill)
                      ? profileData.skills.filter(s => s !== skill)
                      : [...profileData.skills, skill]
                    updateProfileData('skills', updated)
                  }}
                  style={{
                    padding: "12px 16px",
                    background: profileData.skills.includes(skill) ? "#F0F9FF" : "#FFFFFF",
                    border: profileData.skills.includes(skill) ? "2px solid #2563EB" : "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0F172A",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Company Preferences */}
        {step === 5 && (
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "600", color: "#0F172A", margin: "0 0 8px 0" }}>
              Company preferences?
            </h1>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 24px 0" }}>
              This helps us find the best matches for you.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", display: "block", marginBottom: "12px" }}>
                Company size
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["Startup (1-50)", "Growth (50-500)", "Mid-size (500-5k)", "Enterprise (5k+)"].map(size => (
                  <button
                    key={size}
                    onClick={() => updateProfileData('companySize', size)}
                    style={{
                      padding: "12px 16px",
                      background: profileData.companySize === size ? "#F0F9FF" : "#FFFFFF",
                      border: profileData.companySize === size ? "2px solid #2563EB" : "1px solid #E5E7EB",
                      borderRadius: "8px",
                      fontSize: "14px",
                      color: "#0F172A",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", display: "block", marginBottom: "12px" }}>
                Job type
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["Full-time", "Part-time", "Contract", "Advisory"].map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      const updated = profileData.jobType.includes(type)
                        ? profileData.jobType.filter(t => t !== type)
                        : [...profileData.jobType, type]
                      updateProfileData('jobType', updated)
                    }}
                    style={{
                      padding: "12px 16px",
                      background: profileData.jobType.includes(type) ? "#F0F9FF" : "#FFFFFF",
                      border: profileData.jobType.includes(type) ? "2px solid #2563EB" : "1px solid #E5E7EB",
                      borderRadius: "8px",
                      fontSize: "14px",
                      color: "#0F172A",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{ display: "flex", gap: "12px", marginTop: "48px" }}>
          {step > 1 && (
            <button
              onClick={handleBack}
              style={{
                flex: 1,
                padding: "12px 24px",
                background: "#FFFFFF",
                color: "#64748B",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F8FAFC"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF"
              }}
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={
              (step === 1 && !profileData.targetRole) ||
              (step === 2 && !profileData.seniority) ||
              (step === 3 && profileData.industries.length === 0) ||
              (step === 4 && profileData.skills.length === 0) ||
              (step === 5 && !profileData.companySize)
            }
            style={{
              flex: 1,
              padding: "12px 24px",
              background: [1, 2, 3, 4, 5].some(s => 
                (s === 1 && !profileData.targetRole) ||
                (s === 2 && !profileData.seniority) ||
                (s === 3 && profileData.industries.length === 0) ||
                (s === 4 && profileData.skills.length === 0) ||
                (s === 5 && !profileData.companySize)
              ) && step === s ? "#D1D5DB" : "#2563EB",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s",
              opacity: [1, 2, 3, 4, 5].some(s => 
                (s === 1 && !profileData.targetRole) ||
                (s === 2 && !profileData.seniority) ||
                (s === 3 && profileData.industries.length === 0) ||
                (s === 4 && profileData.skills.length === 0) ||
                (s === 5 && !profileData.companySize)
              ) && step === s ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (e.currentTarget.style.opacity !== "0.6") {
                e.currentTarget.style.background = "#1E40AF"
              }
            }}
            onMouseLeave={(e) => {
              if (e.currentTarget.style.opacity !== "0.6") {
                e.currentTarget.style.background = "#2563EB"
              }
            }}
          >
            {step === totalSteps ? "Create profile" : "Next"}
          </button>
        </div>
      </main>
    </div>
  )
}
