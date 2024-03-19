import type { Metadata } from "next"

import Heading from "@/components/heading"

// This is the static metadata object to add metadata to the page
export const metadata: Metadata = {
  title: "Next App: Integations",
  description: "This is the Integrations page for the Next App."
}

// This is the integrations page content to render at the /integrations URL
const Integrations = () => {
  return (
    <>
      <Heading level={1}>Integrations</Heading>
    </>
  )
}

export default Integrations