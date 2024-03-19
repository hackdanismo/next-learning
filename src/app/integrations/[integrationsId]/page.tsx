import type { Metadata } from "next"

import Heading from "@/components/heading"

// This is the static metadata object to add metadata to the page
export const metadata: Metadata = {
  title: "Next App: Integrations Details Page",
  description: "This is the Integrations Details page for the Next App."
}

// This is the integration details page content to render at the /integrations/123 or integrations/45 URL
const IntegrationsDetails = ({ params }: {
  params: { integrationsId: string }
}) => {
  return (
    <>
      <Heading level={1}>Integrations Details</Heading>
      <p>Integration ID from the URL: {params.integrationsId}</p>
    </>
  )
}

export default IntegrationsDetails