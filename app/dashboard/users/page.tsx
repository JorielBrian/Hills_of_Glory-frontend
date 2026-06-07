export default function DashboardUsersPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Users</h1>
        <p className="mt-3 text-slate-600">Manage user profiles, approvals, and view role-based access across the church system.</p>
      </div>
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-slate-500">This page is designed for Admins and Head Pastors to approve or reject new user registrations, and view pending accounts.</p>
      </div>
    </div>
  );
}
