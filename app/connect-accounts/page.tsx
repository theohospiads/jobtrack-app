'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { useState, useEffect } from 'react'

const PLATFORMS = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    description: 'Auto-fill applications, track interactions & responses',
    benefits: ['Profile sync', 'Application tracking', 'Response monitoring'],
    recommended: true,
    category: 'Job Boards',
  },
  {
    id: 'indeed',
    name: 'Indeed',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 6h2v6h-2zm4 0h2v6h-2zm-8 0h2v6H6z"/>
      </svg>
    ),
    description: 'Instant job alerts & application tracking',
    benefits: ['Job alerts', 'Auto-apply', 'Salary insights'],
    recommended: true,
    category: 'Job Boards',
  },
  {
    id: 'gmail',
    name: 'Gmail',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    description: 'Track offer emails & auto-organize job correspondence',
    benefits: ['Email tracking', 'Auto-categorization', 'Follow-up reminders'],
    recommended: true,
    category: 'Email',
  },
  {
    id: 'outlook',
    name: 'Outlook',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.6 2c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zm3.6 9c0 1.985-1.612 3.6-3.6 3.6s-3.6-1.615-3.6-3.6 1.612-3.6 3.6-3.6 3.6 1.615 3.6 3.6z"/>
      </svg>
    ),
    description: 'Outlook integration with email tracking',
    benefits: ['Email tracking', 'Auto-categorization', 'Calendar sync'],
    recommended: false,
    category: 'Email',
  },
  {
    id: 'github',
    name: 'GitHub',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    description: 'Sync portfolio & showcase your projects',
    benefits: ['Portfolio sync', 'Project showcase', 'Resume integration'],
    recommended: false,
    category: 'Portfolio',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.679-5.829 6.679h-3.307l7.73-8.835L2.424 2.25h6.679l4.632 6.135L17.77 2.25h.474zm-1.161 17.52h1.833L7.084 4.126H5.117l12.926 15.644z"/>
      </svg>
    ),
    description: 'Build professional network & visibility',
    benefits: ['Network building', 'Content sharing', 'Professional visibility'],
    recommended: false,
    category: 'Social',
  },
  {
    id: 'calendly',
    name: 'Calendly',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-7-9h5v5h-5z"/>
      </svg>
    ),
    description: 'Share availability for interview scheduling',
    benefits: ['Meeting scheduling', 'Interview prep', 'Calendar sync'],
    recommended: false,
    category: 'Scheduling',
  },
  {
    id: 'slack',
    name: 'Slack',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M5 3c-1.105 0-2 .895-2 2v6h4V5c0-1.105-.895-2-2-2zm0 8c-1.105 0-2 .895-2 2v6c0 1.105.895 2 2 2s2-.895 2-2v-6c0-1.105-.895-2-2-2zm6-8c-1.105 0-2 .895-2 2v6h4V5c0-1.105-.895-2-2-2zm0 8c-1.105 0-2 .895-2 2v6c0 1.105.895 2 2 2s2-.895 2-2v-6c0-1.105-.895-2-2-2zm6-8c-1.105 0-2 .895-2 2v6h4V5c0-1.105-.895-2-2-2zm0 8c-1.105 0-2 .895-2 2v6c0 1.105.895 2 2 2s2-.895 2-2v-6c0-1.105-.895-2-2-2z"/>
      </svg>
    ),
    description: 'Get job alerts & updates in Slack',
    benefits: ['Real-time alerts', 'Team collaboration', 'Status updates'],
    recommended: false,
    category: 'Communication',
  },
  {
    id: 'glassdoor',
    name: 'Glassdoor',
    logoSvg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
      </svg>
    ),
    description: 'Compare companies & track applications',
    benefits: ['Company research', 'Salary data', 'Reviews tracking'],
    recommended: false,
    category: 'Research',
  },
]

export default function ConnectAccountsPage() {
  const router = useRouter()
  const { updateProfile } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [connectedPlatforms, setConnectedPlatforms] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnect = (platformId: string) => {
    // Simulate OAuth connection - in real app, would open OAuth flow
    setConnectedPlatforms((prev) => new Set([...prev, platformId]))
  }

  const handleSkip = () => {
    const connectedList = Array.from(connectedPlatforms)
    updateProfile({ connected_platforms: connectedList.join(',') })
    router.push('/dashboard')
  }

  const handleContinue = () => {
    setLoading(true)
    setTimeout(() => {
      const connectedList = Array.from(connectedPlatforms)
      updateProfile({ connected_platforms: connectedList.join(',') })
      router.push('/dashboard')
    }, 1000)
  }

  if (!mounted) return null

  const recommendedPlatforms = PLATFORMS.filter((p) => p.recommended)
  const otherPlatforms = PLATFORMS.filter((p) => !p.recommended)

  const groupedPlatforms = otherPlatforms.reduce(
    (acc, platform) => {
      const category = platform.category
      if (!acc[category]) acc[category] = []
      acc[category].push(platform)
      return acc
    },
    {} as Record<string, typeof PLATFORMS>
  )

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#0F172A',
              margin: '0 0 16px 0',
              letterSpacing: '-0.5px',
            }}
          >
            Connect your accounts
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#64748B',
              margin: 0,
              lineHeight: '1.6',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Sync with your job search platforms to track applications, get alerts, and organize your job hunt.
          </p>
        </div>

        {/* Recommended Section */}
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#64748B',
              margin: '0 0 16px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            ⭐ Recommended for maximum impact
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {recommendedPlatforms.map((platform) => (
              <div
                key={platform.id}
                style={{
                  padding: '20px',
                  background: '#FFFFFF',
                  border: connectedPlatforms.has(platform.id)
                    ? '2px solid #2563EB'
                    : '1px solid #E5E7EB',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  boxShadow: connectedPlatforms.has(platform.id)
                    ? '0 8px 24px rgba(37, 99, 235, 0.15)'
                    : '0 1px 3px rgba(0, 0, 0, 0.08)',
                }}
                onMouseEnter={(e) => {
                  if (!connectedPlatforms.has(platform.id)) {
                    e.currentTarget.style.borderColor = '#CBD5E1'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!connectedPlatforms.has(platform.id)) {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#F1F5F9',
                      borderRadius: '8px',
                      color: '#2563EB',
                    }}
                  >
                    {platform.logoSvg}
                  </div>
                  {connectedPlatforms.has(platform.id) && (
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        background: '#2563EB',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: '700',
                      }}
                    >
                      ✓
                    </div>
                  )}
                </div>

                <div>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#0F172A',
                      margin: '0 0 4px 0',
                    }}
                  >
                    {platform.name}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#64748B',
                      margin: 0,
                      lineHeight: '1.4',
                    }}
                  >
                    {platform.description}
                  </p>
                </div>

                <button
                  onClick={() => handleConnect(platform.id)}
                  disabled={connectedPlatforms.has(platform.id)}
                  style={{
                    background: connectedPlatforms.has(platform.id) ? '#EFF6FF' : '#2563EB',
                    color: connectedPlatforms.has(platform.id) ? '#0369A1' : '#FFFFFF',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: connectedPlatforms.has(platform.id) ? 'default' : 'pointer',
                    transition: 'all 0.2s',
                    opacity: connectedPlatforms.has(platform.id) ? 1 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!connectedPlatforms.has(platform.id)) {
                      e.currentTarget.style.background = '#1E40AF'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!connectedPlatforms.has(platform.id)) {
                      e.currentTarget.style.background = '#2563EB'
                    }
                  }}
                >
                  {connectedPlatforms.has(platform.id) ? 'Connected' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Other Platforms by Category */}
        {Object.entries(groupedPlatforms).map(([category, platforms]) => (
          <div key={category} style={{ marginBottom: '40px' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#64748B',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {category}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  style={{
                    padding: '16px',
                    background: '#FFFFFF',
                    border: connectedPlatforms.has(platform.id)
                      ? '2px solid #2563EB'
                      : '1px solid #E5E7EB',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!connectedPlatforms.has(platform.id)) {
                      e.currentTarget.style.borderColor = '#CBD5E1'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!connectedPlatforms.has(platform.id)) {
                      e.currentTarget.style.borderColor = '#E5E7EB'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#F8FAFC',
                        borderRadius: '8px',
                        color: '#64748B',
                        flexShrink: 0,
                      }}
                    >
                      {platform.logoSvg}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#0F172A',
                          margin: '0 0 2px 0',
                        }}
                      >
                        {platform.name}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#94A3B8',
                          margin: 0,
                        }}
                      >
                        {platform.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleConnect(platform.id)}
                    disabled={connectedPlatforms.has(platform.id)}
                    style={{
                      background: connectedPlatforms.has(platform.id) ? '#EFF6FF' : '#F1F5F9',
                      color: connectedPlatforms.has(platform.id) ? '#0369A1' : '#64748B',
                      border: connectedPlatforms.has(platform.id)
                        ? '1px solid #BFDBFE'
                        : '1px solid #E5E7EB',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: connectedPlatforms.has(platform.id) ? 'default' : 'pointer',
                      transition: 'all 0.2s',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (!connectedPlatforms.has(platform.id)) {
                        e.currentTarget.style.background = '#E2E8F0'
                        e.currentTarget.style.borderColor = '#CBD5E1'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!connectedPlatforms.has(platform.id)) {
                        e.currentTarget.style.background = '#F1F5F9'
                        e.currentTarget.style.borderColor = '#E5E7EB'
                      }
                    }}
                  >
                    {connectedPlatforms.has(platform.id) ? '✓' : 'Add'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer Actions */}
        <div style={{ marginTop: '56px', paddingTop: '24px', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleSkip}
              style={{
                flex: 1,
                background: '#F8FAFC',
                color: '#64748B',
                border: '1px solid #E5E7EB',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F1F5F9'
                e.currentTarget.style.borderColor = '#CBD5E1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F8FAFC'
                e.currentTarget.style.borderColor = '#E5E7EB'
              }}
            >
              Skip for now
            </button>
            <button
              onClick={handleContinue}
              disabled={loading}
              style={{
                flex: 1,
                background: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: loading ? 0.9 : 1,
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.background = '#1E40AF'
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.background = '#2563EB'
              }}
            >
              {loading ? 'Setting up...' : connectedPlatforms.size > 0 ? 'Continue' : 'Go to dashboard'}
            </button>
          </div>

          {/* Security Note */}
          <p
            style={{
              fontSize: '12px',
              color: '#94A3B8',
              textAlign: 'center',
              margin: '20px 0 0 0',
              lineHeight: '1.5',
            }}
          >
            🔒 Your credentials are encrypted. We'll never apply on your behalf without explicit permission.
          </p>
        </div>
      </div>
    </div>
  )
}
