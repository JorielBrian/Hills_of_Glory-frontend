import { SiteShell } from '@/components/site-shell';

export default function AnnouncementsPage() {
  return (
    <SiteShell>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Announcements</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Stay updated with the latest news, worship updates, and ministry invitations from Hills of Glory.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Community Gathering</h2>
          <p className="mt-4 text-slate-700">Join us for an upcoming weekend of connection and celebration as we share stories of life change.</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Youth Training Night</h2>
          <p className="mt-4 text-slate-700">A new series designed to equip young leaders with faith, purpose, and practical skills.</p>
        </article>
      </section>
    </SiteShell>
  );
}
