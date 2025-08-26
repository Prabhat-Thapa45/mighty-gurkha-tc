import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const socialPlatforms = [
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@mightygurkha',
    Icon: FaTiktok,
    color: 'text-black',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/mighty_gurkhas',
    Icon: FaInstagram,
    color: 'text-red-600',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/mightygurkha',
    Icon: FaFacebook,
    color: 'text-blue-600',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@MightyGurkha`',
    Icon: FaYoutube,
    color: 'text-red-600',
  },
];

export default function SocialLinks() {
  return (
    <section className="mt-12 pb-12 text-center">
      <h2 className="text-xl font-semibold text-slate-700 mb-4">
        For more, visit our social media pages
      </h2>
      <div className="flex justify-center space-x-6">
        {socialPlatforms.map(({ name, href, Icon, color }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`text-3xl ${color} hover:scale-110 transition-transform duration-200`}
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
}
