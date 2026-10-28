"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/Icons";
import { mainNav, searchIndex, siteName } from "@/data/site";

function NavLink({ item, className, children, onClick }) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function isActive(pathname, item) {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || item.children?.some((child) => child.href === pathname);
}

function Logo({ className }) {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label={siteName}>
      <Image src="/images/logo.webp" alt={siteName} width={300} height={132} preload className={className} />
    </Link>
  );
}

function DesktopMenu({ pathname }) {
  return (
    <nav aria-label="Header Menu" className="h-full">
      <ul className="flex h-full items-center">
        {mainNav.map((item) => {
          const active = isActive(pathname, item);
          return (
            <li key={item.href} className="group relative flex h-full items-center">
              <NavLink
                item={item}
                className={`relative flex h-1/2 items-center gap-[6px] px-[12.5px] text-[15px] leading-[1.3] font-bold uppercase transition-colors hover:text-brand ${
                  active ? "text-brand" : "text-palette-3"
                }`}
              >
                {item.label}
                {item.children && <ChevronDownIcon className="h-[8px] w-[8px]" />}
                {/* Blocksy "type-2" menu indicator */}
                <span
                  className={`absolute bottom-0 left-[12.5px] h-[2px] bg-brand transition-all duration-200 ${
                    active ? "w-[calc(100%-25px)]" : "w-0 group-hover:w-[calc(100%-25px)]"
                  }`}
                />
              </NavLink>
              {item.children && (
                <ul className="invisible absolute top-full left-0 z-20 w-[200px] translate-y-[10px] rounded-b-[2px] bg-palette-4 opacity-0 shadow-[0_10px_20px_rgba(41,51,61,0.1)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.href} className="border-b border-dashed border-white/10 last:border-b-0">
                      <NavLink
                        item={child}
                        className={`block px-[19.5px] py-[13px] text-[12px] leading-[1.3] font-medium transition-colors hover:text-palette-1 ${
                          pathname === child.href ? "text-palette-1" : "text-white"
                        }`}
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const seen = new Set();
    return searchIndex.filter((entry) => {
      if (seen.has(entry.href) || !entry.label.toLowerCase().includes(q)) return false;
      seen.add(entry.href);
      return true;
    });
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[rgba(18,21,25,0.98)]" role="dialog" aria-modal="true" aria-label="Search">
      <div className="flex justify-end p-[30px]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search modal"
          className="flex h-[33px] w-[33px] items-center justify-center rounded-[5px] text-white/70 transition-colors hover:text-white"
        >
          <CloseIcon className="h-[12px] w-[12px]" />
        </button>
      </div>
      <div className="mx-auto mt-[10vh] w-full max-w-[800px] px-[20px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (results[0]) window.location.href = results[0].href;
          }}
          className="relative"
        >
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            title="Search for..."
            className="w-full border-0 border-b-2 border-white/20 bg-transparent py-[15px] pr-[60px] text-[30px] text-white outline-none placeholder:text-white/60 focus:border-white/40"
          />
          <button
            type="submit"
            aria-label="Search button"
            className="absolute top-1/2 right-0 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-palette-1 text-white/70 hover:text-white"
          >
            <SearchIcon className="h-[15px] w-[15px]" />
          </button>
        </form>
        {query.trim() && (
          <ul className="mt-[30px] space-y-[12px]">
            {results.length === 0 && <li className="text-[14px] font-medium text-white/60">No results</li>}
            {results.map((r) => (
              <li key={r.href}>
                <Link href={r.href} onClick={onClose} className="text-[14px] leading-[1.4] font-medium text-white hover:text-palette-1">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose, pathname }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "visible" : "invisible"}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute top-0 right-0 flex h-full w-[90vw] flex-col bg-[rgba(18,21,25,0.98)] shadow-[0_0_70px_rgba(0,0,0,0.35)] transition-transform duration-300 md:w-[65vw] lg:w-[500px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-[20px]">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className="flex h-[33px] w-[33px] items-center justify-center text-white/70 hover:text-white"
          >
            <CloseIcon className="h-[12px] w-[12px]" />
          </button>
        </div>
        <nav aria-label="Mobile Menu" className="flex-1 overflow-y-auto px-[35px] pb-[40px]">
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <div className="flex items-center justify-between">
                  <NavLink
                    item={item}
                    onClick={onClose}
                    className={`block py-[7px] text-[20px] font-bold ${isActive(pathname, item) ? "text-palette-1" : "text-white"}`}
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Expand ${item.label}`}
                      onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                      className="p-[8px] text-white"
                    >
                      <ChevronDownIcon
                        className={`h-[10px] w-[10px] transition-transform ${expanded === item.href ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.href && (
                  <ul className="pb-[10px] pl-[20px]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavLink
                          item={child}
                          onClick={onClose}
                          className={`block py-[5px] text-[16px] font-bold ${pathname === child.href ? "text-palette-1" : "text-white/80"}`}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = searchOpen || menuOpen ? "hidden" : "";
  }, [searchOpen, menuOpen]);

  return (
    <header id="header" className="relative z-30 bg-white">
      {/* Desktop row */}
      <div className="mx-auto hidden h-[120px] w-[calc(100vw-60px)] items-center justify-between lg:flex">
        <Logo className="h-auto max-h-[100px] w-auto" />
        <div className="flex h-full items-center">
          <DesktopMenu pathname={pathname} />
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="ml-[20px] flex items-center text-palette-3 transition-colors hover:text-palette-1"
          >
            <SearchIcon className="h-[15px] w-[15px]" />
          </button>
        </div>
      </div>

      {/* Mobile / tablet row */}
      <div className="mx-auto flex h-[70px] w-[calc(100vw-60px)] items-center justify-between lg:hidden">
        <Logo className="h-auto max-h-[60px] w-auto" />
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Menu"
          className="flex items-center gap-[8px] text-palette-3 transition-colors hover:text-palette-1"
        >
          <span className="text-[12px] font-semibold uppercase sm:hidden">Menu</span>
          <MenuIcon className="h-[14px] w-[18px]" />
        </button>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </header>
  );
}
