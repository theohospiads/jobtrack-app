'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { useState, useEffect } from 'react'

const PLATFORMS = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '💼',
    description: 'Auto-fill job applications & track responses',
    benefits: ['Track profile views', 'Auto-apply to jobs', 'See who viewed your profile'],
    recommended: true,
  },
  {
    id: 'indeed',
    name: 'Indeed',
    icon: '🎯',
    description: 'Get notified about new job matches instantly',
    benefits: ['Job alerts', 'Application tracking', 'Salary insights'],
    recommended: true,
  },
  {
    id: 'gmail',
    name: 'Gmail',
    icon: '📧',
    description: 'Automatically organize & track offer emails',
    benefits: ['Track offer emails', 'Auto-categorize', 'Follow-up reminders'],
    recommended: false,
  },
  {
    id: 'outlook',
    name: 'Outlook',
    icon: '💌',
    description: 'Same benefits as Gmail for Outlook users',
    benefits: ['Track offer emails', 'Auto-categorize', 'Follow-up reminders'],
    recommended: false,
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
    // Simulate OAuth connection
    // In real implementation, this would open OAuth window
    setConnectedPlatforms((prev) => new Set([...prev, platformId]))
  }

  const handleSkip = () => {
    // Save connected platforms to profile
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

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#0F172A',
              margin: '0 0 12px 0',
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
            }}
          >
            Let us track applications & organize your job search. You can add more later anytime.
          </p>
        </div>

        {/* Recommended Platforms */}
        <div style={{ marginBottom: '32px' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#64748B',
              margin: '0 0 12px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Recommended
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recommendedPlatforms.map((platform) => (
              <div
                key={platform.id}
                style={{
                  padding: '16px',
                  background: '#FFFFFF',
                  border: connectedPlatforms.has(platform.id)
                    ? '2px solid #2563EB'
                    : '1px solid #E5E7EB',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
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
                  <span style={{ fontSize: '24px' }}>{platform.icon}</span>
                  <div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#0F172A',
                        margin: '0 0 2px 0',
                      }}
                    >
                      {platform.name}
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#64748B',
                        margin: 0,
                      }}
                    >
                      {platform.description}
                    </p>
                  </div>
                </div>
                {connectedPlatforms.has(platform.id) ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      background: '#EFF6FF',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#0369A1',
                    }}
                  >
                    ✓ Connected
                  </div>
                ) : (
                  <button
                    onClick={() => handleConnect(platform.id)}
                    style={{
                      background: '#2563EB',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1E40AF'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#2563EB'
                    }}
                  >
                    Connect
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Other Platforms */}
        {otherPlatforms.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#64748B',
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Also Available
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {otherPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  style={{
                    padding: '16px',
                    background: '#FFFFFF',
                    border: connectedPlatforms.has(platform.id)
                      ? '2px solid #2563EB'
                      : '1px solid #E5E7EB',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
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
                    <span style={{ fontSize: '24px' }}>{platform.icon}</span>
                    <div>
                      <p
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#0F172A',
                          margin: '0 0 2px 0',
                        }}
                      >
                        {platform.name}
                      </p>
                      <p
                        style={{
                          fontSize: '13px',
                          color: '#64748B',
                          margin: 0,
                        }}
                      >
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  {connectedPlatforms.has(platform.id) ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 12px',
                        background: '#EFF6FF',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#0369A1',
                      }}
                    >
                      ✓ Connected
                    </div>
                  ) : (
                    <button
                      onClick={() => handleConnect(platform.id)}
                      style={{
                        background: '#F1F5F9',
                        color: '#64748B',
                        border: '1px solid #E5E7EB',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#E2E8F0'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F1F5F9'
                      }}
                    >
                      Connect
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '40px' }}>
          <button
            onClick={handleSkip}
            style={{
              flex: 1,
              background: '#F1F5F9',
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
              e.currentTarget.style.background = '#E2E8F0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F1F5F9'
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
              opacity: loading ? 0.8 : 1,
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

        {/* Info Text */}
        <p
          style={{
            fontSize: '12px',
            color: '#94A3B8',
            textAlign: 'center',
            marginTop: '16px',
            margin: '16px 0 0 0',
          }}
        >
          We'll never post or apply on your behalf without permission
        </p>
      </div>
    </div>
  )
}
