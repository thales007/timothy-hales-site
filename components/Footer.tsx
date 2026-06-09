export default function Footer() {
  return (
    <footer className="bg-[#333333] text-[#AAAAAA] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span>© {new Date().getFullYear()} Timothy Hales. All rights reserved.</span>
        <div className="flex gap-6">
          <a
            href="https://solescore.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            SoleScore
          </a>
          <a
            href="https://resellingshoes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Reselling Shoes
          </a>
          <a
            href="https://steelbluekitchen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            SteelBlue Kitchen
          </a>
        </div>
      </div>
    </footer>
  );
}
