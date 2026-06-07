export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Overview</h1>
        <p className="mt-4 text-slate-600">Key metrics, recent approvals, attendance trends, and ministry engagement are shown here.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Attendance</p>
          <p className="mt-4 text-3xl font-semibold">1,245</p>
          <p className="mt-2 text-slate-600">Last 30 days</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Pending Users</p>
          <p className="mt-4 text-3xl font-semibold">14</p>
          <p className="mt-2 text-slate-600">Awaiting approval</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Ministry Activity</p>
          <p className="mt-4 text-3xl font-semibold">8</p>
          <p className="mt-2 text-slate-600">Active ministries</p>
        </div>
      </div>
    </div>
  );
}
