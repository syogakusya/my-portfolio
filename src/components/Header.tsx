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
      className={`${notoSansJP.variable} bg-white text-gray-800 pb-0 pt-8 border-b-4 border-black px-0 h-[140px]`}
    >
      <nav className="mx-0 px-12 flex flex-col md:flex-row items-center justify-between md:items-end">
        <div className="flex items-end mb-4 md:mb-0 mx-8">
          <Link
            href="/"
            className="text-xl font-bold flex flex-col items-center md:items-start mb-2 md:mb-0"
          >
            <div className="flex justify-between w-full">
              <span className="text-sm md:text-base text-gray-500">
                Artisan
              </span>
              <span className="text-sm md:text-base text-gray-500">
                SaikyoTsuchidaZ
              </span>
            </div>
            <span className={`text-5xl md:text-6xl ${DelaGothicOne.className}`}>
              最強つちだズ
            </span>
          </Link>
          <div className="mx-8 px-4 text-xs md:text-sm sm:text-[0.65rem] text-gray-500 mt-2 flex-col items-center md:items-start max-w-full md:max-w-[30%] hidden md:flex">
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
        <ul className="flex space-x-10 md:space-x-20 xl:space-x-32 xl:text-3xl justify-center md:justify-end font-bold text-lg md:text-xl mx-32">
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
