import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LogoLoader from "./components/common/LogoLoader";

const HomePage = lazy(() => import("./pages/HomePage"));
const SplashPage = lazy(() => import("./pages/SplashPage"));
const MusicSocietyLayout = lazy(() => import("./pages/musicSociety/MusicSocietyLayout"));
const MusicSocietyOverviewPage = lazy(() => import("./pages/musicSociety/MusicSocietyOverviewPage"));
const MusicSocietyTalentsPage = lazy(() => import("./pages/musicSociety/MusicSocietyTalentsPage"));
const MusicSocietyEventsPage = lazy(() => import("./pages/musicSociety/MusicSocietyEventsPage"));
const MusicSocietyShowsPage = lazy(() => import("./pages/musicSociety/MusicSocietyShowsPage"));
const MusicSocietyJoinUsPage = lazy(() => import("./pages/musicSociety/MusicSocietyJoinUsPage"));
const NgoLayout = lazy(() => import("./pages/ngo/NgoLayout"));
const NgoActivitiesPage = lazy(() => import("./pages/ngo/NgoActivitiesPage"));
const NgoDonationPage = lazy(() => import("./pages/ngo/NgoDonationPage"));
const NgoServicesPage = lazy(() => import("./pages/ngo/NgoServicesPage"));
const NgoGalleryPage = lazy(() => import("./pages/ngo/NgoGalleryPage"));
const NgoContactPage = lazy(() => import("./pages/ngo/NgoContactPage"));
const AdminPage = lazy(() => import("./pages/admin/AdminPage"));
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminGuard = lazy(() => import("./pages/admin/AdminGuard"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LogoLoader />}>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/music-society" element={<MusicSocietyLayout />}>
            <Route index element={<MusicSocietyOverviewPage />} />
            <Route path="talents" element={<MusicSocietyTalentsPage />} />
            <Route path="events" element={<MusicSocietyEventsPage />} />
            <Route path="shows" element={<MusicSocietyShowsPage />} />
            <Route path="join-us" element={<MusicSocietyJoinUsPage />} />
          </Route>

          <Route path="/ngo" element={<NgoLayout />}>
            <Route index element={<Navigate to="activities" replace />} />
            <Route path="activities" element={<NgoActivitiesPage />} />
            <Route path="services" element={<NgoServicesPage />} />
            <Route path="donation" element={<NgoDonationPage />} />
            <Route path="gallery" element={<NgoGalleryPage />} />
            <Route path="contact" element={<NgoContactPage />} />
          </Route>

          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminGuard />}>
            <Route index element={<AdminPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
