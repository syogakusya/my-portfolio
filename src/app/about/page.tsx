import React from "react";
import Profile from "@/components/Profile";
import Timeline from "@/components/Timeline";
import { awards, affiliations } from "@/data";

const AboutPage = () => {
  return (
    <div className="w-full">
      <div className="p-12 border-b-4 border-black flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-12">About Me</h1>
        <Profile
          imageUrl="/image.png"
          name="土田悠太 / 最強つちだズ"
          bio="芝浦工業大学デザイン工学部ロボティクス情報デザイン学科に所属しています。ゲーム制作やインタラクティブアート、クリエイティブコーディングなどのプログラミングで面白いことをするのに興味があり、様々なプロジェクトに取り組んでいます。"
        />
      </div>

      <section className="p-12 border-b-4 border-black flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Affiliations</h2>
        <ul className="list-none text-center">
          {affiliations.map((affiliation, index) => (
            <li key={index} className="mb-2 text-lg">
              <a
                href={affiliation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {affiliation.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-12 border-b-4 border-black flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Awards</h2>
        <ul className="list-none">
          {awards.map((award, index) => (
            <li key={index} className="mb-2 text-lg">
              {award}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-12 border-b-4 border-black flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <Timeline />
      </section>
    </div>
  );
};

export default AboutPage;
