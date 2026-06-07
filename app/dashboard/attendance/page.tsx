export default function DashboardAttendancePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Attendance</h1>
        <p className="mt-3 text-slate-600">Scan QR codes, view logs, and ensure duplicate attendance records are prevented.</p>
      </div>
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-slate-500">Attendance is tracked per event instance and only one scan is permitted per user for a given event.</p>
      </div>
    </div>
  );
}
