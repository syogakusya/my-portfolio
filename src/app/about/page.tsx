import React from "react";
import Profile from "@/components/Profile";
import Timeline from "@/components/Timeline";
import { awards, affiliations } from "@/data";

const AboutPage = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <Profile
        imageUrl="/image.png"
        name="土田悠太 / 最強つちだズ"
        bio="芝浦工業大学デザイン工学部ロボティクス情報デザイン学科に所属しています。ゲーム制作やインタラクティブアート、クリエイティブコーディングなどのプログラミングで面白いことをするのに興味があり、様々なプロジェクトに取り組んでいます。"
      />

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">経歴</h2>
        <Timeline />
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">所属</h2>
        <ul className="list-disc list-inside">
          {affiliations.map((affiliation, index) => (
            <li key={index} className="mb-2">
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

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">受賞歴</h2>
        <ul className="list-disc list-inside">
          {awards.map((award, index) => (
            <li key={index} className="mb-2">
              {award}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
