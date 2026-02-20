import Header from "../header/header";
import Hero from "../hero/hero";
import Footer from "../footer/footer";
import Contact from "../contact/contact";
import About from "../about/about";
import Tours from "../tours/tours";
import Testimonials from "../testimonials/testimonials";

export default function Mhome() {
    return (
        <>
            <Header />

            <main className="relative bg-[#070b14] overflow-x-hidden">
                <Hero />         {/* id="home" */}
                <Tours />        {/* id="tours" */}
                <About />        {/* id="about" */}
                <Testimonials />{/* id="testimonials" */}
                <Contact />      {/* id="contact" */}
            </main>

            <Footer />
        </>
    );
}
