import Footer from "./Footer";
import Navbar from "./Navbar";
import NgoNavbar from "./NgoNavbar";
import MusicNavbar from "./MusicNavbar";
import { useLocation } from "react-router-dom";

function PageShell({ basePath = "/", children, isNgo = false, isMusic = false }) {
  const location = useLocation();
  const showNgoNavbar = isNgo || location.pathname.startsWith("/ngo");
  const showMusicNavbar =
    isMusic || location.pathname.startsWith("/music-society") || location.pathname.startsWith("/music");
  const usesFixedHeader = showNgoNavbar || showMusicNavbar || (!showNgoNavbar && !showMusicNavbar);

  return (
    <div
      className={`min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(171,63,45,0.18),transparent_28%),radial-gradient(circle_at_right_center,rgba(204,160,87,0.24),transparent_24%),linear-gradient(180deg,#f8f0e4_0%,#efe1cf_100%)] px-4 py-4 text-stone-900 md:px-6 ${usesFixedHeader ? "pt-24 sm:pt-24" : ""}`}
      style={{ scrollPaddingTop: usesFixedHeader ? "6rem" : "0" }}
    >
function PageShell({ basePath = "/home", children, isNgo = false, isMusic = false }) {
  const location = useLocation();
  const showNgoNavbar = isNgo || location.pathname.startsWith("/ngo");
  const showMusicNavbar = isMusic || location.pathname.startsWith("/music-society");

  return (
    <div className={`min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(171,63,45,0.18),transparent_28%),radial-gradient(circle_at_right_center,rgba(204,160,87,0.24),transparent_24%),linear-gradient(180deg,#f8f0e4_0%,#efe1cf_100%)] px-4 py-4 text-stone-900 md:px-6 ${showNgoNavbar || showMusicNavbar ? "pt-24 sm:pt-24" : ""}`} style={{ scrollPaddingTop: showNgoNavbar || showMusicNavbar ? "6rem" : "0" }}>
      {showNgoNavbar ? <NgoNavbar /> : showMusicNavbar ? <MusicNavbar /> : <Navbar basePath={basePath} />}
      <main className="mx-auto flex max-w-7xl flex-col gap-5 sm:gap-6 md:gap-7">{children}</main>
      <Footer />
    </div>
  );
}

export default PageShell;
