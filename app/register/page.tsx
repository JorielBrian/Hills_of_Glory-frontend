import Link from 'next/link';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <main className="bg-[url('/background_one.jpg')] bg-cover bg-center">
      <div className="flex min-h-screen items-center justify-center py-16 px-6 bg-black/65 p-10">
        <div className="w-full max-w-lg rounded-3xl bg-black/50 p-10 shadow-lg">
          <Link href="/" className="flex mb-5 items-center place-content-center gap-1 text-3xl font-semibold text-slate-900">
            <Image src="/hog_logo.png" alt="Hills of Glory Logo" width={60} height={60} className="h-10 w-10" />
            <h1 className="text-[#fdc53a] content-center px-1">Hills of Glory</h1>
            <h1 className="text-white content-center px-1">Mabalacat</h1>
          </Link>
          <h1 className="text-white text-xl font-semibold">Create your account</h1>
          <p className="mt-3 text-slate-300">Register for the church MIS system. Your account will require approval before access is granted.</p>
          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Full name" className="rounded-2xl border border-slate-200 px-4 py-3" />
              <input placeholder="Username" className="rounded-2xl border border-slate-200 px-4 py-3" />
            </div>
            <input type="email" placeholder="Email" className="rounded-2xl border border-slate-200 px-4 py-3" />
            <input type="password" placeholder="Password" className="rounded-2xl border border-slate-200 px-4 py-3" />
            <input type="date" placeholder="Birthdate" className="rounded-2xl border border-slate-200 px-4 py-3" />
            <input placeholder="Contact number" className="rounded-2xl border border-slate-200 px-4 py-3" />
            <input placeholder="Facebook profile (optional)" className="rounded-2xl border border-slate-200 px-4 py-3" />
            <button type="submit" className="w-full rounded-full bg-emerald-700 px-5 py-3 text-white">Register</button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-200">
            Already have an account? <Link href="/login" className="font-medium text-amber-300">Log in</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
