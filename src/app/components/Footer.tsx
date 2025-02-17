// Footer.tsx
export function Footer({
  siteName,
  social,
}: {
  siteName: string;
  social: { href: string; label: string }[];
}) {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} {siteName}. Built with Next.js and
        Tailwind CSS.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        {social.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-blue-400">
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
