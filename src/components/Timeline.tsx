import React from "react";
import { events } from "../data/histroy";
import { Event } from "../types";
import Image from "next/image";
import Link from "next/link";

const Timeline: React.FC = () => {
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      <div className="absolute z-0 w-1 h-full bg-gray-200 left-1/2 transform -translate-x-1/2"></div>
      {events.map((event: Event, index: number) => (
        <div key={index} className="relative z-10">
          <div
            className={`timeline-container flex items-center w-full mx-auto content-start ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  {event.title}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  {event.year}
                </p>
                {event.supplement && (
                  <p className="text-sm text-gray-600">{event.supplement}</p>
                )}
                {event.content && (
                  <p className="mt-2 text-sm text-gray-700">{event.content}</p>
                )}
                {event.icon && (
                  <div className="mt-4">
                    <Image
                      src={event.icon}
                      alt={event.title}
                      width={50}
                      height={50}
                    />
                  </div>
                )}
                {event.href && (
                  <Link
                    href={event.href}
                    className="mt-4 inline-block text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
