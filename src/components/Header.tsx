import Link from "next/link";
import { Dela_Gothic_One, Noto_Sans_JP } from "next/font/google";

const DelaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela-gothic-one",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const Header = () => {
  return (
    <header
      className={`${notoSansJP.variable} bg-white text-gray-800 border-b-4 border-black h-[140px] flex items-center`}
    >
      <nav className="w-full mx-0 flex flex-col md:flex-row items-center md:items-end justify-between">
        <div className="flex flex-col md:flex-row items-center md:items-end">
          <Link
            href="/"
            className="text-xl font-bold flex flex-col items-center md:items-start ml-4 md:ml-8"
          >
            <div className="md:flex justify-between w-full hidden">
              <span className="text-[0.35rem] sm:text-xs md:text-sm text-gray-500">
                Artisan
              </span>
              <span className="text-[0.35rem] sm:text-xs md:text-sm text-gray-500">
                SaikyoTsuchidaZ
              </span>
            </div>
            <span
              className={`text-4xl lg:text-5xl ${DelaGothicOne.className} whitespace-nowrap`}
            >
              最強つちだズ
            </span>
          </Link>
          <div className="mx-2 px-4 text-xs md:text-[0.55rem] sm:text-[0.35rem] text-gray-900 flex-col items-center md:items-start max-w-full md:max-w-[30%] hidden lg:flex">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis">
              This is my portfolio site, where I showcase my work as an artisan
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis">
              Crafting digital excellence with precision and passion
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis">
              A creative coder pushing the boundaries of digital craftsmanship
            </p>
          </div>
        </div>
        <ul className="flex space-x-2 sm:space-x-4 md:space-x-8 xl:space-x-12 xl:text-3xl justify-center font-bold text-lg md:text-xl xl:mx-16 md:mx-8 mx-4">
          <li>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="hover:text-gray-600 transition-colors"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-gray-600 transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
