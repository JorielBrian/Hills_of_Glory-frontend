import HeroSection from '@/components/Root/hero-section';
import { SiteShell } from '@/components/site-shell';

export default function ContactPage() {
  return (
    <SiteShell>
      <HeroSection>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Have questions or need support? We are here to help you connect with the church family and discover the right place to begin.
          </p>
        </div>
      </HeroSection>
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-8 lg:grid-cols-2">
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Visit Us</h2>
          <p className="mt-4 text-slate-700">Location: Ground Floor, L-234F, Mc Arthur Highway, Mabiga, Mabalacat City, Pampanga, Mabalacat, Philippines, 2010</p>
          <p className="mt-2 text-slate-700">Service Time: Sundays at 8:00 AM and 10:45 AM</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <p className="mt-4 text-slate-700">Email: hillsofglory.mabalacatcity@gmail.com</p>
          {/* <p className="mt-2 text-slate-700">Phone: +123 456 7890</p> */}
        </article>
      </section>
    </SiteShell>
  );
}
