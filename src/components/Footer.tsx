function Footer() {
  return (
    <footer className="grid grid-cols-1 mx-auto max-lg:px-3 w-full py-10 border-t border-brand/25 bg-surface-elevated text-ink">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 max-w-screen-lg mx-auto w-full">
        <div className="lg:col-span-1">
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight">
            BSAS TRAVELS
          </h2>
          <p className="text-sm text-ink-muted mt-2 max-w-xs">
            Your base for discovering Buenos Aires—neighborhoods, landmarks, and
            the hotel on the map.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-brand mb-3">FAQ</h3>
          <ul className="space-y-2 text-ink-muted text-sm">
            <li>
              <a
                href="#"
                className="hover:text-brand transition-colors underline-offset-2 hover:underline"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand transition-colors underline-offset-2 hover:underline"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand transition-colors underline-offset-2 hover:underline"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-brand-sea mb-3">Social</h3>
          <ul className="space-y-2 text-ink-muted text-sm">
            <li>
              <a
                href="#"
                className="hover:text-brand-sea transition-colors underline-offset-2 hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-sea transition-colors underline-offset-2 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-sea transition-colors underline-offset-2 hover:underline"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
