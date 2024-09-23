import { skills } from "@/data";
import Image from "next/image";

const getColor = (level: number) => {
  if (level >= 4) return "bg-green-500";
  if (level >= 3) return "bg-yellow-500";
  if (level >= 2) return "bg-orange-500";
  return "bg-red-500";
};

const Skills = () => {
  return (
    <div className="w-full py-12 px-36">
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-row items-center p-2 ml-8">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={60}
              height={60}
              className="mr-4"
            />
            <div className="flex flex-col">
              <h3 className="">{skill.name}</h3>
              <div className="w-36 bg-gray-200 h-2 mt-1">
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
