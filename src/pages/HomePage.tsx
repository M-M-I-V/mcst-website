import HeroSection from "../components/HeroSection"
import CoreValues from "../components/CoreValues"
import Commitment from "../components/Commitment"
import NewsEvents from "../components/NewsEvents"
import CallToAction from "../components/CallToAction"
import ContactSection from "../components/ContactSection"
import "../index.css"

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CoreValues />
      <Commitment />
      <NewsEvents />
      <CallToAction />
      <ContactSection />
    </>
  )
}

export default HomePage
