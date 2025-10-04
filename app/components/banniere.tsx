'use client'
import Image from 'next/image'

export default function Banniere() {
  return (
    <div className="relative w-full h-[450px]">
      <Image
        src="/images/banniere2.jpg"
        alt="une terre désertique avec un soleil rayonnant"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
