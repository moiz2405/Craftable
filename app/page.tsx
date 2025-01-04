
import Hero from '../components/home/Hero'
import { SiteProvider } from '../context/SiteContext';
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteProvider>
        <Hero /> {/* Wrap Hero with SiteProvider */}
      </SiteProvider>
    </main>
  )
}

