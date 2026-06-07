import { SiteShell } from '@/components/site-shell';

export default function SermonsPage() {
  return (
    <SiteShell>
      <section className="bg-cyan-600 text-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Sermons</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
            Explore recent messages from Hills of Glory that equip you to live with purpose and hope.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Living with Purpose</h2>
          <p className="mt-4 text-slate-600">A practical message on faith, calling, and daily transformation.</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Strength for the Journey</h2>
          <p className="mt-4 text-slate-600">A teaching focused on endurance, trust, and the power of community.</p>
        </article>
      </section>
    </SiteShell>
  );
}
