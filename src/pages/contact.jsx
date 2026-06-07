// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import { Link } from "react-router-dom";
// import Mult from "../assets/mult.jpg";
// import { motion } from "framer-motion";

// function Gallery() {
//   return (
//     <>
//       <Navbar />

//       <section className="relative isolate min-h-[90vh] overflow-hidden">
//         <div className="mt-60">
//           <img
//             src={Mult}
//             alt="Aluminium materials"
//             className="absolute inset-0 h-full w-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-r from-[#10183f]/90 via-[#1f2d69]/80 to-[#1f2d69]/50" />

//         <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-center px-6 py-24 text-white sm:py-32">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl"
//           >
//             Get in touch with us
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mt-5 max-w-xl text-base text-blue-100 sm:text-lg "
//           >
//             A collection of projects built with precision, durability, and style.
//           </motion.p>
//         </div>
//       </section>

//       <section>
//          <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
//               required
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="6"
//               className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
//             >
//               Send Message
//             </button>
//           </form>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Gallery;

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Mult from "../assets/mult.jpg";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted!");
  }

  return (
    <>
      <Navbar />

      <section className="relative isolate min-h-[90vh] overflow-hidden">
        //{" "}
        <div className="mt-60">
          //{" "}
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
            Get in touch with us
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

      <section className="min-h-screen bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-3 text-center text-4xl font-bold text-blue-900">
            Contact Us
          </h1>

          <p className="mb-8 text-center text-gray-600">
            Send us a message and we’ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>

        <h3 className="mb-3 text-center text-4xl font-bold text-blue-900 mt-15 ml-5">
          OR
        </h3>
        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/2348106210700?text=Hello%20I%20am%20interested%20in%20your%20aluminium%20products."
            target="_blank"
            rel="noopener noreferrer"
           className="rounded-lg bg-green-500 px-10 py-6 font-semibold text-white hover:bg-green-600 transition ml-3"
           >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
      Find Us
    </h2>

    <div className="overflow-hidden rounded-2xl shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.385570376982!2d3.30107907524054!3d6.472747993519027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b897af1fc8185%3A0xe706456537c80a16!2sTop%2010%20Mall!5e0!3m2!1sen!2sng!4v1780431547790!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Business Location"
      ></iframe>
    </div>
  </div>
</section>
      

      <Footer />
    </>
  );
}

export default Contact;
