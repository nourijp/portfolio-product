import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Capabilities from "./components/home/capabilities"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import CTASection from "./components/ui/cta-section"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <Capabilities/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
      <Experience/>
      <Divider/>
      <CTASection/>
      <Divider/>
    </main>
  )
}

export default page
