export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-700 text-white font-bold">MG</span>
            <span className="font-semibold">Mighty Gurkha Training Center</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Preparing disciplined, resilient, and mission-ready candidates for Gurkha selections.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Disclaimer: We are an independent training center and are not affiliated with the British Army or the Singapore Gurkha Contingent.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-emerald-700" href="#services">Services</a></li>
            <li><a className="hover:text-emerald-700" href="#about">About Us</a></li>
            <li><a className="hover:text-emerald-700" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <p className="mt-3 text-sm text-slate-600">
            Bagar, Pokhara-1, Nepal<br />
            <a href="tel:+9779815143272" className="text-slate-600 block hover:text-emerald-700 hover:underline">
            +977 9815143272
          </a>
            <a href="mailto:mightygurkha@gmail.com" className="text-slate-600 hover:text-emerald-700 hover:underline">
          mightygurkha@gmail.com
        </a>
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Mighty Gurkha Training Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}