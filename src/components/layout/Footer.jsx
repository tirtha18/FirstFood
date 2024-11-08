import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <footer className="text-center text-zinc-400 py-8 border-t border-zinc-800 bg-gray-700">
        <div className="flex justify-center gap-4  mb-4">
          <a
            href="https://github.com/tirtha18/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl text-zinc-400 hover:text-yellow-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/tirtha-biswas-594581230/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl text-zinc-400 hover:text-yellow-500 transition-colors duration-300" />
          </a>
        </div>
        <p>&copy; 2024 First Food. All rights reserved.</p>
      </footer>
    </div>
  );
}
