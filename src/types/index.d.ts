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
  | "チーム開発"
  | "AR"
  | "Vuforia"
  | "Blender"
  | "3Dモデリング"
  | "Boidアルゴリズム"
  | "OSC通信"
  | "プロジェクションマッピング"
  | "コンピュータビジョン"
  | "Arduino"
  | "センサー技術"
  | "サウンドアート";

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

export type Event = {
  side: "left" | "right";
  year: number | string;
  title: string;
  content?: string | React.ReactNode;
  icon?: string;
  supplement?: string;
  color?: string;
  workId?: string;
  href?: string;
};
