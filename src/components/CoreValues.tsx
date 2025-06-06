import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import featureImage from "../assets/images/feature.jpg"
import "../index.css"

const CoreValues = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="200"
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-4">
            Core Values That Drive Excellence at Mandaluyong College of Science and Technology
          </h2>
          <p className="text-lg">
            At MCST, we are committed to genuine public service and fostering care within our community. Our core values
            of discipline, action over words, nationalism, and excellence guide us in shaping responsible and innovative
            leaders.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-offset="200"
          className="md:w-1/2 mt-8 md:mt-0 transition duration-200 dark:brightness-75 dark:contrast-125"
        >
          <img
            src={featureImage || "/placeholder.svg"}
            alt="Feature Image"
            className="w-full md:w-3/4 mx-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default CoreValues
