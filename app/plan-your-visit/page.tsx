import HeroSection from '@/components/Root/hero-section';
import { SiteShell } from '@/components/site-shell';

export default function PlanYourVisitPage() {
  return (
    <SiteShell>
      <HeroSection>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Plan Your Visit</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            We want your first visit to feel easy and welcoming. Here’s everything you need to know before you arrive.
          </p>
        </div>
      </HeroSection>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-8">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">What to Expect</h2>
            <p className="mt-4 text-slate-700">
              Expect warm hospitality, modern worship, and a relaxed atmosphere where questions are welcome.
              Our team will help you find a seat, answer questions, and introduce you to the community.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Location & Parking</h2>
            <p className="mt-4 text-slate-700">
              Hills of Glory is easy to reach, with dedicated visitor parking and step-free access. Use the visitor entrance and our welcome team will guide you.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">For Families</h2>
            <p className="mt-4 text-slate-700">
              Families are a priority. We offer safe children’s programs, family seating, and an environment where kids can engage and learn.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
