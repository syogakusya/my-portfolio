import WorksSlide from "@/components/WorksSlide";
import Timeline from "@/components/Timeline";
import Profile from "@/components/Profile";
export default function Home() {
  return (
    <div>
      <WorksSlide />
      <Profile
        imageUrl="/image.png"
        name="最強つちだズ"
        bio="芝浦工業大学デザイン工学部ロボティクス情報デザイン学科に所属しています。インタラクティブアートやクリエイティブコーディングに興味があり、様々なプロジェクトに取り組んでいます。"
      />
      <h1 className="text-3xl font-bold text-center mb-8">私の経歴</h1>
      <Timeline />
    </div>
  );
}
