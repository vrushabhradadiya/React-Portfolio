import Navbar from "../Componate/Navbar/Navbar"
import Banner from "../Componate/Home/Banner/Banner"
import Welcome from "../Componate/Home/welcome/Welcome"
import Cards from "../Componate/Home/welcome/Cards"
import Team from "../Componate/Home/Team/Team"
import Work from "../Componate/Home/Work/Work"
import Start from "../Componate/Home/Start/Start"
import Footer from "../Componate/Footer/Footer"
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Welcome />
      <Cards />
      <Team />
      <Work />
      <Start />
      <Footer />
      
    </>
  )
}
