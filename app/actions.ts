'use server'

import { supabase } from '@/lib/supabase'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    console.log('Attempting to insert data:', formData)
    
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString()
        }
      ])
      .select('*')
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return {
        success: false,
        error: `データベースエラー: ${error.message}`,
        details: error
      }
    }

    console.log('Data inserted successfully:', data)
    return {
      success: true,
      data,
      message: 'お問い合わせありがとうございます。'
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      error: '予期せぬエラーが発生しました。',
      details: error
    }
  }
}
