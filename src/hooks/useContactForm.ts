import { useState, useCallback } from 'react'
import type { ContactFormData, ContactFormErrors } from '@/types'

const initialData: ContactFormData = {
  name: '',
  email: '',
  message: '',
}

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required.'
  if (!data.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!data.message.trim()) {
    errors.message = 'Message is required.'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialData)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
      if (errors[name as keyof ContactFormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }))
      }
    },
    [errors]
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const validationErrors = validate(formData)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }
      setIsSubmitting(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData(initialData)
    },
    [formData]
  )

  const reset = useCallback(() => {
    setIsSubmitted(false)
    setErrors({})
  }, [])

  return { formData, errors, isSubmitting, isSubmitted, handleChange, handleSubmit, reset }
}
