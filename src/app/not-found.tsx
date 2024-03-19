import type { Metadata } from "next"

// This is the static metadata object to add metadata to the page
export const metadata: Metadata = {
  title: "Next App: 404 Not Found",
  description: "This is the 404 Not Found page for the Next App."
}

const NotFound = () => {
  return (
    <div>404: Not Found</div>
  )
}

export default NotFound