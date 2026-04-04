import { Link } from "react-router-dom";
import PageShell from "../components/common/PageShell";
import SectionHeading from "../components/common/SectionHeading";
import TeamSliderRow from "../components/common/TeamSliderRow";
import ContactForm from "../components/forms/ContactForm";
import { contactDetails, teamMembers } from "../data/siteContent";

const selectionCards = [
  {
    title: "Musical Society",
    description:
      "Discover performances, artist opportunities, and the vibrant musical journey of DMS Aarohi.",
    to: "/music",
    buttonLabel: "Explore Musical Society",
    accent: "from-[#7d2f22] via-[#ab3f2d] to-[#d58b49]",
    glow: "bg-amber-300/20"
  },
  {
    title: "NGO",
    description:
      "Explore our community initiatives, volunteer efforts, and meaningful social impact programs.",
    to: "/ngo",
    buttonLabel: "Explore NGO",
    accent: "from-[#173b34] via-[#234a3c] to-[#3e7a63]",
    glow: "bg-emerald-300/20"
  }
];

const aboutHighlights = [
  {
    title: "Our Mission",
    text: "To nurture artistic talent and create meaningful spaces where music and service come together."
  },
  {
    title: "Our Vision",
    text: "To grow DMS Aarohi as a platform where performers, volunteers, and communities rise together."
  },
  {
    title: "Our Spirit",
    text: "We believe culture, compassion, and participation can create lasting impact beyond the stage."
  }
];

const quickStats = [
  { number: "13+", text: "Years of cultural journey" },
  { number: "100+", text: "Events and programs" },
  { number: "500+", text: "Artists and participants" },
  { number: "2", text: "Purpose-driven wings" }
];

function HomePage() {
  return (
    <PageShell basePath="/">
      <section
        id="home"
        className="relative scroll-mt-32 overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 px-6 py-8 shadow-[0_24px_80px_rgba(84,42,24,0.14)] backdrop-blur-xl sm:px-8 sm:py-10 md:px-12 md:py-14"
      >
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute -left-14 top-10 h-44 w-44 rounded-full bg-[#ab3f2d]/15 blur-[90px]" />
          <span className="absolute right-0 top-0 h-52 w-52 rounded-full bg-amber-300/20 blur-[120px]" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                className="h-16 w-16 rounded-full border border-stone-200 bg-white object-cover shadow-lg sm:h-20 sm:w-20"
                src="/legacy/tal_logo1.png"
                alt="DMS Aarohi logo"
                decoding="async"
                width="80"
                height="80"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  DMS AAROHI
                </p>
                <p className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
                  Music, culture, and community together
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Main Gateway for Music and Service
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ab3f2d]">
                Welcome
              </p>
              <h1 className="font-serif text-4xl leading-none text-stone-900 sm:text-5xl md:text-6xl">
                Choose your path with DMS Aarohi
              </h1>
              <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                Explore the creative energy of our Musical Society or step into the service-focused
                initiatives of our NGO. Both journeys begin here.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/music"
                className="inline-flex items-center justify-center rounded-full bg-[#ab3f2d] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f3224]"
              >
                Explore Musical Society
              </Link>
              <Link
                to="/ngo"
                className="inline-flex items-center justify-center rounded-full bg-[#234a3c] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1c3b30]"
              >
                Explore NGO
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-[1.75rem] border border-stone-200/70 bg-[#fff7ef] p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Musical Society
              </p>
              <p className="mt-3 font-serif text-3xl text-stone-900">Perform. Connect. Grow.</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Join live shows, explore talent opportunities, and celebrate the golden era of music.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-stone-200/70 bg-[#f4fbf7] p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">NGO</p>
              <p className="mt-3 font-serif text-3xl text-stone-900">Serve. Support. Uplift.</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Volunteer for social causes, support outreach drives, and make a direct community impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="selection"
        className="scroll-mt-32 rounded-[2rem] border border-white/60 bg-white/70 px-6 py-8 shadow-[0_24px_80px_rgba(84,42,24,0.14)] backdrop-blur-xl sm:px-8 sm:py-10 md:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
            Main Selection
          </p>
          <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
            Explore the part of DMS Aarohi that fits your purpose
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {selectionCards.map((card) => (
            <article
              key={card.title}
              className={`relative overflow-hidden rounded-[1.9rem] border border-white/20 bg-gradient-to-br ${card.accent} p-7 text-white shadow-[0_24px_80px_rgba(84,42,24,0.18)]`}
            >
              <span className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${card.glow} blur-3xl`} />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  DMS AAROHI
                </p>
                <h3 className="mt-4 font-serif text-4xl">{card.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                  {card.description}
                </p>
                <Link
                  to={card.to}
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-white/25 bg-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  {card.buttonLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative scroll-mt-32 overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-[#fffaf3] via-white to-[#f7ead7] p-6 shadow-lg md:p-8"
      >
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-orange-200/45 blur-3xl" />
          <span className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-emerald-100/60 blur-3xl" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About DMS Aarohi"
              title="One foundation, two journeys: artistic expression and social impact"
              text="DMS Aarohi is a shared platform where culture and compassion move together. We celebrate talent through performances and programs while also supporting people through outreach, volunteering, and community-driven initiatives."
            />

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {aboutHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-orange-200/60 bg-white/90 p-5 shadow-sm">
                  <h3 className="font-serif text-xl text-stone-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[1.8rem] border border-stone-200/80 bg-white/90 shadow-[0_24px_70px_rgba(20,20,20,0.12)]">
              <img
                className="h-64 w-full object-cover"
                src="/legacy/about_group.png"
                alt="DMS Aarohi community gathering"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.5rem] border border-stone-200/80 bg-white/90 shadow-sm">
                <img
                  className="h-40 w-full object-cover"
                  src="/legacy/current_event.jpg"
                  alt="DMS Aarohi performance moment"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-stone-200/80 bg-white/90 shadow-sm">
                <img
                  className="h-40 w-full object-cover"
                  src="/legacy/bd4.jpg"
                  alt="DMS Aarohi outreach activity"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {quickStats.map((stat) => (
            <div
              key={stat.text}
              className="rounded-lg border border-orange-200/60 bg-gradient-to-br from-orange-50 to-orange-100/50 p-4 text-center shadow-sm"
            >
              <p className="font-serif text-3xl font-bold text-orange-900">{stat.number}</p>
              <p className="mt-1 text-xs text-stone-700">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="team"
        className="scroll-mt-32 rounded-[2rem] border border-white/40 bg-[#fff8ef] p-6 shadow-[0_24px_80px_rgba(84,42,24,0.14)] sm:p-7 md:p-10"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the people shaping DMS Aarohi."
            text="A committed mix of cultural leadership, organizers, and community-first contributors."
          />
          <div className="w-full rounded-2xl border border-stone-200 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-600 sm:w-auto sm:rounded-full sm:px-5">
            {teamMembers.length} Team Members
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <TeamSliderRow members={teamMembers.slice(0, 5)} />
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-32 rounded-[2rem] border border-white/40 bg-gradient-to-br from-[#fff8ef] via-[#f5ead8] to-[#ecf7f2] p-6 shadow-[0_24px_80px_rgba(84,42,24,0.14)] md:p-10"
      >
        <div className="mb-8 max-w-2xl">
          <SectionHeading
            eyebrow="Contact"
            title="Reach DMS Aarohi through the form below"
            text="The map is kept as a clean address preview, and the enquiry form stays front and center for quick contact."
          />
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white/80 shadow-sm backdrop-blur">
            <div className="relative h-[420px]">
              <iframe
                title="DMS Aarohi Delhi location map"
                src="https://www.google.com/maps?q=A5%20272%20Paschim%20Vihar%20New%20Delhi%20110063&z=15&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-700 shadow-sm">
                Delhi Location Map
              </div>
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/60 bg-white/94 p-4 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Pinned Address</p>
                <p className="mt-2 font-serif text-2xl text-stone-900">Paschim Vihar, New Delhi</p>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {contactDetails.find(([label]) => label === "Address")?.[1]}
                </p>
              </div>
            </div>
          </div>

          <div id="contact-form">
            <ContactForm
              source="main-homepage"
              eyebrow="Homepage Contact"
              title="Send your enquiry from the main homepage."
              submitLabel="Submit Homepage Enquiry"
            />
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="scroll-mt-32 rounded-[2rem] border border-white/60 bg-gradient-to-r from-stone-950 via-[#1b2424] to-[#173b34] px-6 py-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.28)] sm:px-8 sm:py-10 md:px-10"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Get Involved</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Step into the experience that speaks to you</h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Whether you want to perform on stage or support a community initiative, DMS Aarohi has a place for you.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/music/register"
              className="inline-flex items-center justify-center rounded-full bg-[#ab3f2d] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f3224]"
            >
              Join as Performer
            </Link>
            <Link
              to="/ngo/donation"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Volunteer / Donate
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default HomePage;
