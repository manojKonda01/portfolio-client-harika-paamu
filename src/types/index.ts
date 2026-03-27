export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface TechCategory {
  id: string
  number: string
  icon: string
  title: string
  tags: string[]
  variant?: 'primary' | 'secondary'
  specializations?: string[]
  description?: string
}

export interface Experience {
  id: string
  period: string
  company: string
  role: string
  achievements: string[]
  icon: string
  nodeColor: 'primary' | 'secondary'
}

export interface Project {
  id: string
  category: string
  title: string
  description?: string
  tags: string[]
  metrics?: { value: string; label: string }[]
  size: 'large' | 'small'
  variant?: 'default' | 'accent'
  challenge?: string
  methodology?: string
  highlights?: string[]
  quote?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}
