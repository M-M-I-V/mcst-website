"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import heroImage from "../assets/images/hero-section.png"
import "../index.css"

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section
      className="relative h-[600px] bg-cover bg-center pt-[calc(100px)]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 sm:px-12"
      >
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 dark:text-slate-200">
          Empowering Futures <br /> Through Science and <br /> Technology
        </h2>
        <p className="text-sm text-gray-200 max-w-3xl dark:text-slate-200">
          At Mandaluyong College of Science and Technology, we are committed to nurturing excellence in education and
          innovation. Our programs in Information Systems, Mathematics, and Communication are designed to equip students
          with the skills needed for a successful future.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
