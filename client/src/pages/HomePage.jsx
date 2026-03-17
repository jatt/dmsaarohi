import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import TeamSection from "../components/sections/TeamSection";
import PageShell from "../components/common/PageShell";

function HomePage() {
  return (
    <PageShell basePath="/home">
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </PageShell>
  );
}

export default HomePage;
