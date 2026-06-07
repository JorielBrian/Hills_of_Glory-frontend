import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-3xl font-semibold">Create your account</h1>
        <p className="mt-3 text-slate-600">Register for the church MIS system. Your account will require approval before access is granted.</p>
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
          <button type="submit" className="rounded-full bg-slate-900 px-5 py-3 text-white">Register</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account? <Link href="/login" className="font-medium text-cyan-600">Log in</Link>.
        </p>
      </div>
    </main>
  );
}
