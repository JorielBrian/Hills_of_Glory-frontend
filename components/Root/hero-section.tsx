import React from 'react'

const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-[url('/background_one.jpg')] bg-cover bg-center text-white">
      <div className="bg-black/65 py-24">
        {children}
      </div>
    </section>
  )
}

export default HeroSection