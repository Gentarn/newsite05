'use client'

import React from 'react'
import Script from 'next/script'

export function ContactForm() {
  return (
    <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{backgroundColor: 'white', color: 'black', maxWidth: '900px'}}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='content-type' content='text/html;charset=SHIFT-JIS' />
      <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js' />
      
      <div className='wf_customMessageBox' id='wf_splash' style={{display: 'none'}}>
        <div className='wf_customCircle'>
          <div className='wf_customCheckMark'></div>
        </div>
        <span id='wf_splash_info'></span>
      </div>

      <form id='webform228887000007830020' name='WebToContacts228887000007830020' acceptCharset='UTF-8'>
        <input type='text' style={{display: 'none'}} name='xnQsjsdp' defaultValue='b8a72c4301bc115068b12bf4ba44bf1778b10d9de661181f03243ef60c958fdc' />
        <input type='hidden' name='zc_gad' id='zc_gad' defaultValue='' />
        <input type='text' style={{display: 'none'}} name='xmIwtLD' defaultValue='ff489580c03d78d1b0c97bd6891318e7e218449a43de6995097e545cd7ddfb271f5a9dfdec97a123d05745f70da8ec76' />
        <input type='text' style={{display: 'none'}} name='actionType' defaultValue='Q29udGFjdHM=' />
        <input type='text' style={{display: 'none'}} name='returnURL' defaultValue='null' />

        <div className='zcwf_title contact-form-title'>
          お問い合わせ
        </div>

        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{fontSize: '20px', fontFamily: 'Noto Sans JP'}}>
            <label htmlFor='Last_Name'>
              お名前（Name）<span style={{color: 'red'}}>*</span>
            </label>
          </div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Last_Name' name='Last Name' maxLength={80} style={{width: '100%', fontSize: '20px', fontFamily: 'Noto Sans JP'}} />
            <div className='zcwf_col_help'></div>
          </div>
        </div>

        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{fontSize: '20px', fontFamily: 'Noto Sans JP'}}>
            <label htmlFor='Email'>
              メール（Email)<span style={{color: 'red'}}>*</span>
            </label>
          </div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Email' name='Email' maxLength={100} style={{width: '100%', fontSize: '20px', fontFamily: 'Noto Sans JP'}} />
            <div className='zcwf_col_help'></div>
          </div>
        </div>

        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{fontSize: '20px', fontFamily: 'Noto Sans JP'}}>
            <label htmlFor='Description'>
              内容（Message）<span style={{color: 'red'}}>*</span>
            </label>
          </div>
          <div className='zcwf_col_fld'>
            <textarea id='Description' name='Description' style={{width: '100%', fontSize: '20px', fontFamily: 'Noto Sans JP'}} />
            <div className='zcwf_col_help'></div>
          </div>
        </div>

        <div className='zcwf_row'>
          <div className='zcwf_col_lab'></div>
          <div className='zcwf_col_fld'>
            <input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='送信する'  style={{fontSize: '20px'}}/>
            <input type='reset' className='zcwf_button' name='reset' value='リセットする'  style={{fontSize: '20px'}}/>
          </div>
        </div>
      </form>

      <style jsx global>{`
        html, body {
          margin: 0px;
        }

        .wf_customMessageBox {
          font-family: Arial, Helvetica, sans-serif;
          color: #132C14;
          background: #F5FAF5;
          box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);
          max-width: 90%;
          width: max-content;
          word-break: break-word;
          z-index: 11000;
          border-radius: 6px;
          border: 1px solid #A9D3AB;
          min-width: 100px;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translate(-50%, 0);
        }

        .wf_customCircle {
          position: relative;
          background-color: #12AA67;
          border-radius: 100%;
          width: 20px;
          height: 20px;
          flex: none;
          margin-right: 7px;
        }

        .wf_customCheckMark {
          box-sizing: unset !important;
          position: absolute;
          transform: rotate(45deg) translate(-50%, -50%);
          left: 6px;
          top: 9px;
          height: 8px;
          width: 3px;
          border-bottom: 2px solid #fff;
          border-right: 2px solid #fff;
        }

        .formsubmit.zcwf_button {
          color: white !important;
          background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%);
        }

        #crmWebToEntityForm.zcwf_lblLeft {
          width: 100%;
          padding: 25px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        #crmWebToEntityForm.zcwf_lblLeft * {
          box-sizing: border-box;
        }

        #crmWebToEntityForm {
          text-align: left;
        }

        #crmWebToEntityForm * {
          direction: ltr;
        }

        .zcwf_lblLeft .zcwf_title {
          word-wrap: break-word;
          padding: 0px 6px 10px;
          font-weight: bold;
          font-family: Arial;
          font-size: 30px;
        }

        .zcwf_lblLeft .zcwf_col_fld input[type=text],
        .zcwf_lblLeft .zcwf_col_fld textarea {
          width: 100%;
          border: 1px solid #c0c6cc !important;
          resize: vertical;
          border-radius: 2px;
          float: left;
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 20px;
        }

        .zcwf_lblLeft .zcwf_col_lab {
          width: 30%;
          word-break: break-word;
          padding: 0px 6px 0px;
          margin-right: 10px;
          margin-top: 5px;
          float: left;
          min-height: 1px;
          font-size: 20px;
          font-family: 'Noto Sans JP', sans-serif;
        }

        .zcwf_lblLeft .zcwf_col_fld {
          float: left;
          width: 68%;
          padding: 0px 6px 0px;
          position: relative;
          margin-top: 5px;
        }

        .zcwf_lblLeft .zcwf_row {
          margin: 15px 0px;
        }

        .zcwf_lblLeft .formsubmit {
          margin-right: 5px;
          cursor: pointer;
          color: #313949;
          font-size: 20px;
          font-family: 'Noto Sans JP', sans-serif;
        }

        .zcwf_lblLeft .zcwf_button {
          font-size: 20px;
          color: #313949;
          border: 1px solid #c0c6cc;
          padding: 3px 9px;
          border-radius: 4px;
          cursor: pointer;
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: 'Noto Sans JP', sans-serif;
        }

        @media all and (max-width: 900px) {
          .zcwf_lblLeft .zcwf_col_lab,
          .zcwf_lblLeft .zcwf_col_fld {
            width: auto;
            float: none !important;
          }
        }
      `}</style>
    </div>
  )
}