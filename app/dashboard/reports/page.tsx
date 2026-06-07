export default function DashboardReportsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Reports</h1>
        <p className="mt-3 text-slate-600">Global, ministry, and lifegroup reports with date filters and attendance trends.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
          <p className="text-slate-500">Filter by date, ministry, lifegroup, and role to surface the latest metrics.</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
          <p className="text-slate-500">Visualization components show attendance trends and membership activity.</p>
        </div>
      </div>
    </div>
  );
}
