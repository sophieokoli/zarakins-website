import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Profilecard from "../components/profilecard";
import { Link } from "react-router-dom";
import Mult from "../assets/mult.jpg";
import Chat1 from "../assets/chat1.png";
import Chat2 from "../assets/chat2.png";
import Chat3 from "../assets/chat3.png";
import Chat1i from "../assets/chat1i.png";
import Chat1ii from "../assets/chat1ii.png";
import Chat2i from "../assets/chat2i.png";
import Chat3i from "../assets/chat3i.png";
import Chat3ii from "../assets/chat3ii.png";
import Chat13 from "../assets/chat13.png";
import Chat4 from "../assets/chat4.png";
import Chat4i from "../assets/chat4i.png";
import Chat4ii from "../assets/chat4ii.png";
import Chat5 from "../assets/chat5.png";
import Chat6 from "../assets/chat6.png";
import Chat7 from "../assets/chat7.png";
import Chat7i from "../assets/chat7i.png";
import Chat7ii from "../assets/chat7ii.png";
import Chat8 from "../assets/chat8.png";
import Chat8i from "../assets/chat8i.png";
import Chat8ii from "../assets/chat8ii.png";
import Chat9 from "../assets/chat9.png";
import Chat10 from "../assets/chat10.png";
import Chat11 from "../assets/chat11.png";
import Chat11i from "../assets/chat11i.png";
import Chat11ii from "../assets/chat11ii.png";
import Chat12 from "../assets/chat12.png";
import Chat12i from "../assets/chat12i.png";
import Chat12ii from "../assets/chat12ii.png";
import Chat14 from "../assets/chat14.png";
import Chat14i from "../assets/chat14i.png";
import Chat15 from "../assets/chat15.png";
import Chat15i from "../assets/chat15i.png";
import Chat15ii from "../assets/chat15ii.png";
import Chat16 from "../assets/chat16.png";
import Chat17 from "../assets/chat17.png";
import Chat17i from "../assets/chat17i.png";
import Chat17ii from "../assets/chat17ii.png";
import Chat18 from "../assets/chat18.png";
import Chat18i from "../assets/chat18i.png";
import Chat18ii from "../assets/chat18ii.png";
import Chat19 from "../assets/chat19.png";
import Chat19i from "../assets/chat19i.png";
import Chat19ii from "../assets/chat19ii.png";
import Chat20 from "../assets/chat20.png";
import Chat21 from "../assets/chat21.png";
import Chat22 from "../assets/chat22.png";
import Chat23 from "../assets/chat23.png";
import Chat24 from "../assets/chat24.png";
import Chat25 from "../assets/chat25.png";
import What26 from "../assets/what26.jpeg";
import What27 from "../assets/what27.jpeg";
import GalleryCard from "../components/GalleryCard";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ALL_PROFILES = [
  {
    id: 1,
    name: "16mm Flexible",
    colors: [
      { name: "Black", code: "#111111", image: Chat1ii },
      { name: "Silver", code: "#C0C0C0", image: Chat1 },
      { name: "Gold", code: "#D4AF37", image: Chat1i },
    ],
  },
  {
    id: 2,
    name: "16mm bend",
    colors: [
      { name: "Black", code: "#111111", image: Chat2 },
      { name: " Silver", code: "#C0C0C0", image: Chat2i },
      { name: "Gold", code: "#D4AF37", image: Chat13 },
    ],
  },

  {
    id: 3,
    name: "60x25 elbow",
    colors: [
      { name: " Black", code: "#111111", image: Chat3ii },
      { name: " Silver", code: "#C0C0C0", image: Chat3 },
      { name: " Gold", code: "#D4AF37", image: Chat3i },
    ],
  },

  {
    id: 4,
    name: "Dropdown",
    colors: [
      { name: " Black", code: "#111111", image: Chat4 },
      { name: " Silver", code: "#C0C0C0", image: Chat4i },
      { name: " Gold", code: "#D4AF37", image: Chat4ii },
    ],
  },

  {
    id: 5,
    name: "Spigot",
    colors: [
      { name: " Black", code: "#111111", image: Chat9 },
      { name: " Silver", code: "#C0C0C0", image: Chat10 },
      { name: " Gold", code: "#D4AF37", image: Chat5 },
    ],
  },

  {
    id: 6,
    name: "50mm bend 90",
    colors: [
      { name: " Black", code: "#111111", image: Chat7i },
      { name: " Silver", code: "#C0C0C0", image: Chat7ii },
      { name: " Gold", code: "#D4AF37", image: Chat7 },
    ],
  },

  {
    id: 7,
    name: "6x25 Joiner",
    colors: [
      { name: " Black", code: "#111111", image: Chat8 },
      { name: " Silver", code: "#C0C0C0", image: Chat8i },
      { name: " Gold", code: "#D4AF37", image: Chat8ii },
    ],
  },

  {
    id: 8,
    name: "Long flexible",
    colors: [
      { name: " Black", code: "#111111", image: Chat11i },
      { name: " Silver", code: "#C0C0C0", image: Chat11 },
      { name: " Gold", code: "#D4AF37", image: Chat11ii },
    ],
  },

  {
    id: 9,
    name: "Glass holder",
    colors: [
      { name: " Black", code: "#111111", image: Chat12 },
      { name: " Silver", code: "#C0C0C0", image: Chat12i },
      { name: " Gold", code: "#D4AF37", image: Chat12ii },
    ],
  },

  {
    id: 10,
    name: "40mm Downcover",
    colors: [
      { name: " Black", code: "#111111", image: Chat14i },
      { name: " Silver", code: "#C0C0C0", image: Chat16 },
      { name: " Gold", code: "#D4AF37", image: Chat14 },
    ],
  },

  {
    id: 11,
    name: "50mm flexible",
    colors: [
      { name: " Black", code: "#111111", image: Chat15 },
      { name: " Silver", code: "#C0C0C0", image: Chat15i },
      { name: " Gold", code: "#D4AF37", image: Chat15ii },
    ],
  },

  {
    id: 12,
    name: "50mm Downcover",
    colors: [
      { name: " Black", code: "#111111", image: Chat14i },
      { name: " Silver", code: "#C0C0C0", image: Chat16 },
      { name: " Gold", code: "#D4AF37", image: Chat14 },
    ],
  },

  {
    id: 13,
    name: "Decorative plug",
    colors: [
      { name: " Black", code: "#111111", image: Chat17 },
      { name: " Silver", code: "#C0C0C0", image: Chat17i },
      { name: " Gold", code: "#D4AF37", image: Chat17ii },
    ],
  },

  {
    id: 14,
    name: "16mm Glass holder",
    colors: [
      { name: " Black", code: "#111111", image: Chat18 },
      { name: " Silver", code: "#C0C0C0", image: Chat18i },
      { name: " Gold", code: "#D4AF37", image: Chat18ii },
    ],
  },

  {
    id: 15,
    name: "som",
    colors: [
      { name: " Black", code: "#111111", image: Chat19i },
      { name: " Silver", code: "#C0C0C0", image: Chat19 },
      { name: " Gold", code: "#D4AF37", image: Chat19ii },
    ],
  },
];

function Products() {
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
            Our Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 max-w-xl text-base text-blue-100 sm:text-lg "
          >
            Discover quality aluminium profiles, handrails, pipes, and
            accessories for every project.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2b3e92]">Profiles</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#8ba0f1]" />
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {ALL_PROFILES.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <Profilecard profile={item} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <GalleryCard image={Chat25} />
        <GalleryCard image={Chat20} />
        <GalleryCard image={Chat21} />
        <GalleryCard image={Chat22} />
        <GalleryCard image={Chat23} />
        <GalleryCard image={Chat24} />
        <GalleryCard image={What26} />
        <GalleryCard image={What27} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2b3e92]">Pipes</h2>
           <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#8ba0f1]" />
        </div>
       <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h1 className="font-bold text-blue-900 mb-2 text-4xl">
                  40mm Pipe
                </h1>
               
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h1 className="font-bold text-blue-900 mb-2 text-4xl">
                  Top U Channel
                </h1>
              
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h1 className="font-bold text-blue-900 mb-2 text-4xl">
                  Bottom Channel Pipe
                </h1>

              </div>

               <div className="bg-white p-6 rounded-2xl shadow-md">
                <h1 className="font-bold text-blue-900 mb-2 text-4xl">
                  16mm Pipe
                </h1>

              </div>
            </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;
