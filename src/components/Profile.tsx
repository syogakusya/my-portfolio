import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ProfileProps {
  imageUrl: string;
  name: string;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({ imageUrl, name, bio }) => {
  return (
    <div className="flex flex-col md:flex-row items-center  shadow-lg border-2 border-black rounded-lg p-6 max-w-7xl mx-auto bg-white">
      <div className="mb-6 md:mb-0 md:mr-8">
        <Image
          src={imageUrl}
          alt={name}
          width={600}
          height={600}
          className="rounded-full object-cover object-center mb-4"
        />
        <div className="flex justify-center">
          <Link
            className="border border-gray-50 rounded-sm px-3 py-2 text-center shadow-lg font-bold"
            href="https://twitter.com/tsuchida_z"
          >
            X(Twitter)
          </Link>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">{name}</h2>
        <p className="text-gray-700 text-lg break-words max-w-7xl leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default Profile;
