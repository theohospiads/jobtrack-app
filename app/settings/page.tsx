'use client'

import { TopNav } from "@/components/top-nav"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronRight, Bell, Shield, Globe, Eye, Trash2, ExternalLink } from "lucide-react"

export default function SettingsPage() {
  const router = useRouter()
  const { user, signOut } = useAuth()
  const [mounted, setMounted] = useState(false)

  // Toggle states
  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(false)
  const [weeklyDigest, setWeeklyDigest] = useState(true)
  const [profileVisible, setProfileVisible] = useState(true)

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

  const SettingRow = ({
    icon: Icon,
    label,
    description,
    action,
  }: {
    icon: React.ComponentType<{ size: number; color: string }>
    label: string
    description: string
    action: React.ReactNode
  }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        borderBottom: "1px solid #F1F5F9",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flex: 1 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "#F8FAFC",
            border: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          <Icon size={16} color="#64748B" />
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 3px 0" }}>
            {label}
          </p>
          <p style={{ fontSize: 12, color: "#94A3B8", margin: 0 }}>
            {description}
          </p>
        </div>
      </div>
      <div style={{ flexShrink: 0, marginLeft: 16 }}>
        {action}
      </div>
    </div>
  )

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[720px] px-6 pt-8 pb-16">

        {/* Page header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: "0 0 6px 0" }}>
            Settings
          </h1>
          <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
            Manage your account preferences and privacy
          </p>
        </div>

        {/* Account section */}
        <div
          className="rounded-2xl p-6 transition-all duration-300"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            marginBottom: 20,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          <h2 style={{ fontSize: 14, fontWeight: 600, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Account
          </h2>

          {/* Account info row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 0",
              borderBottom: "1px solid #F1F5F9",
              cursor: "pointer",
            }}
            onClick={() => router.push("/account")}
            onMouseEnter={(e) => {
              const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement
              if (arrow) arrow.style.transform = "translateX(2px)"
            }}
            onMouseLeave={(e) => {
              const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement
              if (arrow) arrow.style.transform = "translateX(0)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  flexShrink: 0,
                }}
              >
                {user?.name ? user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2) : "U"}
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 2px 0" }}>
                  {user?.name || "User"}
                </p>
                <p style={{ fontSize: 12, color: "#94A3B8", margin: 0 }}>
                  {user?.email || "user@email.com"}
                </p>
              </div>
            </div>
            <ChevronRight className="arrow" size={16} color="#94A3B8" style={{ transition: "transform 150ms ease" }} />
          </div>

          {/* Connected accounts */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 0",
              cursor: "pointer",
            }}
            onClick={() => router.push("/connect-accounts")}
            onMouseEnter={(e) => {
              const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement
              if (arrow) arrow.style.transform = "translateX(2px)"
            }}
            onMouseLeave={(e) => {
              const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement
              if (arrow) arrow.style.transform = "translateX(0)"
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <ExternalLink size={16} color="#64748B" />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 3px 0" }}>
                  Connected Accounts
                </p>
                <p style={{ fontSize: 12, color: "#94A3B8", margin: 0 }}>
                  LinkedIn, Gmail, Indeed
                </p>
              </div>
            </div>
            <ChevronRight className="arrow" size={16} color="#94A3B8" style={{ transition: "transform 150ms ease" }} />
          </div>
        </div>

        {/* Notifications section */}
        <div
          className="rounded-2xl p-6 transition-all duration-300"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            marginBottom: 20,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          <h2 style={{ fontSize: 14, fontWeight: 600, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Notifications
          </h2>

          <SettingRow
            icon={Bell}
            label="Email Notifications"
            description="Get notified about new job matches via email"
            action={<Toggle enabled={emailNotif} onToggle={() => setEmailNotif(!emailNotif)} />}
          />
          <SettingRow
            icon={Bell}
            label="Push Notifications"
            description="Receive browser push notifications"
            action={<Toggle enabled={pushNotif} onToggle={() => setPushNotif(!pushNotif)} />}
          />
          <SettingRow
            icon={Bell}
            label="Weekly Digest"
            description="A summary of your job search activity every Monday"
            action={<Toggle enabled={weeklyDigest} onToggle={() => setWeeklyDigest(!weeklyDigest)} />}
          />
        </div>

        {/* Privacy section */}
        <div
          className="rounded-2xl p-6 transition-all duration-300"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
            marginBottom: 20,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
          }}
        >
          <h2 style={{ fontSize: 14, fontWeight: 600, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Privacy
          </h2>

          <SettingRow
            icon={Eye}
            label="Profile Visibility"
            description="Make your profile visible to recruiters"
            action={<Toggle enabled={profileVisible} onToggle={() => setProfileVisible(!profileVisible)} />}
          />
          <SettingRow
            icon={Shield}
            label="Data & Privacy"
            description="Manage how your data is used and stored"
            action={
              <ChevronRight size={16} color="#94A3B8" />
            }
          />
          <SettingRow
            icon={Globe}
            label="Language"
            description="Change your preferred language"
            action={
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#64748B" }}>English</span>
                <ChevronRight size={16} color="#94A3B8" />
              </div>
            }
          />
        </div>

        {/* Danger zone */}
        <div
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
          <h2 style={{ fontSize: 14, fontWeight: 600, color: "#EF4444", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Danger Zone
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 0",
              borderBottom: "1px solid #F1F5F9",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Trash2 size={16} color="#EF4444" />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 3px 0" }}>
                  Delete Account
                </p>
                <p style={{ fontSize: 12, color: "#94A3B8", margin: 0 }}>
                  Permanently remove your account and all data
                </p>
              </div>
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
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FEF2F2"
                e.currentTarget.style.borderColor = "#EF4444"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "#FECACA"
              }}
            >
              Delete
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#F8FAFC",
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Shield size={16} color="#64748B" />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 3px 0" }}>
                  Sign Out
                </p>
                <p style={{ fontSize: 12, color: "#94A3B8", margin: 0 }}>
                  Log out of your account on this device
                </p>
              </div>
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
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F8FAFC"
                e.currentTarget.style.borderColor = "#CBD5E1"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "#E5E7EB"
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
