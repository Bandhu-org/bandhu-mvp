'use client'
import Image from 'next/image'

export default function Bandeau3() {
  return (
    <div className="relative w-[600] h-[450px]">
      <Image
        src="/images/chateau4.png"
        alt="un chateau avec piscine devant"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
