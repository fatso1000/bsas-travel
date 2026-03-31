import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

const linkClass =
  "inline-flex rounded-sm text-sm text-ink-muted underline-offset-[3px] transition-colors hover:text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const headingClass =
  "mb-4 text-xs font-bold uppercase tracking-[0.12em] text-brand";

const socialBtnClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/25 bg-white/50 text-ink-muted shadow-sm transition hover:border-brand/50 hover:bg-white hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-brand/20 bg-gradient-to-b from-surface-elevated via-surface-elevated to-surface-subtle/90 text-ink">
      <div className="mx-auto max-w-screen-lg px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1"> 
            <h2 className="font-black tracking-tight text-3xl text-ink sm:text-4xl">
              BSAS TRAVELS
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              Your base for discovering Buenos Aires—neighborhoods, landmarks,
              and where to stay.
            </p>
            <Link
              to="/#about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-sea focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Start exploring
              <Icon icon="gravity-ui:arrow-right" className="text-lg" aria-hidden />
            </Link>
          </div>

          <nav aria-labelledby="footer-explore-heading">
            <h3 id="footer-explore-heading" className={headingClass}>
              On this site
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/#about" className={linkClass}>
                  Explore Buenos Aires
                </Link>
              </li>
              <li>
                <Link to="/#pros" className={linkClass}>
                  Why visit
                </Link>
              </li>
              <li>
                <Link to="/#reservation" className={linkClass}>
                  Featured hotel
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-faq-heading">
            <h3 id="footer-faq-heading" className={headingClass}>
              Help
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className={linkClass}>
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className={headingClass}>Social</h3>
            <p className="mb-4 text-sm text-ink-muted">
              Follow for tips and updates.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#" aria-label="Instagram" className={socialBtnClass}>
                  <Icon icon="mdi:instagram" className="text-[1.35rem]" aria-hidden />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook" className={socialBtnClass}>
                  <Icon icon="mdi:facebook" className="text-[1.35rem]" aria-hidden />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Telegram" className={socialBtnClass}>
                  <Icon icon="mdi:telegram" className="text-[1.35rem]" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand/15 pt-8 sm:flex-row sm:gap-4">
          <p className="text-center text-xs text-ink-faint sm:text-left">
            © {year} BSAS Travels. All rights reserved.
          </p>
          <p className="text-center text-xs text-ink-faint sm:text-right">
            Built for discovering Buenos Aires—informational only.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
