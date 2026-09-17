"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteInfo, whatsappHref } from "@/lib/site";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X, BookOpen } from "lucide-react";

export function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const primaryMobileLinks = [
    { href: "/correccion-de-estilo", label: "Servicios", icon: Sparkles },
    { href: "/portafolio", label: "Portafolio", icon: BookOpen },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-transform duration-300 bg-white/95 backdrop-blur-md ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "shadow-sm border-b border-ink/5" : ""}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-20">
          <Link href="/correccion-de-estilo" className="font-display group flex flex-col justify-center bg-cream px-6 h-full -ml-6 transition-colors hover:bg-cream-soft">
            <span className="block text-xs font-bold uppercase tracking-widest text-ink transition-colors group-hover:text-terracotta">
              {siteInfo.tagline}
            </span>
            <span className="block text-xl italic text-ink">{siteInfo.name}</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 font-display italic text-muted">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-ink relative ${
                    isActive ? "text-ink font-bold" : ""
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-terracotta rounded-full" />
                  )}
                </Link>
              );
            })}
            <a 
              href={whatsappHref("Hola Amparo, me gustaría consultar por tus servicios de corrección de estilo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 rounded-full bg-coral px-6 py-2 text-sm font-semibold not-italic text-ink shadow-sm transition-transform hover:scale-105 hover:bg-coral/90 active:scale-95"
            >
              Contactar
            </a>
          </nav>
        </div>
      </header>

      {/* MOBILE TOP BAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 bg-cream/95 backdrop-blur-md border-b border-ink/5 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-center px-4 py-3">
          <Link href="/correccion-de-estilo" className="font-display text-center">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-ink">
              {siteInfo.tagline}
            </span>
            <span className="block text-lg italic text-ink">{siteInfo.name}</span>
          </Link>
        </div>
      </header>

      {/* MOBILE BOTTOM TAB BAR */}
      <nav 
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 bg-cream/95 backdrop-blur-lg border-t border-ink/5 pb-[env(safe-area-inset-bottom)] ${
          isHidden && !mobileMenuOpen ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex h-[72px] items-center justify-around px-2">
          {primaryMobileLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                  isActive ? "text-terracotta" : "text-muted hover:text-ink"
                }`}
              >
                <div className={`p-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-terracotta/10 scale-110" : ""}`}>
                   <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[10px] font-medium tracking-wide ${isActive ? "font-bold" : ""}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
              mobileMenuOpen ? "text-terracotta" : "text-muted hover:text-ink"
            }`}
          >
            <div className={`p-1.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? "bg-terracotta/10 scale-110" : ""}`}>
              {mobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2} />}
            </div>
            <span className={`text-[10px] font-medium tracking-wide ${mobileMenuOpen ? "font-bold" : ""}`}>
              {mobileMenuOpen ? "Cerrar" : "Menú"}
            </span>
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div 
        className={`fixed inset-0 z-30 bg-cream/98 backdrop-blur-xl pt-24 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-8 py-8 h-full overflow-y-auto pb-32">
          <nav className="flex flex-col gap-8 font-display italic text-3xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors hover:text-terracotta flex items-center gap-4 ${
                    isActive ? "text-terracotta font-bold" : "text-ink"
                  }`}
                >
                  {link.label}
                  {isActive && <span className="h-2 w-2 rounded-full bg-terracotta" />}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      
      {/* SPACER */}
      <div className="h-[68px] md:h-24 shrink-0" />
    </>
  );
}
