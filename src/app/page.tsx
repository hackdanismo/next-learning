import type { Metadata } from "next"

import Heading from "@/components/heading"
import Button from "@/components/button"
import AppLink from "@/components/link"

// This is the static metadata object to add metadata to the page
export const metadata: Metadata = {
  title: "Next App: Home",
  description: "This is the Home page for the Next App."
}

// This is the homepage content
const Home = () => {
  return (
    <>
      <Heading level={1}>Test</Heading>
      <p className="font-bold">TailwindCSS is working!</p>
      <Button>Button Test</Button>
      <AppLink to="https://www.frontify.com/en/" openAsTab>Frontify</AppLink>
    </>
  )
}

export default Home
