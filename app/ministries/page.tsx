import HeroSection from '@/components/Root/hero-section';
import { SiteShell } from '@/components/site-shell';

export default function MinistriesPage() {
  return (
    <SiteShell>
      <HeroSection>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Ministries</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ministries at Hills of Glory are welcoming spaces where spiritual growth meets service. Our teams support worship,
            outreach, teaching, and community care.
          </p>
        </div>
      </HeroSection>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Hospitality</h2>
            <p className="mt-4 text-slate-600">
              This ministry creates first impressions for guests and helps everyone feel seen and valued.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Music and Arts</h2>
            <p className="mt-4 text-slate-600">
              Creative teams bring worship to life through music, media, and artistic expression.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Events</h2>
            <p className="mt-4 text-slate-600">
              From weekend services to special church gatherings, this ministry ensures every experience is meaningful.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
