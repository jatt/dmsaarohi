const services = [
  {
    id: "edu-india",
    title: "Bridge Schooling (Rural India)",
    raised: 320000,
    goal: 1200000,
    description: "Evening learning pods with books, uniforms, and tutors for government-school children in villages.",
    image: "/legacy/bd1.jpg"
  },
  {
    id: "music-therapy",
    title: "Music Therapy Camps",
    raised: 145000,
    goal: 800000,
    description: "Certified music therapists and counselors supporting children in relief shelters and low-income wards.",
    image: "/legacy/bd2.jpg"
  },
  {
    id: "food-relief",
    title: "Community Food Relief",
    raised: 510000,
    goal: 1500000,
    description: "Weekly nutrition kits (rice, dal, oil) for urban bastis and migrant families, coordinated with local SHGs.",
    image: "/legacy/bd3.jpg"
  },
  {
    id: "skills-lab",
    title: "Youth Skills Lab",
    raised: 210000,
    goal: 900000,
    description: "After-school digital + music production labs for Class 9-12 students, mentored by working professionals.",
    image: "/legacy/bd4.jpg"
  },
  {
    id: "health-camp",
    title: "Mobile Health Camps",
    raised: 185000,
    goal: 750000,
    description: "Monthly basic health + hemoglobin camps in resettlement colonies, using music circles for child engagement.",
    image: "/legacy/image1.jpeg"
  },
  {
    id: "scholarship",
    title: "Scholarships for Artists",
    raised: 275000,
    goal: 1000000,
    description: "Sponsor instruments, tuition, and travel for promising Indian artists from low-income backgrounds.",
    image: "/legacy/patrons.jpg"
  }
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-[2rem] border border-amber-100 bg-gradient-to-br from-[#fff5e8] via-white to-[#fff1db] p-6 shadow-[0_24px_80px_rgba(255,194,122,0.24)] md:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-800">Services</p>
          <h2 className="mt-2 font-serif text-3xl text-stone-900">Impact programs you can fuel</h2>
          <p className="mt-2 max-w-2xl text-sm text-stone-600">
            Pick a service track and chip in. Each card mirrors our active causes and shows progress toward its goal.
          </p>
        </div>
        <a
          href="/ngo/donation#donation-form"
          className="rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-800"
        >
          Go to donate
        </a>
      </div>

      <div className="mt-7 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item) => (
          <article
            key={item.id}
            className="flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-amber-100/80 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,161,87,0.25)]"
          >
            <div className="relative h-44 w-full overflow-hidden bg-stone-100 sm:h-52">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute left-3 top-3 rounded-full bg-amber-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow">
                Active
              </div>
              <div className="absolute right-3 bottom-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800 shadow">
                Goal ₹{item.goal.toLocaleString("en-IN")}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5">
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-stone-900">{item.title}</h3>
                <p className="text-sm leading-6 text-stone-600">{item.description}</p>
              </div>
              <div className="rounded-xl border border-amber-50 bg-amber-50/60 px-4 py-3">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                  <span>Raised</span>
                  <span className="text-stone-500">Progress</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-lg font-semibold text-stone-900">₹{item.raised.toLocaleString("en-IN")}</p>
                  <p className="text-xs text-stone-500">/ ₹{item.goal.toLocaleString("en-IN")}</p>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white">
                  <div
                    className="h-2 rounded-full bg-amber-500 transition-[width] duration-500"
                    style={{ width: `${Math.min((item.raised / item.goal) * 100, 100)}%` }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/ngo/donation#donation-form"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-800 sm:w-auto"
                >
                  Donate Now
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
