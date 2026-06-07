import { Link } from 'react-router-dom';
import Chat from '../assets/chat.png';



function Footer() {
  return (
    <footer className="bg-[#293b8d] text-white py-16 px-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Zarakins Resources</h3>
          <p className="text-gray-300 text-sm">
            Providing high-quality aluminium materials, profiles and handrails
            for residential and commercial construction projects.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white">Buy Now</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>

          <ul className="space-y-2 text-gray-300">
            <li>Aluminium Profiles</li>
            <li>Handrails</li>
            <li>Crystals</li>
            <li>Aluminium Pipes</li>


          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-gray-300">
            <li>📍  Top 10 Mall, Shop A6 , Raji rasaki ,Lagos, Nigeria</li>
            <li>📞 +234 810 621 0700</li>
            <li>✉ zarakinsresources@gmail.com</li>
          </ul>
        </div>

      </div>

    
      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Zarakins Resources. All rights reserved.
      </div>

    </footer>
  )
}



export default Footer