import HeroSection from '@/components/Root/hero-section';
import { SiteShell } from '@/components/site-shell';

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Welcome to Hills of Glory</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight">A modern church experience that invites everyone home.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            We create warm spaces for people to encounter faith, form meaningful relationships, and grow in purpose.
            Join us at our services, discover ministries, and connect with others in Hills of Glory.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/plan-your-visit" className="rounded-full bg-amber-300 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-300/20">Plan Your Visit</a>
            <a href="/events" className="rounded-full border border-white/20 px-8 py-3 text-white">Explore Events</a>
          </div>
        </div>
      </HeroSection>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Authentic Community</h2>
            <p className="mt-4 text-slate-600">
              Hills of Glory is a place for people from every background to belong. Our church family encourages honest conversations,
              meaningful service, and a sense of belonging from the first visit.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Vibrant Worship</h2>
            <p className="mt-4 text-slate-600">
              Experience modern worship, creative gatherings, and thought-provoking teaching designed to inspire your next step.
              We blend tradition with fresh energy and a welcoming atmosphere.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Serve & Grow</h2>
            <p className="mt-4 text-slate-600">
              Discover ministries that match your gifts and passions. From music and outreach to groups and leadership training,
              we help every person grow spiritually and make a real impact.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
