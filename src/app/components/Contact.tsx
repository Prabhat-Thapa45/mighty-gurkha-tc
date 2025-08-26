import Link from "next/link";
import { FaRegClock, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoLocationOutline, IoShareSocialOutline } from "react-icons/io5"; // Added IoShareSocialOutline
import { MdOutlineLocalPhone } from "react-icons/md";

const contactDetails = [
  {
    icon: <IoLocationOutline className="h-6 w-6 text-emerald-600 mt-1" />,
    title: "Office Address",
    content: <p className="text-slate-600">Bagar, Pokhara-1, Nepal</p>,
  },
  {
    icon: <MdOutlineLocalPhone className="h-6 w-6 text-emerald-600 mt-1" />,
    title: "Phone Number",
    content: (
      <>
        <a href="tel:+9779815143272" className="text-slate-600 block hover:text-emerald-700 hover:underline">
          +977 9815143272
        </a>
        <a href="tel:+9779745450709" className="text-slate-600 block hover:text-emerald-700 hover:underline">
          +977 9745450709
        </a>
      </>
    ),
  },
  {
    icon: <GoMail className="h-6 w-6 text-emerald-600 mt-1" />,
    title: "Email Address",
    content: (
      <a href="mailto:mightygurkha@gmail.com" className="text-slate-600 hover:text-emerald-700 hover:underline">
        mightygurkha618@gmail.com
      </a>
    ),
  },
  {
    icon: <FaRegClock className="h-6 w-6 text-emerald-600 mt-1" />,
    title: "Office Hours",
    content: <p className="text-slate-600">Sunday - Friday, 10:00 AM - 6:00 PM</p>,
  },
  // START: New "Follow Us" section
  {
    icon: <IoShareSocialOutline className="h-6 w-6 text-emerald-600 mt-1" />,
    title: "Follow Us",
    content: (
      <div className="flex items-center space-x-5 mt-[5px]">
        <Link href="https://www.facebook.com/mightygurkha/" className="border-1 border-slate-100 shadow p-1 rounded transition-transform duration-300 hover:text-emerald-700 hover:scale-110" target="_blank" aria-label="Facebook">
          <FaFacebookF className="h-6 w-6 text-slate-500 transition-transform duration-300 hover:text-emerald-700 hover:scale-110" />
        </Link>
        <Link href="https://www.instagram.com/mighty_gurkhas/" className="border-1 border-slate-100 shadow p-1 rounded transition-transform duration-300 hover:text-emerald-700 hover:scale-110" target="_blank" aria-label="Instagram">
          <FaInstagram className="h-6 w-6 text-slate-500 transition-transform duration-300 hover:text-emerald-700 hover:scale-110" />
        </Link>
        <Link href="https://www.tiktok.com/@mightygurkha" className="border-1 border-slate-100 shadow p-1 rounded transition-transform duration-300 hover:text-emerald-700 hover:scale-110" target="_blank" aria-label="TikTok">
          <FaTiktok className="h-6 w-6 text-slate-500 transition-transform duration-300 hover:text-emerald-700 hover:scale-110" />
        </Link>
        <Link href="https://www.youtube.com/@MightyGurkha" className="border-1 border-slate-100 shadow p-1 rounded transition-transform duration-300 hover:text-emerald-700 hover:scale-110" target="_blank" aria-label="YouTube">
          <FaYoutube className="h-6 w-6 text-slate-500 transition-transform duration-300 hover:text-emerald-700 hover:scale-110" />
        </Link>
      </div>
    ),
  },
  // END: New "Follow Us" section
];

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 lg:py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900">Get In Touch</h2>
          <p className="mt-3 text-slate-700">
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* Left Column: Contact Details Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
            <div className="space-y-8">
              {contactDetails.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column: Why Join Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Why Join Mighty Gurkha?</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600 " />
                Best success ratio all over Nepal
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                Selection-focused programs built around real standards and timelines.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                Professional coaching, progress tracking, and accountability.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                Supportive community to push your limits safely and sustainably.
              </li>
            </ul>
            <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900">
              Note: Admission into any official service depends on their independent selection process and eligibility.
            </div>
          </div>
        </div>

        {/* Full-width Google Map */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.823913214539!2d83.9782423751286!3d28.24350190049187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595230b62e157%3A0x161db4e9d6d45674!2sBagar%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1723648171171!5m2!1sen!2snp" // Using a real map link for Pokhara, Bagar
            className="w-full h-full border-0"
            style={{ minHeight: "450px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}