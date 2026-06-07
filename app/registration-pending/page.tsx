import Link from 'next/link';
import Image from 'next/image';

export default function RegistrationPendingPage() {
  return (
    <main className="bg-[url('/background_one.jpg')] bg-cover bg-center">
      <div className="flex min-h-screen items-center justify-center py-16 px-6 bg-black/65 p-10">
        <div className="w-full max-w-lg text-center rounded-3xl bg-black/50 p-10 shadow-lg">
          <Link href="/" className="flex mb-5 items-center place-content-center gap-1 text-3xl font-semibold text-slate-900">
            <Image src="/hog_logo.png" alt="Hills of Glory Logo" width={60} height={60} className="h-10 w-10" />
            <h1 className="text-[#fdc53a] content-center px-1">Hills of Glory</h1>
            <h1 className="text-white content-center px-1">Mabalacat</h1>
          </Link>
          <h1 className="text-white text-3xl font-semibold">Registration Pending</h1>
          <p className="mt-3 text-slate-300">
            Your account has been created. Please wait for the admin or head pastor to approve your access.
          </p>
          <p className="mt-3 text-slate-300">
            We will notify you as soon as your registration is reviewed. If you need help, contact our team.
          </p>
          <Link href="/contact" className="mt-4 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-white">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
