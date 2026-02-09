'use client'

import { TopNav } from "@/components/top-nav"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import {
  ArrowLeft,
  Settings,
  Link2,
  Bell,
  Shield,
  Globe,
  Eye,
  Trash2,
  LogOut,
  ChevronDown,
  User,
  Briefcase,
} from "lucide-react"

type Section = "preferences" | "connections" | "notifications" | "privacy"

export default function SettingsPage() {
  const router = useRouter()
  const { user, signOut, profile } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>("preferences")

  // Toggle states
  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(false)
  const [weeklyDigest, setWeeklyDigest] = useState(true)
  const [profileVisible, setProfileVisible] = useState(true)
  const [activityStatus, setActivityStatus] = useState(true)
  const [jobAlerts, setJobAlerts] = useState(true)
  const [autoApply, setAutoApply] = useState(false)
  const [language, setLanguage] = useState("English")
  const [showLangDropdown, setShowLangDropdown] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const Toggle = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      style={{
        width: 44,
        height: 24,
        borderRadius: 12,
        background: enabled ? "#2563EB" : "#E2E8F0",
        border: "none",
        cursor: "pointer",
        position: "relative",
        transition: "background 200ms ease",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "#FFFFFF",
          position: "absolute",
          top: 3,
          left: enabled ? 23 : 3,
          transition: "left 200ms ease",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
        }}
      />
    </button>
  )

  const sidebarItems: { section: string; items: { id: Section; label: string; icon: React.ComponentType<{ size: number; color?: string; strokeWidth?: number }> }[] }[] = [
    {
      section: "Account",
      items: [
        { id: "preferences", label: "Preferences", icon: Settings },
        { id: "connections", label: "Connections", icon: Link2 },
      ],
    },
    {
      section: "Job Search",
      items: [
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "privacy", label: "Privacy & Security", icon: Shield },
      ],
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <TopNav />

      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "32px 24px 64px",
          display: "flex",
          gap: 48,
        }}
      >
        {/* Left Sidebar */}
        <div style={{ width: 220, flexShrink: 0 }}>
          {/* Back to app */}
          <button
            onClick={() => router.push("/dashboard")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
              color: "#64748B",
              padding: "0 0 24px 0",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
          >
            <ArrowLeft size={15} />
            Back to app
          </button>

          {/* Nav sections */}
          {sidebarItems.map((group) => (
            <div key={group.section} style={{ marginBottom: 24 }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#94A3B8",
                  margin: "0 0 8px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  padding: "0 10px",
                }}
              >
                {group.section}
              </p>
              {group.items.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "9px 10px",
                      background: isActive ? "#F1F5F9" : "transparent",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      transition: "all 150ms ease",
                      textAlign: "left",
                      marginBottom: 2,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = "#F8FAFC"
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = "transparent"
                    }}
                  >
                    <item.icon size={16} color={isActive ? "#0F172A" : "#94A3B8"} strokeWidth={isActive ? 2.2 : 1.8} />
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "#0F172A" : "#64748B",
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* PREFERENCES */}
          {activeSection === "preferences" && (
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: "0 0 6px 0" }}>
                Preferences
              </h1>
              <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 32px 0" }}>
                Manage your account preferences and display settings.
              </p>

              {/* General */}
              <p style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                General
              </p>
              <div
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  background: "#FFFFFF",
                  marginBottom: 32,
                }}
              >
                {/* Job Alerts */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #F1F5F9" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Job Alerts</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Get notified when new jobs match your profile.</p>
                  </div>
                  <Toggle enabled={jobAlerts} onToggle={() => setJobAlerts(!jobAlerts)} />
                </div>

                {/* Auto-apply */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #F1F5F9" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Auto-Apply</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Automatically apply to high-match jobs on your behalf.</p>
                  </div>
                  <Toggle enabled={autoApply} onToggle={() => setAutoApply(!autoApply)} />
                </div>

                {/* Language */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Language</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Choose your preferred display language.</p>
                  </div>
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() => setShowLangDropdown(!showLangDropdown)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "7px 14px",
                        border: "1px solid #E5E7EB",
                        borderRadius: 8,
                        background: "#FFFFFF",
                        cursor: "pointer",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#0F172A",
                        transition: "border-color 150ms ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#CBD5E1")}
                      onMouseLeave={(e) => {
                        if (!showLangDropdown) e.currentTarget.style.borderColor = "#E5E7EB"
                      }}
                    >
                      {language}
                      <ChevronDown size={14} color="#94A3B8" style={{ transition: "transform 200ms ease", transform: showLangDropdown ? "rotate(180deg)" : "rotate(0)" }} />
                    </button>
                    {showLangDropdown && (
                      <div
                        style={{
                          position: "absolute",
                          top: "calc(100% + 6px)",
                          right: 0,
                          width: 160,
                          background: "#FFFFFF",
                          border: "1px solid #E5E7EB",
                          borderRadius: 10,
                          padding: 4,
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                          zIndex: 100,
                        }}
                      >
                        {["English", "French", "German", "Spanish", "Dutch"].map((lang) => (
                          <button
                            key={lang}
                            onClick={() => { setLanguage(lang); setShowLangDropdown(false) }}
                            style={{
                              width: "100%",
                              padding: "8px 12px",
                              background: language === lang ? "#F1F5F9" : "transparent",
                              border: "none",
                              borderRadius: 6,
                              cursor: "pointer",
                              fontSize: 13,
                              fontWeight: language === lang ? 600 : 500,
                              color: language === lang ? "#0F172A" : "#64748B",
                              textAlign: "left",
                              transition: "background 120ms ease",
                            }}
                            onMouseEnter={(e) => { if (language !== lang) e.currentTarget.style.background = "#F8FAFC" }}
                            onMouseLeave={(e) => { if (language !== lang) e.currentTarget.style.background = "transparent" }}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Profile */}
              <p style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Profile
              </p>
              <div
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  background: "#FFFFFF",
                }}
              >
                {/* Name */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #F1F5F9" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Full Name</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>{user?.name || "Not set"}</p>
                  </div>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      padding: "7px 14px",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#64748B",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#CBD5E1" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#E5E7EB" }}
                  >
                    Edit
                  </button>
                </div>

                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #F1F5F9" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Email Address</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>{user?.email || "Not set"}</p>
                  </div>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      padding: "7px 14px",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#64748B",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#CBD5E1" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#E5E7EB" }}
                  >
                    Edit
                  </button>
                </div>

                {/* Target Role */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Target Role</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>{profile?.target_role || profile?.current_role || "Not set"}</p>
                  </div>
                  <button
                    onClick={() => router.push("/profile/preferences")}
                    style={{
                      background: "transparent",
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      padding: "7px 14px",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#64748B",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#CBD5E1" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#E5E7EB" }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CONNECTIONS */}
          {activeSection === "connections" && (
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: "0 0 6px 0" }}>
                Connections
              </h1>
              <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 32px 0" }}>
                Manage your linked accounts and integrations.
              </p>

              <div
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  background: "#FFFFFF",
                }}
              >
                {[
                  { name: "LinkedIn", desc: "Import profile data and track applications", connected: true, color: "#0A66C2" },
                  { name: "Gmail", desc: "Track responses and send applications", connected: true, color: "#EA4335" },
                  { name: "Outlook", desc: "Email tracking and calendar scheduling", connected: false, color: "#0078D4" },
                  { name: "Indeed", desc: "Sync job listings and application status", connected: false, color: "#2164F3" },
                ].map((platform, i, arr) => (
                  <div
                    key={platform.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 20px",
                      borderBottom: i < arr.length - 1 ? "1px solid #F1F5F9" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: platform.color + "14",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 14,
                          fontWeight: 700,
                          color: platform.color,
                        }}
                      >
                        {platform.name.charAt(0)}
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 3px 0" }}>
                          {platform.name}
                        </p>
                        <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>
                          {platform.desc}
                        </p>
                      </div>
                    </div>
                    {platform.connected ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#16A34A" }}>Connected</span>
                        <button
                          style={{
                            background: "transparent",
                            border: "1px solid #E5E7EB",
                            borderRadius: 8,
                            padding: "6px 12px",
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#94A3B8",
                            cursor: "pointer",
                            transition: "all 150ms ease",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = "#EF4444"; e.currentTarget.style.borderColor = "#FECACA" }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.borderColor = "#E5E7EB" }}
                        >
                          Disconnect
                        </button>
                      </div>
                    ) : (
                      <button
                        style={{
                          background: "#0F172A",
                          border: "none",
                          borderRadius: 8,
                          padding: "7px 16px",
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#FFFFFF",
                          cursor: "pointer",
                          transition: "all 150ms ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#1E293B")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#0F172A")}
                      >
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeSection === "notifications" && (
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: "0 0 6px 0" }}>
                Notifications
              </h1>
              <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 32px 0" }}>
                Choose how and when you want to be notified.
              </p>

              <p style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Channels
              </p>
              <div
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  background: "#FFFFFF",
                  marginBottom: 32,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #F1F5F9" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Email Notifications</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Receive updates about new matches and responses.</p>
                  </div>
                  <Toggle enabled={emailNotif} onToggle={() => setEmailNotif(!emailNotif)} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #F1F5F9" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Push Notifications</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Get real-time browser alerts for urgent updates.</p>
                  </div>
                  <Toggle enabled={pushNotif} onToggle={() => setPushNotif(!pushNotif)} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Weekly Digest</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>A summary of your job search activity every Monday.</p>
                  </div>
                  <Toggle enabled={weeklyDigest} onToggle={() => setWeeklyDigest(!weeklyDigest)} />
                </div>
              </div>

              <p style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Activity
              </p>
              <div
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  background: "#FFFFFF",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Show Activity Status</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Let employers see that you are actively searching.</p>
                  </div>
                  <Toggle enabled={activityStatus} onToggle={() => setActivityStatus(!activityStatus)} />
                </div>
              </div>
            </div>
          )}

          {/* PRIVACY & SECURITY */}
          {activeSection === "privacy" && (
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: "0 0 6px 0" }}>
                Privacy & Security
              </h1>
              <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 32px 0" }}>
                Control your visibility and manage your data.
              </p>

              <p style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Visibility
              </p>
              <div
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  background: "#FFFFFF",
                  marginBottom: 32,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Profile Visible to Recruiters</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Allow recruiters to discover and view your profile.</p>
                  </div>
                  <Toggle enabled={profileVisible} onToggle={() => setProfileVisible(!profileVisible)} />
                </div>
              </div>

              <p style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Data
              </p>
              <div
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  background: "#FFFFFF",
                  marginBottom: 32,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #F1F5F9" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Export Data</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Download a copy of all your data.</p>
                  </div>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      padding: "7px 14px",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#64748B",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#CBD5E1" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#E5E7EB" }}
                  >
                    Export
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Clear Search History</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Remove all saved searches and recent activity.</p>
                  </div>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      padding: "7px 14px",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#64748B",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#CBD5E1" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#E5E7EB" }}
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Danger Zone */}
              <p style={{ fontSize: 13, fontWeight: 600, color: "#EF4444", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Danger Zone
              </p>
              <div
                style={{
                  border: "1px solid #FECACA",
                  borderRadius: 12,
                  background: "#FFFFFF",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #FEF2F2" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Delete Account</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Permanently remove your account and all data.</p>
                  </div>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid #FECACA",
                      borderRadius: 8,
                      padding: "7px 14px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#EF4444",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#FEF2F2"; e.currentTarget.style.borderColor = "#EF4444" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#FECACA" }}
                  >
                    Delete
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>Sign Out</p>
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>Log out of your account on this device.</p>
                  </div>
                  <button
                    onClick={signOut}
                    style={{
                      background: "transparent",
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      padding: "7px 14px",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#64748B",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#CBD5E1" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#E5E7EB" }}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
