function Footer() {
  return (
    <footer className="relative mx-auto mt-10 w-full max-w-7xl overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-stone-950 via-[#0c1216] to-[#0f1c16] px-6 py-10 text-white shadow-[0_30px_120px_rgba(12,18,22,0.38)] md:px-10">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -left-16 -top-24 h-56 w-56 rounded-full bg-emerald-500/18 blur-3xl" />
        <span className="absolute -right-24 top-6 h-64 w-64 rounded-full bg-amber-400/12 blur-[110px]" />
        <span className="absolute bottom-[-90px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="soundwave-container">
              <span className="soundwave-ring ring-1" />
              <span className="soundwave-ring ring-2" />
              <span className="soundwave-ring ring-3" />
              <img
                className="relative z-10 h-14 w-14 rounded-full border border-stone-200 bg-white object-cover shadow-xl"
                src="/legacy/tal_logo1.png"
                alt="Talent Hunt logo"
                decoding="async"
                width="56"
                height="56"
              />
            </div>
            <div>
              <p className="font-serif text-2xl">DMS Aarohi</p>
              <p className="text-sm text-stone-200">Music, culture, talent, and NGO community support.</p>
            </div>
          </div>
          {/* <p className="max-w-xl text-sm leading-7 text-stone-200">
            Registered musical society from New Delhi focused on concerts, talent hunt programming, community outreach,
            and meaningful public participation through music and service.
          </p> */}
        </div>

        {/* <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-200">Quick Links</p>
          <div className="grid gap-2">
            <a className="text-sm text-stone-200 transition hover:text-white hover:underline" href="/home#music-society">
              Music Society
            </a>
            <a className="text-sm text-stone-200 transition hover:text-white hover:underline" href="/music-society/events">
              Events
            </a>
            <a className="text-sm text-stone-200 transition hover:text-white hover:underline" href="/ngo/activities">
              NGO Activities
            </a>
          </div>
        </div> */}

        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-200">Contact</p>
          <p className="text-sm text-stone-200">Email: dmsaarohi@gmail.com</p>
          <p className="text-sm text-stone-200">Phone: +91-9810225442</p>
          <p className="text-sm text-stone-200">A5, 272, Paschim Vihar, New Delhi</p>
        </div>
        
      </div>

      {/* <p className="relative mt-8 border-t border-white/10 pt-4 text-sm text-stone-300">
        Copyright {new Date().getFullYear()} DMS Aarohi Musical Society. All rights reserved.
      </p> */}
      <p className="relative  pt-4 text-sm text-stone-300">
        Copyright {new Date().getFullYear()} DMS Aarohi Musical Society. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
