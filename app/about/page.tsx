import { SiteShell } from '@/components/site-shell';

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-slate-950 text-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-semibold">About Hills of Glory</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Hills of Glory is a church rooted in warmth, creativity, and genuine spiritual growth. We value accessible worship,
            clear teaching, and a practical faith that impacts daily life.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
            Our community is built for people exploring faith for the first time and for those who want to belong deeply.
            Every gathering is crafted to help visitors feel welcome, connected, and encouraged.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-slate-700">
              We exist to help people encounter the love and truth of Jesus in ways that feel relevant, honest, and inspiring.
              Our church is focused on serving our city, growing leaders, and strengthening families.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">What We Believe</h2>
            <p className="mt-4 text-slate-700">
              We believe every person is valuable and every story matters. Our values include compassion, creativity, excellence,
              and a spirit of invitation for all who want to learn and grow.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
