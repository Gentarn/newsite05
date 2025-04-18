'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContactFormData, submitContactForm } from '@/app/actions'
import { Button } from './button'
import { Input } from './input'
import { Textarea } from './textarea'
import { useToast } from './use-toast'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      console.log('Submitting form data:', data)
      const result = await submitContactForm(data)
      console.log('Submit result:', result)

      if (result.success) {
        toast({
          title: '送信完了',
          description: result.message || 'お問い合わせありがとうございます。',
        })
        reset()
      } else {
        toast({
          title: 'エラー',
          description: result.error || '送信に失敗しました。もう一度お試しください。',
          variant: 'destructive',
        })
        console.error('Form submission error:', result.details)
      }
    } catch (error) {
      console.error('Unexpected error during form submission:', error)
      toast({
        title: 'エラー',
        description: '予期せぬエラーが発生しました。もう一度お試しください。',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          {...register('name', { required: '名前は必須です' })}
          placeholder="お名前"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Input
          {...register('email', {
            required: 'メールアドレスは必須です',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '有効なメールアドレスを入力してください',
            },
          })}
          type="email"
          placeholder="メールアドレス"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea
          {...register('message', { required: 'メッセージは必須です' })}
          placeholder="メッセージ"
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? '送信中...' : '送信する'}
      </Button>
    </form>
  )
}