import { works } from "@/data/works";
import Image from "next/image";

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}

const WorkDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const work = works.find((work) => work.id === id);

  if (!work) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-8 overflow-y-auto border-r-4 border-black">
        <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
        <p className="text-lg mb-4">{work.longDescription}</p>
        <a href={work.githubUrl} className="text-blue-500 hover:underline">
          GitHub
        </a>
      </div>
      <div className="w-1/2 p-8 overflow-y-auto">
        {work.imageUrls && (
          <Image
            src={`/${work.imageUrls[0]}`}
            alt={work.title}
            layout="responsive"
            width={700}
            height={475}
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default WorkDetail;
