"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import cmsData from "./smsData.json";

export default function Home() {
  const { siteTitle, subtitle, links, projects, footer } = cmsData;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{siteTitle}</h1>
        <p className="text-lg md:text-xl">{subtitle}</p>
      </motion.header>

      <nav className="mb-8">
        <ul className="flex space-x-6 text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:underline ${
                  link.active ? "text-blue-400" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {projects.map((project) => (
        <motion.section
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl text-center mb-8"
        >
          <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
          <p className="mb-6">{project.description}</p>
          <Link
            href={project.link}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Read More
          </Link>
        </motion.section>
      ))}

      <footer className="mt-16 text-center">
        <p>
          &copy; {new Date().getFullYear()} {footer.siteName}. Built with
          Next.js and Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          {footer.social.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-blue-400">
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
