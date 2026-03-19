import { useState } from "react";

function Navbar({ basePath = "/" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/home#home" },
    { label: "About Us", href: "/home#about" },
    { label: "Team", href: "/home#team" },
    { label: "Contact Us", href: "/home#contact" }
  ];

  return (
    <header className="sticky top-4 z-40 mx-auto mb-8 flex w-full max-w-7xl flex-wrap items-center justify-between gap-5 rounded-[2rem] border border-white/50 bg-white/70 px-5 py-4 shadow-[0_24px_80px_rgba(84,42,24,0.14)] backdrop-blur-xl">
      <div className="relative flex items-center gap-3">
        <div className="soundwave-container">
          <span className="soundwave-ring ring-1" />
          <span className="soundwave-ring ring-2" />
          <span className="soundwave-ring ring-3" />
          <img
            className="relative z-10 h-14 w-14 rounded-full border border-stone-200 bg-white object-cover shadow-lg"
            src="/legacy/tal_logo1.png"
            alt="Talent Hunt logo"
            decoding="async"
            width="56"
            height="56"
          />
        </div>
        <div>
          <p className="font-serif text-xl font-bold text-stone-900">DMS Aarohi</p>
          <p className="text-sm text-stone-600">Music society & NGO platform</p>
        </div>
      </div>

      <button
        type="button"
        className="ml-auto block rounded-full border border-stone-200 bg-white/80 p-2 text-stone-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white md:hidden"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute left-0 top-[70px] w-full flex-col gap-4 border-t border-stone-200 bg-white/95 px-5 py-4 text-sm font-semibold text-stone-700 shadow-lg md:static md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-none md:bg-transparent md:p-0 md:shadow-none`}
      >
        <div className="flex items-center justify-between md:hidden">
          <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Menu</span>
        </div>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-stone-950">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
