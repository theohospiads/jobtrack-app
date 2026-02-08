"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  user: { name: string } | null
  signUp: (name: string, email: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string } | null>(null)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Check auth status on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("jobtrack_user")
    if (storedUser) {
      const userData = JSON.parse(storedUser)
      setUser(userData)
      setIsAuthenticated(true)
    }
    setMounted(true)
  }, [])

  // Redirect unauthenticated users to sign-up
  useEffect(() => {
    if (!mounted) return

    const publicRoutes = ["/sign-up", "/"]
    const isPublicRoute = publicRoutes.includes(pathname)

    if (!isAuthenticated && !isPublicRoute) {
      router.push("/sign-up")
    }
  }, [mounted, isAuthenticated, pathname, router])

  const signUp = (name: string, email: string) => {
    const userData = { name, email }
    localStorage.setItem("jobtrack_user", JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
    router.push("/dashboard")
  }

  const signOut = () => {
    localStorage.removeItem("jobtrack_user")
    setUser(null)
    setIsAuthenticated(false)
    router.push("/sign-up")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
