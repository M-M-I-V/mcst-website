"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "../index.css"

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <>
      {/* Statistics Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        className="py-16 bg-gray-50 dark:bg-zinc-900"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-6 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 dark:text-slate-200">
              Discover Our Impact: Key Statistics at Mandaluyong College of Science and Technology
            </h2>
            <p className="text-lg text-gray-700 mb-8 dark:text-slate-300">
              At MCST, we pride ourselves on our vibrant community. Our commitment to excellence is reflected in our
              impressive statistics.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-blue-700 mb-2 dark:text-blue-500">420</h3>
                <p className="text-gray-700 dark:text-slate-300">Students enrolled in diverse academic programs.</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold text-blue-700 mb-2 dark:text-blue-500">20</h3>
                <p className="text-gray-700 dark:text-slate-300">
                  Dedicated faculty and staff supporting student success.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 transition duration-200 dark:brightness-75 dark:contrast-125">
            <img
              src="./images/statistics.jpg"
              alt="Statistics Image"
              className="w-full rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        id="philosophy"
        className="py-16 bg-gray-50 dark:bg-zinc-900"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-slate-200">Philosophy</h2>
            <p className="text-lg text-gray-700 dark:text-slate-300">
              Mandaluyong College of Science and Technology advocates the culture of excellence in science and
              technology that is anchored on the principles of quality instruction, dynamic research and innovation,
              continuous improvement, public service, and nationalism.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="./images/mcst-philosophy.jpg"
              alt="Philosophy Image"
              className="w-full rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        id="mission"
        className="py-16 bg-gray-50 dark:bg-zinc-900"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-slate-200">Mission</h2>
            <p className="text-lg text-gray-700 dark:text-slate-300">
              To cultivate a culture of excellence in Science and Technology pursuing the improvement of the quality of
              life of every Mandaleño to bring about the city's sustainable development and resiliency towards nation
              building.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="./images/mcst-mission.jpg"
              alt="Mission Image"
              className="w-full rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        id="vision"
        className="py-16"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4 dark:text-slate-200">Vision</h2>
            <p className="text-lg text-gray-700 dark:text-slate-300">
              A college of distinction in Science and Technology committed to produce high caliber and employable
              graduates.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="./images/mcst-vision.jpg"
              alt="Vision Image"
              className="w-full rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        id="core-values"
        className="py-16 bg-gray-50 dark:bg-zinc-900"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div className="order-1 md:order-2">
            <img
              src="./images/mcst-values.jpg"
              alt="Core Values Image"
              className="w-full rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-slate-200">Core Values</h2>
            <p className="text-lg text-gray-700 mb-4 dark:text-slate-300">
              Mandaluyong College of Science and Technology Core Values represents the shared beliefs of the Mandaleño.
              These shared beliefs are captured in the four ideals that define a genuine Mandaleño:
            </p>
            <ul className="list-decimal pl-6 text-lg text-gray-700 dark:text-slate-300 space-y-2">
              <li>
                <strong>Naglilingkod:</strong> Genuine service to the general public.
              </li>
              <li>
                <strong>Kumakalinga:</strong> Caring and nurturing people, the environment, and the country.
              </li>
              <li>
                <strong>Disiplinado:</strong> Integrity anchored on responsibility and accountability.
              </li>
              <li>
                <strong>Gawa Hindi Salita:</strong> Known for actions rather than words.
              </li>
              <li>
                <strong>Makabansa:</strong> High sense of nationalism and concern for the greater good.
              </li>
              <li>
                <strong>Kahusayan:</strong> Academic excellence, effective governance, and leadership.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-offset="200"
        id="goals"
        className="py-16 bg-gray-50 dark:bg-zinc-900"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div className="order-1 md:order-2">
            <img
              src="./images/mcst-goals.jpg"
              alt="Goals Image"
              className="w-full rounded-lg shadow-md transition duration-200 dark:brightness-75 dark:contrast-125"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-slate-200">Goals</h2>
            <ol className="list-decimal pl-6 text-lg text-gray-700 space-y-2 dark:text-slate-300">
              <li>Provide Mandaleño access to quality higher education.</li>
              <li>
                Support optimum advancement in instruction, technology, research, innovation, and resource generation.
              </li>
              <li>
                Collaborate with various educational, technical, and professional stakeholders for genuine public
                service.
              </li>
              <li>
                Foster institutional effectiveness and efficiency for continuous improvement and total quality
                management.
              </li>
              <li>Produce graduates who are locally and internationally competent with a high sense of nationalism.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

export default About