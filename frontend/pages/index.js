import Title from "@/components/Title/Title"
import Carousel from "@/components/Carousel/Carousel"
import Call from "@/components/CallToAction/Call"
import Description from "@/components/Description/Description"

export default function Home() {
  return (
    <>
        <main> 
          <Title title = "Le parc de Goûts"/>
          <Carousel />
          <Call />
          <Description /> 
        </main>
    </>  
  )
}
