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
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 p-4 md:p-8 overflow-y-auto border-b-4 md:border-b-0 md:border-r-4 border-black">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{work.title}</h1>
        <p className="text-base md:text-lg mb-2 md:mb-4">{work.longDescription}</p>
        <a href={work.githubUrl} className="text-blue-500 hover:underline text-sm md:text-base">
          GitHub
        </a>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8 overflow-y-auto">
        {work.imageUrls && (
          <Image
            src={`/${work.imageUrls[0]}`}
            alt={work.title}
            width={700}
            height={475}
            layout="responsive"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default WorkDetail;
