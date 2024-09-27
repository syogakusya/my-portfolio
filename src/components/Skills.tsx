import { skills } from "@/data";
import Image from "next/image";

const getColor = (level: number) => {
  if (level >= 5) return "bg-blue-500";
  if (level >= 4) return "bg-green-500";
  if (level >= 3) return "bg-yellow-500";
  if (level >= 2) return "bg-orange-500";
  if (level >= 1) return "bg-red-500";
  return "bg-red-500";
};

const Skills = () => {
  return (
    <div className="w-full py-12 px-12 md:px-36">
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex sm:flex-row flex-col items-start p-2 sm:ml-8 ml-0 sm:m-0 m-4"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={60}
              height={60}
              className="mr-4 block"
            ></Image>
            <div className="flex flex-col w-full">
              <h3 className="">{skill.name}</h3>
              <div className="w-5/6 bg-gray-200 h-2 mt-1">
                <div
                  className={`h-2 ${getColor(skill.level)}`}
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
