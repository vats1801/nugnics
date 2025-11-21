import React from "react";
import { Bot, Twitter, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
            <Bot size={20} />
          </div>
          <span className="font-semibold text-white">Nugnics</span>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          {/* <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a> */}
          <div className=" text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Nugnics. All rights reserved.
          </div>
          {/* <a href="#" className="hover:text-white transition-colors">
            Cookie Policy
          </a> */}
        </div>

        {/* <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div> */}
      </div>
      {/* <div className="mt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Nugnics. All rights reserved.
      </div> */}
    </footer>
  );
};

export default Footer;
