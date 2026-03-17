function PerformancesSection() {
  const videos = [
    { title: "Live Performance 1", url: "https://www.youtube.com/embed/Wp5nRq0UdpU?si=wsb0xpEwD0S_hoNd" },
    { title: "Live Performance 2", url: "https://www.youtube.com/embed/RCOXwxmZ9ik?si=KQj8eTU7dOPZJp07" },
    { title: "Live Performance 3", url: "https://www.youtube.com/embed/F14ZS93PEB0?si=oagB3bdZWtPbcpnA" }
  ];

  return (
    <section id="performances" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {videos.map((item, idx) => (
        <article
          key={item.url}
          className="rounded-2xl border border-stone-200 bg-[#fff8ef]/90 p-3 shadow-[0_18px_60px_rgba(84,42,24,0.08)] sm:p-4 md:p-5"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-orange-700">Performance {idx + 1}</p>
          <h3 className="mt-2 font-serif text-lg text-stone-900 sm:text-xl md:text-2xl">{item.title}</h3>
          <div className="mt-3 overflow-hidden rounded-xl border border-stone-200 bg-black shadow-inner">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={item.url}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default PerformancesSection;
