import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SplashPage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeen = window.localStorage.getItem("dms_intro_seen");
    if (hasSeen) {
      setShowIntro(false);
      return;
    }
    const timer = window.setTimeout(() => {
      window.localStorage.setItem("dms_intro_seen", "1");
      setShowIntro(false);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(171,63,45,0.22),transparent_38%),radial-gradient(circle_at_right_center,rgba(204,160,87,0.26),transparent_30%),linear-gradient(180deg,#f8f0e4_0%,#efe1cf_100%)] text-stone-900">
      {showIntro ? (
        <div className="flex min-h-screen items-center justify-center overflow-hidden px-6">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.7rem] border border-white/60 bg-white/85 p-10 shadow-[0_30px_120px_rgba(84,42,24,0.22)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute -left-12 top-10 h-44 w-44 rounded-full bg-emerald-400/15 blur-[90px]" />
              <span className="absolute bottom-6 right-4 h-48 w-48 rounded-full bg-amber-400/18 blur-[120px]" />
            </div>
            <div className="relative flex flex-col items-center gap-5">
              <div className="soundwave-container">
                <span className="soundwave-ring ring-1" />
                <span className="soundwave-ring ring-2" />
                <span className="soundwave-ring ring-3" />
                <img
                  className="relative z-10 h-20 w-20 rounded-full border border-stone-200 bg-white object-cover shadow-xl"
                  src="/legacy/tal_logo1.png"
                  alt="Talent Hunt logo"
                  decoding="async"
                  width="80"
                  height="80"
                />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.32em] text-stone-500">Powered by music & service</p>
                <p className="mt-2 font-serif text-3xl text-stone-900">DMS Aarohi Musical Society</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-stone-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Loading experience
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative grid min-h-screen place-items-center px-6 py-10">
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:68px_68px]" />
          <div className="relative grid w-full max-w-5xl gap-6 md:grid-cols-[1fr_1fr]">
            <Link
              to="/music-society"
              className="group flex min-h-[230px] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-emerald-200/60 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 p-7 text-white shadow-[0_22px_70px_rgba(16,185,129,0.25)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(16,185,129,0.35)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl" />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-emerald-200/90">Music Society</p>
                  <h2 className="mt-3 font-serif text-3xl leading-snug">Enter</h2>
                </div>
                <div className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-50">
                  Live
                </div>
              </div>
              <div className="relative mt-6 flex items-center justify-between text-sm text-emerald-50">
                <span className="inline-flex items-center gap-2 font-semibold">
                  Tap to continue <span aria-hidden="true">→</span>
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]">
                  Stage
                </span>
              </div>
            </Link>
            <Link
              to="/ngo"
              className="group flex min-h-[230px] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-amber-200/60 bg-gradient-to-br from-amber-900 via-orange-700 to-orange-600 p-7 text-white shadow-[0_22px_70px_rgba(251,146,60,0.28)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(251,146,60,0.38)]"
            >
              <div className="absolute -left-6 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-0 left-2 h-28 w-28 rounded-full bg-amber-300/22 blur-2xl" />
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-amber-100/90">NGO</p>
                  <h2 className="mt-3 font-serif text-3xl leading-snug">Enter</h2>
                </div>
                <div className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-50">
                  Care
                </div>
              </div>
              <div className="relative mt-6 flex items-center justify-between text-sm text-amber-50">
                <span className="inline-flex items-center gap-2 font-semibold">
                  Tap to continue <span aria-hidden="true">→</span>
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]">
                  Impact
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SplashPage;
