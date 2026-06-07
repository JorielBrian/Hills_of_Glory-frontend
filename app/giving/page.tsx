import HeroSection from '@/components/Root/hero-section';
import { SiteShell } from '@/components/site-shell';

export default function GivingPage() {
  return (
    <SiteShell>
      <HeroSection>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Giving</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
            Your generosity helps Hills of Glory grow ministries, outreach, and community care. Giving is simple, secure, and meaningful.
          </p>
        </div>
      </HeroSection>
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Why Give?</h2>
          <p className="mt-4 text-slate-700">Every gift supports worship gatherings, community programs, outreach, and spiritual formation across our church family.</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Ways to Give</h2>
          <p className="mt-4 text-slate-700">Donate online, give in person, or set up recurring support with confidence and transparency.</p>
        </article>
      </section>
    </SiteShell>
  );
}
