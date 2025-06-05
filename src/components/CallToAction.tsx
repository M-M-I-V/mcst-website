"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

const CallToAction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-16 bg-gray-100 dark:bg-zinc-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="200"
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h2 className="text-3xl font-bold mb-4">Join Us at MCST Today!</h2>
          <p className="text-lg text-gray-700 dark:text-slate-300">
            Take the first step towards a brighter future by applying to Mandaluyong College of Science and Technology.
            Discover our innovative programs designed to equip you with the skills needed for success in today's dynamic
            job market.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-offset="200"
          className="md:w-1/2 flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-4"
        >
          <Link to="/apply">
            <button className="bg-blue-900 text-white py-3 px-6 rounded-lg transition duration-300 dark:bg-blue-800 dark:text-slate-200 w-full md:w-auto">
              Apply
            </button>
          </Link>
          <Link to="/admission">
            <button className="border border-black text-black py-3 px-6 rounded-lg transition duration-300 dark:border-slate-200 dark:text-slate-200 w-full md:w-auto">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
