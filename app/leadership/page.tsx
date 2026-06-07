import { SiteShell } from '@/components/site-shell';

export default function LeadershipPage() {
  return (
    <SiteShell>
      <section className="bg-slate-900 text-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Leadership</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Our team is built around servant leadership, pastoral care, and a commitment to helping every member grow spiritually.
            Explore the leaders guiding ministries, life groups, and community outreach.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Head Pastor</h2>
            <p className="mt-4 text-slate-700">
              [Head Pastor] leads with vision and care, helping our church stay rooted in clear teaching and compassion for the city.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Ministry Directors</h2>
            <p className="mt-4 text-slate-700">
              Directors guide ministries with practical strategy, leader development, and faithful stewardship of our resources.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Network Leaders</h2>
            <p className="mt-4 text-slate-700">
              Network Leaders oversee lifegroups with care, coaching leaders and ensuring every member is supported.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
