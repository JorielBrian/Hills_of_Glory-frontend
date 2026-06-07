import { SiteShell } from '@/components/site-shell';

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="bg-cyan-600 text-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Services</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
            Our services blend heartfelt worship, real teaching, and opportunities for everyone to connect.
            Whether you are joining us for the first time or returning as a regular, you’ll find an environment that feels respectful and inspiring.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Sunday Gathering</h2>
            <p className="mt-4 text-slate-600">
              Join us on Sundays at [Service Time] at [Location] for worship, teaching, and a warm community welcome.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Midweek Encounter</h2>
            <p className="mt-4 text-slate-600">
              Our midweek meetings focus on prayer, encouragement, and practical support for daily life.
              These sessions help deepen relationships while keeping the church family connected.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Online Resources</h2>
            <p className="mt-4 text-slate-600">
              Access sermons, announcements, and event details anytime. We support the whole church family with digital tools for spiritual growth.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
