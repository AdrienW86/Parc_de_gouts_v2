import React from 'react'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import ContactForm from '@/components/ContactForm/ContactForm'
import banner from '../public/assets/contact.jpg'
import styles from '../components/ContactForm/contact.module.css'

export default function Contact() {
  return (
   <main className={styles.main}>
      <SimpleBanner title = "Contactez-nous" picture = {banner} />
      <ContactForm />
   </main>
  )
}