import type { Metadata } from "next"

import Heading from "@/components/heading"

// This is the static metadata object to add metadata to the page
export const metadata: Metadata = {
  title: "Next App: About",
  description: "This is the About page for the Next App."
}

// This is the about page content to render at the /about URL
const About = () => {
  return (
    <>
      <Heading level={1}>About</Heading>
    </>
  )
}

export default About