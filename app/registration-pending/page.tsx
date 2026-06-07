import Link from 'next/link';

export default function RegistrationPendingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-3xl font-semibold">Registration Pending</h1>
        <p className="mt-4 text-slate-700">
          Your account has been created. Please wait for the admin or head pastor to approve your access.
        </p>
        <p className="mt-4 text-slate-600">
          We will notify you as soon as your registration is reviewed. If you need help, contact our team.
        </p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-cyan-600 px-6 py-3 text-white">Contact us</Link>
      </div>
    </main>
  );
}
