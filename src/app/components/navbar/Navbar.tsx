"use client";

import React, { useState } from "react";
import "./navbar.scss";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Sobre mim", href: "#" },
    { label: "Skills", href: "#" },
    { label: "Portfólio", href: "#" },
    { label: "Contato", href: "#" },
  ];

  return (
    <nav className="p-8 max-w-7xl mx-auto relative z-10">
      <div className="flex justify-between items-center">
      <div className="logo">
        <Image src="./images/logo_branco.png" alt="Logo" width={150} height={150} />
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
      <button className="hidden md:block bg-brand-purple px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-pink transition-colors">
        Solicitar Orçamento
      </button>
      <button
        type="button"
        aria-label="Abrir menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((current) => !current)}
        className="md:hidden flex flex-col gap-1.5"
      >
        <span className="w-6 h-0.5 bg-white" />
        <span className="w-6 h-0.5 bg-white" />
        <span className="w-6 h-0.5 bg-white" />
      </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-6 rounded-xl border border-white/10 bg-black/70 backdrop-blur-sm p-4 flex flex-col gap-4 text-sm font-medium text-gray-300">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
          <button className="bg-brand-purple px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-pink transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      )}
    </nav>
  )
}
