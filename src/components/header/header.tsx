"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-xl font-bold text-gray-900">CEEC Benaias</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/professor"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Professor
          </Link>
          <Link
            href="/programas"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Programas
          </Link>
          <Link
            href="/lutas"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Lutas
          </Link>

          <Link
            href="/academia"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Academia
          </Link>
          <Link
            href="/livro"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Livro
          </Link>
          <Link
            href="/loja"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Loja
          </Link>
          <Link
            href="/galeria"
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Galeria
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/professor"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Professor
            </Link>
            <Link
              href="/programas"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Programas
            </Link>
            <Link
              href="/lutas"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Lutas
            </Link>
            <Link
              href="/Academia"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Academia
            </Link>
            <Link
              href="/livro"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Livro
            </Link>

            <Link
              href="/loja"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Loja
            </Link>
            <Link
              href="/galeria"
              className="block text-gray-700 hover:text-red-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
