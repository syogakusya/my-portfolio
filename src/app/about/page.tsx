import React from "react";
import Profile from "@/components/Profile";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import { awards, affiliations } from "@/data";

const AboutPage = () => {
  return (
    <div className="w-full">
      <div className="p-12 border-b-4 border-black flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-12">About Me</h1>
        <Profile
          imageUrl="/image.png"
          name="土田悠太 / 最強つちだズ"
          bio="中学生の頃からUnityでゲーム開発を始め、プログラミングの楽しさに目覚めました。大学ではメディアアートサークルに所属し、p5.js、Arduino、Unityなど様々な技術を駆使してインタラクティブアートを制作。グループプロジェクトではリーダーとしての経験も積み、Web開発（ReactやNext.js）にも挑戦しています。最近は原点回帰をしてc++でゲーム開発を行っています。技術を通じて社会をより面白くすることが目標です。"
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

      <section className="p-12  border-b-4 border-black ">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <Skills />
      </section>

      <section className="py-12 border-b-4 border-black flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <Timeline />
      </section>
    </div>
  );
};

export default AboutPage;
