import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-3xl font-semibold">Log in to your account</h1>
        <p className="mt-3 text-slate-600">Access the Hills of Glory dashboard with your approved account.</p>
        <form className="mt-8 space-y-6">
          <div className="grid gap-4">
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input type="email" className="mt-2 block w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="you@example.com" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input type="password" className="mt-2 block w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="••••••••" />
            </label>
          </div>
          <button type="submit" className="w-full rounded-full bg-slate-900 px-5 py-3 text-white">Sign in</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          New to Hills of Glory? <Link href="/register" className="font-medium text-cyan-600">Create an account</Link>.
        </p>
      </div>
    </main>
  );
}
