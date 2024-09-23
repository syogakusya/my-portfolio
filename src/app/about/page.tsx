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
          bio="中学生の頃からゲームを作りたいと思い、Unityでプログラミングを学び始めました。そこから色々な技術に触れ、プログラミングでものを作ることがとても楽しいと知りました。
そこからUnityを主に使用して様々な作品を制作しています。

大学に入ってからはメディアアートやインタラクティブアートを作るサークルに入り、p5.jsを使用したビジュアルスクリプティングや、Arduinoを使用してLEDテープを映像に合わせて制御する、Unityと画像解析ライブラリを使用してインタラクティブアートの制作などを行いました。その結果Unityのみでない技術に触れ、成長することができました。
またグループで活動する機会も多々あり、そこでリーダーとしてプロジェクトを成功に引っ張っていく経験も得ることができました。

最近では作れるものの幅を広げたいと思い、WEB（主にReactやNext.js）の技術を勉強しており、ハッカソンなどに参加し、二回賞をいただいております。
もっと経験を積んで成長し、社会を面白くしていきたいです。"
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
