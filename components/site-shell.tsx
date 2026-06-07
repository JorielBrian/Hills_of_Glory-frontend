import Image from 'next/image';
import Link from 'next/link';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black/90 shadow-sm border-b border-zinc-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-1 text-xl font-semibold text-slate-900">
            <Image src="/hog_logo.png" alt="Hills of Glory Logo" width={40} height={40} className="h-10 w-10" />
            <h1 className="text-[#fdc53a] content-center px-1">Hills of Glory</h1>
            <h1 className="text-white content-center px-1">Mabalacat</h1>
          </Link>
          <nav className="flex gap-4 text-sm text-slate-200">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/ministries">Ministries</Link>
            <Link href="/events">Events</Link>
            <Link href="/sermons">Sermons</Link>
            <Link href="/announcements">Announcements</Link>
          </nav>
          <div className="flex gap-3 text-sm">
            <Link href="/login" className="rounded-full bg-emerald-800 px-4 py-2 text-white">Login</Link>
            <Link href="/register" className="rounded-full border border-emerald-600 px-4 py-2 text-emerald-600">Register</Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <div>
              <span className="flex items-center gap-1">
                <Image src="/hog_logo.png" alt="Hills of Glory Logo" width={40} height={40} className="h-10 w-10" />
                <h1 className="text-[#fdc53a] content-center px-1">Hills of Glory</h1>
                <h1 className="text-white content-center px-1">Mabalacat</h1>
                <p className="text-sm text-slate-400">A welcoming home for spiritual growth, service, and connection.</p>
              </span>
            </div>
            <div className="text-sm text-slate-400">
              <p> L-234F, Mc Arthur Highway, Mabiga, Mabalacat City, Pampanga, Mabalacat, Philippines, 2010</p>
              <p>Service Time: Sundays at 10:00am</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
