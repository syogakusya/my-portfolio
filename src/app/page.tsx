import WorksSlide from "@/components/WorksSlide";
import Timeline from "@/components/Timeline";
import Profile from "@/components/Profile";
export default function Home() {
  return (
    <div>
      <WorksSlide />
      <Profile
        imageUrl="/image.png"
        name="土田悠太 / 最強つちだズ"
        bio="芝浦工業大学デザイン工学部ロボティクス情報デザイン学科に所属しています。ゲーム制作やインタラクティブアート、クリエイティブコーディングなどのプログラミングで面白いことをするのに興味があり、様々なプロジェクトに取り組んでいます。"
      />
      <Timeline />
    </div>
  );
}
