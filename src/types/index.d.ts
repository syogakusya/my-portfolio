export type Tag =
  | "Next.js"
  | "React"
  | "TypeScript"
  | "JavaScript"
  | "TailwindCSS"
  | "HTML"
  | "CSS"
  | "Git"
  | "GitHub"
  | "C"
  | "C++"
  | "Processing"
  | "クリエイティブコーディング"
  | "インタラクティブアート"
  | "ゲーム"
  | "画像処理"
  | "OpenCV"
  | "Unity"
  | "Shader"
  | "OpenGL"
  | "C#"
  | "Kotlin"
  | "Web"
  | "インターン"
  | "p5.js"
  | "Python"
  | "個人開発"
  | "Java"
  | "openFrameworks"
  | "ハッカソン"
  | "個人製作"
  | "チーム開発";

export type Work = {
  id: string;
  title: string;
  year: number | string;
  shortDescription: string | ReactElement;
  longDescription: string | ReactElement;
  imageUrls?: string[];
  videoUrls?: string[];
  githubUrl?: string;
  tags?: string[];
};

export type Skill = {
  id: number;
  level: number;
  name: string;
  imageUrl: string;
};
