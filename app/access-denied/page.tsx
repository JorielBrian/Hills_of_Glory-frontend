import Link from 'next/link';

export default function AccessDeniedPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-3xl font-semibold">Access Denied</h1>
        <p className="mt-4 text-slate-700">
          Your registration was not approved. Please contact the church for more information.
        </p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white">Contact the team</Link>
      </div>
    </main>
  );
}
