import Card from "./components/Card"
import PhotoModel from "../src/Imgs/PhotoModel.svg"
import NavBar from "./components/NavBar"
import CarrouselFadeIn from "./components/CarrouselFadeIn"

function App() {


  return (
    <>
      <NavBar />
      <main>
      <CarrouselFadeIn />
        <section style={{ display: "flex", justifyContent: "between" }}>
          <Card title={"Casa 1"} address={"Rua 1"} price={"R$ 1.000,00"} image={PhotoModel} />
          <Card title={"Casa 2"} address={"Rua 2"} price={"R$ 2.000,00"} image={PhotoModel} />
          <Card title={"Casa 3"} address={"Rua 3"} price={"R$ 3.000,00"} image={PhotoModel} />
        </section>
      </main>
    </>
  )
}

export default App
