import Link from 'next/link'
import React from 'react'
import Typewriter from '../utils/Typewriter'
import Stars from '../utils/Stars'

const quotes = ["Websites", "Mobile Apps", "Desktop Apps", "E-commerce", "WordPress", "YouTube SEO", "Video Editing"]

const Hero: React.FC = () => {
  return (
    <div id='hero' className="flex flex-col gap-8 justify-center items-center border-b-2 border-gray-500 pt-16 h-screen bg-[radial-gradient(50%_50%_at_50%_100%,rgba(138,138,138,0.3)_0%,transparent_100%)] overflow-hidden relative">

      <Stars />

      <span className='px-8 pt-2 rounded-2xl border border-secondary shadow-[0_0_5px_#9cfeca]'>
        Strategic Software Solutions & Maintenance
      </span>

      <span className='flex flex-col justify-center items-center'>
        <h4 className='text-5xl md:text-6xl font-semibold text-center'>Innovative Solutions for</h4>
        <span className='flex'>
          <Typewriter quotes={quotes} className={"text-5xl md:text-6xl text-secondary"} />
        </span>
      </span>

      <span className='text-base md:text-xl text-center max-w-2xl px-4'>
        From custom Web & Mobile apps to SEO domination and viral Video Editing.
        We don't just build your digital foundation—we maintain it for life.
      </span>

      <span className="w-full flex flex-col items-center text-center gap-4 mx-auto">
        <Link
          href="/contact"
          className="btn-primary"
        >
          Start Your Project
        </Link>
        <p className="text-sm text-gray-400">
          Trusted by growing businesses worldwide
        </p>
      </span>

      <span>
        <p className='text-base opacity-70'>Elevating Your Brand with 24/7 Expert Support</p>
      </span>
    </div>
  )
}

export default Hero
