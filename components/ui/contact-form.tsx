'use client'

import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';

interface FormData {
  lastName: string;
  email: string;
  description: string;
  cfToken: string;
}

export function ContactForm() {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const { 
    register, 
    handleSubmit, 
    reset, 
    setValue,
    formState: { errors } 
  } = useForm<FormData>();

  useEffect(() => {
    const loadTurnstile = async () => {
      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (!siteKey) {
        toast.error('Cloudflare Turnstileの設定が完了していません。管理者に連絡してください');
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.render(turnstileRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              setValue('cfToken', token);
            },
          });
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadTurnstile();
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    if (!data.cfToken) {
      toast.error('認証に失敗しました');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('xnQsjsdp', '69c7a6d72f71fe4b3449a916364f88ab3b2f1af981172a8c258c2f94b5ec0d51');
      formData.append('zc_gad', '');
      formData.append('xmIwtLD', '7bf510bc88485fa2aa3f3c769cb58c6d4360e668e3f53b596d1ad4d77fc36682a2d8caaa8b9e18e2db91ee5168a69194');
      formData.append('actionType', 'Q29udGFjdHM=');
      formData.append('returnURL', 'null');
      formData.append('Last Name', data.lastName);
      formData.append('Email', data.email);
      formData.append('Description', data.description);

      const response = await fetch('https://crm.zoho.com/crm/WebToContactForm', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('お問い合わせが送信されました');
        reset();
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      toast.error('エラーが発生しました');
    }
  };

  return (
    <div id='crmWebToEntityForm' className='crmWebToEntityForm' style={{ 
      backgroundColor: 'white', 
      color: 'black', 
      maxWidth: '900px', 
      padding: '25px', 
      margin: '0 auto', 
      boxSizing: 'border-box',
      textAlign: 'center',
      fontFamily: 'Noto Sans JP',
      
    }}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='content-type' content='text/html;charset=SHIFT-JIS' />
      
      <div className='zcwf_title' style={{ 
        maxWidth: '900px', 
        color: 'black', 
        fontFamily: 'Noto Sans JP',
        fontSize: '24px',
        textAlign: 'left',
        marginBottom: '40px',

      }}>
        お問い合わせ
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} style={{ paddingLeft: '10px' }}>
        <div className='zcwf_row' style={{ margin: '50px 0', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div className='zcwf_col_lab' style={{ 
            fontSize: '16px', 
            fontFamily: 'Noto Sans JP',
            textAlign: 'left',
            width: '100px',
            marginRight: '15px'
          }}>
            <label htmlFor='Last_Name'>
              お名前 <span style={{ color: 'red' }}>*</span>
            </label>
          </div>
          <div className='zcwf_col_fld' style={{ flex: 1 }}>
            <input
              id='Last_Name'
              {...register('lastName', { required: 'お名前は必須です' })}
              style={{ 
                width: '70%', 
                border: '1px solid #c0c6cc', 
                borderRadius: '2px',
                height: '3em',
                lineHeight: '3em',
                padding: '8px'
              }}
            />
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message as string}</span>}
          </div>
        </div>

        <div className='zcwf_row' style={{ margin: '40px 0', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div className='zcwf_col_lab' style={{ 
            fontSize: '16px', 
            fontFamily: 'Noto Sans JP',
            textAlign: 'left',
            width: '100px',
            marginRight: '15px'
          }}>
            <label htmlFor='Email'>
              メール <span style={{ color: 'red' }}>*</span>
            </label>
          </div>
          <div className='zcwf_col_fld' style={{ flex: 1 }}>
            <input
              id='Email'
              type='email'
              {...register('email', { 
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '有効なメールアドレスを入力してください'
                }
              })}
              style={{ 
                width: '70%', 
                border: '1px solid #c0c6cc', 
                borderRadius: '2px',
                height: '3em',
                lineHeight: '3em',
                padding: '8px'
              }}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message as string}</span>}
          </div>
        </div>

        <div className='zcwf_row' style={{ margin: '40px 0', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <div className='zcwf_col_lab' style={{ 
            fontSize: '16px', 
            fontFamily: 'Noto Sans JP',
            textAlign: 'left',
            width: '100px',
            marginRight: '15px',
            paddingTop: '8px'
          }}>
            <label htmlFor='Description'>
              内容 <span style={{ color: 'red' }}>*</span>
            </label>
          </div>
          <div className='zcwf_col_fld' style={{ flex: 1 }}>
            <textarea
              id='Description'
              {...register('description', { required: '内容は必須です' })}
              style={{ 
                width: '70%', 
                border: '1px solid #c0c6cc', 
                borderRadius: '2px',
                fontFamily: 'Arial, sans-serif',
                minHeight: '100px',
                padding: '8px'
              }}
            />
            {errors.description && <span style={{ color: 'red' }}>{errors.description.message as string}</span>}
          </div>
        </div>

        <div className='zcwf_row' style={{ margin: '10px 0', display: 'flex', flexDirection: 'column' }}>
          <div className='zcwf_col_lab'></div>
          <div className='zcwf_col_fld' style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div 
              ref={turnstileRef}
              style={{ margin: '20px 0' }}
            />
          </div>
        </div>

        <div className='zcwf_row' style={{ margin: '10px 0', display: 'flex', justifyContent: 'center' }}>
          <div className='zcwf_col_lab'></div>
          <div className='zcwf_col_fld' style={{ display: 'flex', gap: '10px' }}>
            <button 
              type='submit' 
              className='formsubmit zcwf_button'
              style={{
                background: 'linear-gradient(0deg, #0279FF 0%, #00A3F3 100%)',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              送信
            </button>
            <button 
              type='button' 
              onClick={() => reset()}
              style={{
                background: '#f0f0f0',
                color: '#313949',
                padding: '8px 16px',
                border: '1px solid #c0c6cc',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              リセット
            </button>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px'
        }}>
          <Toaster position="bottom-center" />
        </div>
      </form>
    </div>
  );
}
