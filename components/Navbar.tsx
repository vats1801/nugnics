import React, { useState } from "react";
import { Bot, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToEmail = () => {
    setIsOpen(false); // Close mobile menu if open
    const element = document.querySelector("#email-input");
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
      <div className="mx-auto max-w-6xl rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white shadow-lg shadow-violet-500/30">
            <Bot size={20} />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">
            Nugnics
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, "#")}
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={(e) => handleSmoothScroll(e, "#features")}
            className="hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#use-cases"
            onClick={(e) => handleSmoothScroll(e, "#use-cases")}
            className="hover:text-white transition-colors"
          >
            Use Cases
          </a>
          {/* <a href="#pricing" className="hover:text-white transition-colors">Pricing</a> */}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={handleScrollToEmail}
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20 transition-all border border-white/5"
          >
            Try it Free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 rounded-2xl bg-neutral-900 border border-white/10 p-4 flex flex-col gap-4 md:hidden shadow-2xl">
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, "#")}
            className="text-gray-300 hover:text-white"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={(e) => handleSmoothScroll(e, "#features")}
            className="text-gray-300 hover:text-white"
          >
            Features
          </a>
          <a
            href="#use-cases"
            onClick={(e) => handleSmoothScroll(e, "#use-cases")}
            className="text-gray-300 hover:text-white"
          >
            Use Cases
          </a>
          {/* <a href="#pricing" className="text-gray-300 hover:text-white">
            Pricing
          </a> */}
          <button
            onClick={handleScrollToEmail}
            className="w-full rounded-full bg-violet-600 py-2 text-sm font-medium text-white"
          >
            Try it Free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
