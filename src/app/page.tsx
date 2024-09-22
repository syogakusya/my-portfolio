import WorksSlide from "@/components/WorksSlide";
import Timeline from "@/components/Timeline";
export default function Home() {
  return (
    <div>
      <WorksSlide />
      <h1 className="text-3xl font-bold text-center mb-8">私の経歴</h1>
      <Timeline />
    </div>
  );
}
