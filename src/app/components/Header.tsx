import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          最強つちだズ
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
