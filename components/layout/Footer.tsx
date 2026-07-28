import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-900 bg-black text-zinc-400"
    >
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-6 py-16 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold text-white">
            EBuilds
          </h2>

          <p className="mt-4 max-w-sm leading-7">
            Building premium Shopify themes, web applications and modern digital
            products.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              <li><Link href="#themes">Themes</Link></li>
              <li><Link href="#apps">Apps</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              <li>Manchester, UK</li>
              <li>hello@ebuilds.dev</li>
              <li>Coming Soon</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm">
          <p>© 2026 EBuilds. All rights reserved.</p>

          <p>Built with Next.js • React • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}