import Link from 'next/link';

const navItems = [
  { href: '/dashboard/overview', label: 'Overview' },
  { href: '/dashboard/users', label: 'Users' },
  { href: '/dashboard/lifegroups', label: 'Lifegroups' },
  { href: '/dashboard/ministries', label: 'Ministries' },
  { href: '/dashboard/attendance', label: 'Attendance' },
  { href: '/dashboard/reports', label: 'Reports' },
  { href: '/dashboard/calendar', label: 'Calendar' },
  { href: '/dashboard/announcements', label: 'Announcements' }
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[250px_1fr]">
        <aside className="border-r border-slate-200 bg-white px-4 py-6">
          <div className="mb-10">
            <p className="text-lg font-semibold">MIS Dashboard</p>
            <p className="text-sm text-slate-500">Controlled access for church leaders.</p>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section className="px-6 py-8">{children}</section>
      </div>
    </div>
  );
}
