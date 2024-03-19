import Heading from "@/components/heading"
import Button from "@/components/button"
import Link from "@/components/link"

const Home = () => {
  return (
    <main>
      <Heading level={1}>Test</Heading>
      <Button>Button Test</Button>
      <Link to="https://www.frontify.com/en/" openAsTab>Frontify</Link>
    </main>
  )
}

export default Home
