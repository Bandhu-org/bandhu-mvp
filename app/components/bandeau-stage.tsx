'use client'
import Image from 'next/image'

export default function Bandeau2() {
  return (
    <div className="relative w-full h-[450px]">
      <Image
        src="/images/stage.jpg"
        alt="Un cours collectif au bord d'un lac"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
