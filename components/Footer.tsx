export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap site-foot__inner">
        <span className="site-foot__copy">
          © {new Date().getFullYear()} Timothy Hales. All rights reserved.
        </span>
        <nav className="site-foot__links">
          <a href="https://shoes.timothyhales.com" target="_blank" rel="noopener noreferrer">
            SoleScore
          </a>
          <a href="https://resellingshoes.com" target="_blank" rel="noopener noreferrer">
            Reselling Shoes
          </a>
          <a href="https://steelbluekitchen.com" target="_blank" rel="noopener noreferrer">
            SteelBlue Kitchen
          </a>
        </nav>
      </div>
    </footer>
  );
}
