import HeroSection from '@/components/Root/hero-section';
import { SiteShell } from '@/components/site-shell';

export default function EventsPage() {
  return (
    <SiteShell>
      <HeroSection>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Events</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Engage with community gatherings, training nights, prayer encounters, and special events designed for everyone.
          </p>
        </div>
      </HeroSection>
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Sunday Service</h2>
          <p className="mt-4 text-slate-700">A weekly worship gathering with high-quality music, prayer, and inspiring teaching.</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Prayer Encounter</h2>
          <p className="mt-4 text-slate-700">A focused time of prayer and listening that supports personal renewal.</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Protege</h2>
          <p className="mt-4 text-slate-700">A mentoring event for young leaders to grow in faith, character, and mission.</p>
        </article>
      </section>
    </SiteShell>
  );
}
