import WorksSlide from "@/components/WorksSlide";
import Timeline from "@/components/Timeline";
import Profile from "@/components/Profile";
import Link from "next/link";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <WorksSlide />
      <div className="w-full border-b-4 border-black p-12 flex flex-col items-center">
        <Profile
          imageUrl="/image.png"
          name="土田悠太 / 最強つちだズ"
          bio="芝浦工業大学デザイン工学部ロボティクス情報デザイン学科に所属しています。ゲーム制作やインタラクティブアート、クリエイティブコーディングなどのプログラミングで面白いことをするのに興味があり、様々なプロジェクトに取り組んでいます。"
        />
        <Link
          href="/about"
          className="items-center mt-8 border-2 border-gray-600 rounded-lg px-6 py-4 text-white hover:opacity-90 transition-opacity duration-300 bg-gradient-to-r from-gray-700 to-gray-500"
        >
          View Details
        </Link>
      </div>
      <div className="p-12">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <Skills />
      </div>
      <Timeline />
    </div>
  );
}
