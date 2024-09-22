import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 p-4 border-b border-black">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex flex-col items-center">
          <div className="flex justify-between w-full">
            <span className="text-xs text-gray-500">Artisan</span>
            <span className="text-xs text-gray-500">SaikyoTsuchidaZ</span>
          </div>
          <span className="text-4xl">最強つちだズ</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/about">自己紹介</Link>
          </li>
          <li>
            <Link href="/projects">プロジェクト</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
