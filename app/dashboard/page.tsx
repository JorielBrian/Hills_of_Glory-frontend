import Link from 'next/link';

export default function DashboardIndexPage() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-semibold">Dashboard Home</h1>
      <p className="mt-4 text-slate-600">Choose a section from the menu to manage users, attendance, reports, and calendar events.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/dashboard/overview" className="rounded-full bg-cyan-600 px-5 py-3 text-white">Overview</Link>
        <Link href="/dashboard/users" className="rounded-full border border-slate-300 px-5 py-3">Users</Link>
      </div>
    </div>
  );
}
