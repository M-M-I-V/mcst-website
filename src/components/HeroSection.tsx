"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const basePath = "/Home"

  return (
    <section className="bg-gray-50 dark:bg-zinc-900 pt-8 pb-4">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-offset="200"
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-200 leading-tight">
              Empowering Futures Through Science and Technology
            </h1>

            <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              At Mandaluyong College of Science and Technology, we are committed to nurturing excellence in education
              and innovation. Our programs in Information Systems, Mathematics, Communication, Public Administration, and Physical Education
              are designed to equip
              students with the skills needed for a successful future.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/programs">
                <button className="border-2 border-gray-800 dark:border-slate-200 text-gray-800 dark:text-slate-200 hover:bg-gray-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-gray-800 px-6 py-3 rounded-lg font-medium text-base transition-colors duration-300">
                  Explore Programs →
                </button>
              </Link>
            </div>
          </div>

          {/* Right Single Image */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
            data-aos-offset="200"
            className="relative"
          >
            <div className="w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${basePath}/images/mcst-drone.png`}
                alt="Mandaluyong College of Science and Technology campus and students"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-110 transition duration-200 dark:brightness-75 dark:contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
        data-aos-offset="200"
        className="container mx-auto px-6 sm:px-12 lg:px-16 mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Students Enrolled */}
          <div className="space-y-2">
            <div className="relative inline-block group">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-800 transition duration-700 ease-in-out">
                420+
              </div>
              <span className="absolute bottom-0 right-0 h-0.5 bg-blue-900 dark:bg-blue-800 w-0 group-hover:w-full transition-all duration-500 ease-out origin-right"></span>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-slate-300">Students Enrolled</div>
          </div>

          {/* Faculty Members */}
          <div className="space-y-2">
            <div className="relative inline-block group">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-800 transition duration-700 ease-in-out">
                20+
              </div>
              <span className="absolute bottom-0 right-0 h-0.5 bg-blue-900 dark:bg-blue-800 w-0 group-hover:w-full transition-all duration-500 ease-out origin-right"></span>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-slate-300">Faculty Members</div>
          </div>

          {/* Degree Programs */}
          <div className="space-y-2">
            <div className="relative inline-block group">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-800 transition duration-700 ease-in-out">
                5
              </div>
              <span className="absolute bottom-0 right-0 h-0.5 bg-blue-900 dark:bg-blue-800 w-0 group-hover:w-full transition-all duration-500 ease-out origin-right"></span>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-slate-300">Degree Programs</div>
          </div>

          {/* Commitment to Excellence */}
          <div className="space-y-2">
            <div className="relative inline-block group">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-800 transition duration-700 ease-in-out">
                100%
              </div>
              <span className="absolute bottom-0 right-0 h-0.5 bg-blue-900 dark:bg-blue-800 w-0 group-hover:w-full transition-all duration-500 ease-out origin-right"></span>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-slate-300">Commitment to Excellence</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection