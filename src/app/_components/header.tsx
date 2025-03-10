import Link from "next/link";
import { ContactCard } from "@/app/_components/contact-card";
const Header = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Portfolio
        </Link>
        .
      </h2>
      <ContactCard />
    </>
  );
};

export default Header;
