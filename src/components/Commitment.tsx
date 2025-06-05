"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "../index.css"
import collaborationIcon from "../assets/images/collaboration.svg"
import improveIcon from "../assets/images/improve.svg"
import researchIcon from "../assets/images/research.svg"

const Commitment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-16 bg-gray-100 dark:bg-zinc-900 dark:text-slate-300">
      <div className="container mx-auto text-center px-4">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200">
          <h2 className="text-3xl font-bold mb-4 dark:text-slate-200">
            Our Commitment to Quality Education and Innovation
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            At Mandaluyong College of Science and Technology, we strive to provide accessible, high-quality education
            that empowers our students. Our dedication to advancing instruction and research ensures that we remain at
            the forefront of academic excellence
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-offset="200"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-zinc-800">
            <img
              src={collaborationIcon || "/placeholder.svg"}
              alt="Collaborating Icon"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Collaborating for a Brighter Future</h3>
            <p className="text-gray-700 dark:text-slate-300">
              We actively collaborate with stakeholders to enhance educational outcomes.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-offset="200"
            className="p-6 bg-white rounded-lg shadow-md dark:bg-zinc-800"
          >
            <img
              src={improveIcon || "/placeholder.svg"}
              alt="Continuous Improvement Icon"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Continuous Improvement in Education</h3>
            <p className="text-gray-700 dark:text-slate-300">
              Our focus on continuous improvement drives us to innovate and adapt.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-offset="200"
            className="p-6 bg-white rounded-lg shadow-md dark:bg-zinc-800"
          >
            <img
              src={researchIcon || "/placeholder.svg"}
              alt="Research and Instruction Icon"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fostering Excellence in Research and Instruction</h3>
            <p className="text-gray-700 dark:text-slate-300">
              We prioritize research initiatives that contribute to societal development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Commitment
