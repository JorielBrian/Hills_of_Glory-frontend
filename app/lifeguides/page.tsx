import HeroSection from '@/components/Root/hero-section';
import { SiteShell } from '@/components/site-shell';

export default function LifeguidesPage() {
  return (
    <SiteShell>
      <HeroSection>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Lifeguides</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Lifeguides are small groups built to help you grow in faith, build friendships, and discover life together.
          </p>
        </div>
      </HeroSection>
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <article className="rounded-3xl bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Community Groups</h2>
          <p className="mt-4 text-slate-700">Meet with others weekly in groups that feel supportive, authentic, and spiritually enriching.</p>
        </article>
        <article className="rounded-3xl bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Leadership Support</h2>
          <p className="mt-4 text-slate-700">Our Network Leaders and Lifegroup Leaders train and guide members with care and accountability.</p>
        </article>
      </section>
    </SiteShell>
  );
}
