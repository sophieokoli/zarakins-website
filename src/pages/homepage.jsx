import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Stats from "../components/stats";
import { Link } from "react-router-dom";
import Ludo from "../assets/ludo.jpg";
import Prof from "../assets/prof.jpg";
import Pipes from "../assets/pipess.jfif";
import { motion } from "framer-motion";

const productCards = [
  { title: "Pipes", image: Pipes },
  { title: "Profiles", image: Prof },
];

const benefits = [
  {
    title: "Durability  🏗",
    text: "Our aluminium materials are designed for long-term strength and reliable performance.",
  },
  {
    title: "High Quality  ⭐",
    text: "We supply carefully selected products that meet industry-grade standards.",
  },
  {
    title: "Modern Designs  🎨",
    text: "Our profiles support clean architectural finishes for contemporary projects.",
  },
  {
    title: "Reliable Service  🤝",
    text: "We help clients choose the right materials for every build stage.",
  },
];

const cardContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Homepage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <section className="relative isolate min-h-[80vh] overflow-hidden flex items-center">
          <img
            src={Ludo}
            alt="Aluminium materials"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#10183f]/95 via-[#1f2d69]/85 to-[#1f2d69]/45" />

          <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-center px-6 py-24 text-white sm:py-32 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl"
            >
              Quality Aluminium Profiles and Handrails
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 max-w-xl text-base text-blue-100 sm:text-lg"
            >
              Premium materials built for durability, clean aesthetics, and
              dependable project outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-medium text-blue-100 bg-black/20 p-5 rounded-xl backdrop-blur-sm"
            >
              <p className="flex items-center gap-2">
                <span className="text-[#8ba0f1]">✔</span> Premium Aluminium
                Materials
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#8ba0f1]">✔</span> Imported from Turkey
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#8ba0f1]">✔</span> Residential &
                Commercial Projects
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#8ba0f1]">✔</span> Competitive Pricing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link
                to="/products"
                className="mt-8 inline-block rounded-lg bg-[#4d66d0] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#5b74de] hover:scale-105 duration-200"
              >
                See Our Products
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#2b3e92] md:text-4xl">
                Who We Are
              </h2>
              <div className="mt-4 h-1 w-20 rounded bg-[#8ba0f1]" />
            </div>
            <p className="md:col-span-3 text-lg leading-relaxed text-slate-600">
              Zarakins Resources provides high-quality aluminium materials
              designed for strength, durability, and modern style. We specialize
              in aluminium profiles and handrails imported from Turkey,
              supporting both residential and commercial projects with products
              that meet industry standards. Our focus is simple: dependable
              materials, practical guidance, and consistent service.
            </p>
          </div>
        </section>

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#2B3E92]">
                Our Products
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#8ba0f1]" />
            </div>

            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 grid gap-8 sm:grid-cols-2"
            >
              {productCards.map((product) => (
                <motion.article
                  key={product.title}
                  variants={cardItemVariants}
                  className="overflow-hidden rounded-2xl bg-white text-slate-800 shadow-md transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-semibold text-[#293b8d]">
                      {product.title}
                    </h3>
                    <Link
                      to="/products"
                      className="mt-5 inline-block rounded-lg bg-[#293b8d] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1f2d69]"
                    >
                      See More
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#2b3e92]">
                Why Choose Us
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded bg-[#8ba0f1]" />
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-[#24367f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Installation Services
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mb-10">
              We don’t just supply quality aluminium materials, we also provide
              professional installation services for residential and commercial
              projects.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-blue-900 mb-2">
                  Handrail Installation
                </h3>
                <p className="text-gray-600 text-sm">
                  Clean and durable handrail fittings for modern buildings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-blue-900 mb-2">
                  Aluminium Profiles
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional installation of aluminium profiles for various
                  spaces.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-blue-900 mb-2">
                  Project Support
                </h3>
                <p className="text-gray-600 text-sm">
                  We help clients choose and install the right materials for
                  their projects.
                </p>
              </div>
            </div>

           <div className="mt-20">
            <Link to="/contact" className='bg-gray-500 text-white px-12 py-5 rounded-lg font-bold text-center hover:bg-gray-600 transition mt-15'>Contact Us</Link>
           </div>
                

          </div>
        </section>

        <section>
          <Stats />
        </section>

        <section className="bg-[#10183f] text-white text-center py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need Quality Aluminium Materials?
            </h2>
            <p className="mt-4 text-lg text-blue-200">
              We are ready to help with your next residential or commercial
              project.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-lg bg-[#4d66d0] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#5b74de]"
            >
              Contact Us Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Homepage;
