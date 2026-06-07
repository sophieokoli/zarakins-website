import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Mult from "../assets/mult.jpg";
import { motion } from "framer-motion";
import GalleryCard from "../components/GalleryCard";
import What1 from "../assets/what1.jpeg";
import What2 from "../assets/what2.jpeg";
import What3 from "../assets/what3.jpeg";
import What4 from "../assets/what4.jpeg";
import What5 from "../assets/what5.jpeg";
import What6 from "../assets/what6.jpeg";
import What7 from "../assets/what7.jpeg";
import What8 from "../assets/what8.jpeg";
import What9 from "../assets/what9.jpeg";
import What10 from "../assets/what10.jpeg";
import What11 from "../assets/what11.jpeg";
import What12 from "../assets/what12.jpeg";
import What13 from "../assets/what13.jpeg";
import What14 from "../assets/what14.jpeg";
import What15 from "../assets/what15.jpeg";
import What16 from "../assets/what16.jpeg";
import What17 from "../assets/what17.jpeg";
import What18 from "../assets/what18.jpeg";
import What19 from "../assets/what19.jpeg";
import What20 from "../assets/what20.jpeg";
import What21 from "../assets/what21.jpeg";
import What22 from "../assets/what22.jpeg";
import What23 from "../assets/what23.jpeg";
import What24 from "../assets/what24.jpeg";
import What25 from "../assets/what25.jpeg";
import Zara7 from "../assets/zara7.jpeg";
import Zara11 from "../assets/zara11.jpeg";


function Gallery() {
  return (
    <>
      <Navbar />

      <section className="relative isolate min-h-[90vh] overflow-hidden">
        <div className="mt-60">
          <img
            src={Mult}
            alt="Aluminium materials"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#10183f]/90 via-[#1f2d69]/80 to-[#1f2d69]/50" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-center px-6 py-24 text-white sm:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl"
          >
            Our Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 max-w-xl text-base text-blue-100 sm:text-lg "
          >
            A collection of projects built with precision, durability, and
            style.
          </motion.p> 
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <GalleryCard image={What1} />
          <GalleryCard image={What2} />
          <GalleryCard image={What3} />
          <GalleryCard image={What4} />
          <GalleryCard image={What5} />
          <GalleryCard image={What6} />
          <GalleryCard image={What7} />
          <GalleryCard image={What8} />
          <GalleryCard image={What9} />
          <GalleryCard image={What10} />
          <GalleryCard image={What11} />
          <GalleryCard image={What12} />
          <GalleryCard image={What13} />
          <GalleryCard image={What14} />
          <GalleryCard image={What15} />
          <GalleryCard image={What16} />
          <GalleryCard image={What17} />
          <GalleryCard image={What18} />
          <GalleryCard image={What19} />
          <GalleryCard image={What20} />
          <GalleryCard image={What21} />
          <GalleryCard image={What22} />
          <GalleryCard image={What23} />
          <GalleryCard image={What24} />
          <GalleryCard image={What25} />
          <GalleryCard image={Zara7} />
          <GalleryCard image={Zara11} />
  
        </div>
      </section>

        <section className="bg-[#10183f] text-white text-center py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Like what you see?</h2>
            <p className="mt-4 text-lg text-blue-200">We are ready to help with your next residential or commercial project.</p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-lg bg-[#4d66d0] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#5b74de]"
            >
              Contact Us Now
            </Link>
          </div>
        </section>

      <Footer />
    </>
  );
}

export default Gallery;
