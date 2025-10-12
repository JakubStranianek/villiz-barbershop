import Image from "next/image"

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
        <Image src="/images/villiz-logo-01.svg" alt="hero" width={600} height={600} />
    </div>
  )
}
