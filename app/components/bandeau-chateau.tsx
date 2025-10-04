'use client'
import Image from 'next/image'

export default function Bandeau() {
  return (
    <div className="relative w-full h-[450px]">
      <Image
        src="/images/chateau1.jpg"
        alt="un chateau dans un parc verdoyant"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
