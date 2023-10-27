import React from 'react'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import Card from '@/components/Card/Card'
import banner from '../public/assets/pool2.jpg'

export default function Price() {
  return (
    <main>
      <SimpleBanner title = "Les Tarifs" picture = {banner} />
      <Card />
   </main>
  )
}
