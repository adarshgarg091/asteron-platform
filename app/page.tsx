import { NavBar } from '@/components/marketing/NavBar';
import { Footer } from '@/components/marketing/Footer';
import { LandingPage } from '@/components/marketing/LandingPage';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <NavBar />
      <LandingPage />
      <Footer />
    </main>
  );
}
