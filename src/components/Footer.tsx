function Footer() {
  return (
    <footer className="grid grid-cols-1 mx-auto max-lg:px-2 w-full py-7 bg-secondary text-accent">
      <div className="grid grid-cols-4 gap-3 px-6 max-w-screen-lg mx-auto">
        <div>
          <h2 className="text-4xl font-black">BSAS TRAVELS</h2>
        </div>
        <div>
          <h3 className="font-bold">FAQ</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Social</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Telegram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
