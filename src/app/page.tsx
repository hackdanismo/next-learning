import Heading from "@/components/heading"
import Button from "@/components/button"
import AppLink from "@/components/link"

const Home = () => {
  return (
    <main>
      <Heading level={1}>Test</Heading>
      <p className="font-bold">TailwindCSS is working!</p>
      <Button>Button Test</Button>
      <AppLink to="https://www.frontify.com/en/" openAsTab>Frontify</AppLink>
    </main>
  )
}

export default Home
