import React from "react";
import { works } from "@/data/works";
import Link from "next/link";
import Image from "next/image";

const Works = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">作品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <div
            key={work.id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/works/${work.id}`}>
              {work.imageUrls && (
                <Image
                  src={`/${work.imageUrls[0]}`}
                  alt={work.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-2xl font-bold">{work.title}</h2>
                <p className="text-sm">{work.shortDescription}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
