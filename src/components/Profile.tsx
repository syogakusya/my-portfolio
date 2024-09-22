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
    <div className="w-full border-b-4 border-black p-12 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto">
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
          <p className="text-gray-700 text-lg">{bio}</p>
        </div>
      </div>
      <Link
        href="/about"
        className="items-center mt-8 border-2 border-gray-600 rounded-lg px-6 py-4 text-white hover:opacity-90 transition-opacity duration-300 bg-gradient-to-r from-gray-700 to-gray-500"
      >
        View Details
      </Link>
    </div>
  );
};

export default Profile;
