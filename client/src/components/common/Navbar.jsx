import { Link } from "react-router-dom";

function Navbar({ basePath = "/" }) {
  const navItems = [
    { label: "Home", href: "/home#home" },
    { label: "About", href: "/home#about" },
    { label: "Team", href: "/home#team" },
    { label: "Music Society", href: "/home#music-society" },
    { label: "NGO", href: "/home#ngo" },
    { label: "Contact", href: "/home#contact" }
  ];

  return (
    <header className="sticky top-4 z-40 mx-auto mb-8 flex w-full max-w-7xl flex-wrap items-center justify-between gap-5 rounded-[2rem] border border-white/50 bg-white/70 px-5 py-4 shadow-[0_24px_80px_rgba(84,42,24,0.14)] backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-full border border-stone-200 bg-white object-cover"
            src="/legacy/tal_logo1.png"
            alt="Talent Hunt logo"
          />
          <div>
            <p className="font-serif text-xl font-bold text-stone-900">DMS Aarohi</p>
            <p className="text-sm text-stone-600">New Delhi musical society and cultural NGO initiative</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-5 text-sm font-semibold text-stone-700">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-stone-950">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <Link
          className="rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
          to="/ngo/activities"
        >
          NGO
        </Link>
        <Link
          className="rounded-full bg-orange-700 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
          to="/music-society/events"
        >
          Upcoming Event
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
