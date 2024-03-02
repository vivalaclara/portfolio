import Header from "../../components/header/header"
import Intro from "../../components/intro/intro"
import About from "../../components/about/about"
import Footer from "../../components/footer/footer"
export default function Home(){
    return(
        <>
        <Header />
        <main>
        <Intro />
        <About />
        </main>
       <Footer />
        </>
    )
}