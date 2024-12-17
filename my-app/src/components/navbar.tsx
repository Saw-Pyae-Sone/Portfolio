import React, { useState } from "react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg py-4 top-0 z-50">
        <div className="container mx-auto flex items-center px-4">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-grow justify-center">
            <nav>
                <ul className="flex space-x-12">
                <li><a href="#" className="text-black hover:text-primary transition-colors duration-300 no-underline">Home</a></li>
                <li><a href="#" className="text-black hover:text-primary transition-colors duration-300 no-underline">Experience</a></li>
                <li><a href="#" className="text-black hover:text-primary transition-colors duration-300 no-underline">Education</a></li>
                <li><a href="#" className="text-black hover:text-primary transition-colors duration-300 no-underline">Skills</a></li>
                <li><a href="#" className="text-black hover:text-primary transition-colors duration-300 no-underline">Projects</a></li>
                </ul>
            </nav>
            </div>

            {/* Mobile Menu Button (Aligned to the right) */}
            <div className="md:hidden ml-auto">
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300"
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <nav className="md:hidden bg-gray-50 border-t border-gray-200">
            <ul className="px-4 py-2">
                <li><a href="#" className="block py-2 hover:text-primary no-underline">Home</a></li>
                <li><a href="#" className="block py-2 hover:text-primary no-underline">Experience</a></li>
                <li><a href="#" className="block py-2 hover:text-primary no-underline">Education</a></li>
                <li><a href="#" className="block py-2 hover:text-primary no-underline">Skills</a></li>
                <li><a href="#" className="block py-2 hover:text-primary no-underline">Projects</a></li>
            </ul>
            </nav>
        )}
    </header>
  );
}

export default NavBar;
