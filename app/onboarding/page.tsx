'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'

type Question = {
  id: string
  question: string
  subtitle: string
  type: 'choice' | 'input'
  options?: { label: string; value: string }[]
  placeholder?: string
}

const QUESTIONS: Question[] = [
  {
    id: 'current_role',
    question: "What's your current role?",
    subtitle: 'Help us understand your background',
    type: 'input',
    placeholder: 'e.g. Product Manager, Data Analyst...',
  },
  {
    id: 'experience',
    question: 'How many years of experience?',
    subtitle: 'We customize opportunities by seniority',
    type: 'choice',
    options: [
      { label: '0-2 years', value: '0-2' },
      { label: '2-5 years', value: '2-5' },
      { label: '5-10 years', value: '5-10' },
      { label: '10+ years', value: '10+' },
    ],
  },
  {
    id: 'target_role',
    question: 'What role do you want?',
    subtitle: 'Your primary job search focus',
    type: 'input',
    placeholder: 'e.g. Senior Product Manager...',
  },
  {
    id: 'work_location',
    question: 'Where do you want to work?',
    subtitle: 'We only show matching locations',
    type: 'choice',
    options: [
      { label: 'Remote only', value: 'remote' },
      { label: 'Remote + EU', value: 'remote-eu' },
      { label: 'Remote + Global', value: 'remote-global' },
      { label: 'Flexible (including on-site)', value: 'flexible' },
    ],
  },
  {
    id: 'salary_range',
    question: 'What salary range?',
    subtitle: 'Helps us filter relevant opportunities',
    type: 'choice',
    options: [
      { label: '$50k - $75k', value: '50-75' },
      { label: '$75k - $100k', value: '75-100' },
      { label: '$100k - $150k', value: '100-150' },
      { label: '$150k+', value: '150+' },
    ],
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const { isAuthenticated, updateProfile } = useAuth()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/sign-up')
    }
  }, [isAuthenticated, router])

  const question = QUESTIONS[currentStep]
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100

  const handleChoice = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
    handleNext()
  }

  const handleInputChange = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
  }

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleComplete = async () => {
    setIsSubmitting(true)
    // Store profile data
    updateProfile(answers)
    // Simulate a small delay for better UX
    setTimeout(() => {
      router.push('/dashboard')
    }, 300)
  }

  const canProceed = answers[question.id]?.trim().length > 0

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F8FAFC',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        {/* Progress Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              width: '100%',
              height: '3px',
              background: '#E5E7EB',
              borderRadius: '100px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: '#2563EB',
                transition: 'width 300ms ease',
              }}
            />
          </div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#64748B',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Step {currentStep + 1} of {QUESTIONS.length}
          </p>
        </div>

        {/* Question */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#0F172A',
              margin: 0,
              lineHeight: '1.2',
            }}
          >
            {question.question}
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#64748B',
              margin: 0,
              lineHeight: '1.6',
            }}
          >
            {question.subtitle}
          </p>
        </div>

        {/* Input / Choices */}
        {question.type === 'input' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="text"
              value={answers[question.id] || ''}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={question.placeholder}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && canProceed) {
                  handleNext()
                }
              }}
              autoFocus
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                border: '2px solid #E5E7EB',
                background: '#FFFFFF',
                fontSize: '15px',
                color: '#0F172A',
                fontFamily: 'inherit',
                transition: 'all 200ms ease',
                outline: 'none',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#2563EB')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            />
            <button
              onClick={handleNext}
              disabled={!canProceed || isSubmitting}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                background: canProceed ? '#2563EB' : '#E5E7EB',
                color: canProceed ? 'white' : '#94A3B8',
                border: 'none',
                fontSize: '15px',
                fontWeight: '600',
                cursor: canProceed && !isSubmitting ? 'pointer' : 'not-allowed',
                transition: 'all 200ms ease',
                letterSpacing: '-0.2px',
              }}
              onMouseEnter={(e) => {
                if (canProceed && !isSubmitting) {
                  e.currentTarget.style.background = '#1E40AF'
                }
              }}
              onMouseLeave={(e) => {
                if (canProceed && !isSubmitting) {
                  e.currentTarget.style.background = '#2563EB'
                }
              }}
            >
              {currentStep === QUESTIONS.length - 1
                ? isSubmitting
                  ? 'Setting up...'
                  : 'Complete Setup'
                : 'Continue'}
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {question.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleChoice(option.value)}
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  border: '2px solid #E5E7EB',
                  background: answers[question.id] === option.value ? '#EFF6FF' : '#FFFFFF',
                  color: answers[question.id] === option.value ? '#0369A1' : '#0F172A',
                  fontSize: '15px',
                  fontWeight: answers[question.id] === option.value ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  textAlign: 'left',
                  borderColor: answers[question.id] === option.value ? '#2563EB' : '#E5E7EB',
                  letterSpacing: '-0.2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563EB'
                  if (answers[question.id] !== option.value) {
                    e.currentTarget.style.background = '#F8FAFC'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    answers[question.id] === option.value ? '#2563EB' : '#E5E7EB'
                  if (answers[question.id] !== option.value) {
                    e.currentTarget.style.background = '#FFFFFF'
                  }
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* Skip indicator */}
        <p
          style={{
            fontSize: '12px',
            color: '#94A3B8',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Takes just 2 minutes · No payment required
        </p>
      </div>
    </div>
  )
}
