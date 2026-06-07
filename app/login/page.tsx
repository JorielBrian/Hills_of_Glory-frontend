import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <main className="bg-[url('/background_one.jpg')] bg-cover bg-center">
      <div className="flex min-h-screen items-center justify-center py-16 px-6 bg-black/65 p-10">
        <div className="w-full max-w-lg rounded-3xl bg-black/50 p-10 shadow-lg">
          <Link href="/" className="flex mb-5 items-center place-content-center gap-1 text-3xl font-semibold text-slate-900">
            <Image src="/hog_logo.png" alt="Hills of Glory Logo" width={60} height={60} className="h-10 w-10" />
            <h1 className="text-[#fdc53a] content-center px-1">Hills of Glory</h1>
            <h1 className="text-white content-center px-1">Mabalacat</h1>
          </Link>
          <h1 className="text-white text-xl font-semibold">Log in to your account</h1>
          <p className="mt-3 text-slate-300">Access the Hills of Glory dashboard with your approved account.</p>
          <form className="mt-8 space-y-6">
            <div className="grid gap-4">
              <label className="block text-sm font-medium text-slate-200">
                Email
                <input type="email" className="mt-2 block w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="you@example.com" />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Password
                <input type="password" className="mt-2 block w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="••••••••" />
              </label>
            </div>
            <button type="submit" className="w-full rounded-full bg-emerald-700 px-5 py-3 text-white">Sign in</button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-200">
            New to Hills of Glory? <Link href="/register" className="font-medium text-amber-300">Create an account</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
