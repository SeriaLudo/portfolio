// Header.tsx
export function Header({
  siteTitle,
  subtitle,
  links,
}: {
  siteTitle: string;
  subtitle: string;
  links: { href: string; label: string; active: boolean }[];
}) {
  return (
    <header className="bg-gradient-to-br from-gray-800 to-black text-white py-6 px-4 text-center shadow-md">
      <h1 className="text-3xl font-bold mb-2">{siteTitle}</h1>
      <p className="text-lg mb-4">{subtitle}</p>
      <nav>
        <ul className="flex justify-center space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`hover:underline ${
                  link.active ? "text-blue-400" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
