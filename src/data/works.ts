import { Work } from "../types";

export const works: Work[] = [
  {
    id: "obake_no_kitchen",
    title: "お化けのキッチン",
    year: 2023,
    shortDescription:
      "ARを使用して、お化けが料理をしているキッチンを観察する作品。普通に見ると誰もいないキッチンが、覗き込むとお化けが見える。",
    longDescription:
      "ARでお化けが料理をしているキッチンを観察する作品。UnityとVuforiaSDKを使用して制作。Blenderで3Dモデルを作成し、AR化を実現。当日はipadで展示し、覗き込むインタラクション要素を体験できる作品。",
    imageUrls: ["ghost.jpeg"],
    //videoUrls: ["videourl"],
    githubUrl: "githuburl",
    tags: ["AR", "Unity", "Vuforia", "Blender", "3Dモデリング"],
  },
  {
    id: "whaleboid",
    title: "WhaleBoid",
    year: 2023,
    shortDescription:
      "Boidアルゴリズムを用いてクジラや魚、抽象化された動植物をリアルタイムに制御するインタラクティブアート作品。",
    longDescription:
      "Unity、OpenCV、WEBカメラ、プロジェクターを用いて制作。52Hzの孤独なクジラを探すコンセプト。Boidアルゴリズムで動植物を制御し、OpenCVで検知したマーカーの座標をOSC通信でUnityに渡すことでインタラクティブな体験を提供する。",
    imageUrls: ["whaleboid.jpeg"],
    //videoUrls: ["videourl"],
    githubUrl: "githuburl",
    tags: ["Unity", "OpenCV", "Boidアルゴリズム", "インタラクティブアート", "OSC通信"],
  },
  {
    id: "tamaasobi",
    title: "TAMAASOBI",
    year: 2023,
    shortDescription:
      "紙に描かれた図形を検出し、その形で当たり判定を行い、玉がぶつかる作品。",
    longDescription:
      "机の上に図形が書かれた紙を置くと、その形を検出して当たり判定を行い、上から降ってくる玉がぶつかる作品。UnityとOpenCV、Webカメラを使用して制作。検出した輪郭の頂点座標を基に、UnityのPolygonColliderをリアルタイムに変形させる。",
    imageUrls: ["tamaasobi.jpeg"],
    //videoUrls: ["videourl"],
    githubUrl: "githuburl",
    tags: ["Unity", "OpenCV", "コンピュータビジョン", "インタラクティブアート"],
  },
  {
    id: "table_of_cognition",
    title: "認知と想像の机",
    year: 2024,
    shortDescription:
      "レンズを通して、普段見えない机の上のものが見えるようになる作品。",
    longDescription:
      "机にレンズを置くと、何もなかったはずの机の上のものが見えるというコンセプトの作品。机の上にある物を赤外線カメラで検知し、Vision-basedなタッチスクリーンを作成。OpenFrameWorksとOpenCV、Unityを用いて制作し、検知したデータをOSC通信でUnityに送信して机に投影する映像を制御。",
    imageUrls: ["table.jpg"],
    //videoUrls: ["videourl"],
    githubUrl: "githuburl",
    tags: ["OpenFrameworks", "OpenCV", "Unity", "コンピュータビジョン", "プロジェクションマッピング", "OSC通信"],
  },
  {
    id: "sound_of_rain_and_heartbeat",
    title: "雨の音、鼓動の音",
    year: 2024,
    shortDescription: "心拍に合わせて仮想の雨が降り、瓶に入ると音が鳴る作品。",
    longDescription:
      "心拍の鼓動に合わせて仮想の雨が降り、瓶に入ると音が鳴るインタラクティブアート作品。OpenFrameWorksとArduinoを使用して、心拍センサーで検知したデータを基に、仮想世界と実世界の双方向インタラクションを実現。",
    imageUrls: ["rain.png"],
    //videoUrls: ["videourl"],
    githubUrl: "githuburl",
    tags: ["OpenFrameworks", "Arduino", "インタラクティブアート", "センサー技術"],
  },
];
