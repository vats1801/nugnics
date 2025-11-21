import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
                <img
                  src="/icons/nugenics.svg"
                  alt="Nugnics Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold text-white text-lg">Nugnics</span>
            </div>
            {/* <div className="text-sm text-gray-400 max-w-xs">
              <p>71-75 Shelton Street, Covent Garden</p>
              <p>London, United Kingdom, WC2H 9JQ</p>
            </div> */}
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-sm text-gray-400">
              {/* <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors ml-4">
                Terms of Service
              </a> */}
            </div>
            <div className="text-xs text-gray-600 text-left md:text-right">
              <p>
                © {new Date().getFullYear()} Nugnics AI Limited. All rights
                reserved.
              </p>
              <p className="mt-2">
                71-75 Shelton Street, Covent Garden, London, United Kingdom,
                WC2H 9JQ
              </p>
            </div>
          </div>
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
