import React from "react";
import Image from "next/image";

interface ProfileProps {
  imageUrl: string;
  name: string;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({ imageUrl, name, bio }) => {
  return (
    <div className="w-full border-b-4 border-black p-24">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <div className="mb-6 md:mb-0 md:mr-8">
          <Image
            src={imageUrl}
            alt={name}
            width={1000}
            height={1000}
            className="rounded-full"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <p className="text-gray-600 text-lg">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
