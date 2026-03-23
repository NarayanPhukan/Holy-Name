import React, { useState } from "react";

const events = [
  {
    image: "https://via.placeholder.com/150?text=Image+1",
    title: "Teachers Day Celebration",
  },
  {
    image: "https://via.placeholder.com/150?text=Image+2",
    title: "Lachit Diwas",
  },
  {
    image: "https://via.placeholder.com/150?text=Image+3",
    title: "Independence Day",
  },
  {
    image: "https://via.placeholder.com/150?text=Image+4",
    title: "Republic Day",
  },
  { image: "https://via.placeholder.com/150?text=Image+5", title: "Event 5" },
  { image: "https://via.placeholder.com/150?text=Image+6", title: "Event 6" },
  { image: "https://via.placeholder.com/150?text=Image+7", title: "Event 7" },
  { image: "https://via.placeholder.com/150?text=Image+8", title: "Event 8" },
];

const EventCard = ({ image, title, isEnlarged }) => {
  return (
    <div
      className={`border-2 border-blue-500 p-4 m-2 ${
        isEnlarged ? "w-full sm:w-72" : "w-full sm:w-64"
      } text-center rounded-lg shadow-md transition-transform duration-200 transform hover:scale-110`}
    >
      <div className="w-full h-40 bg-gray-300 flex items-center justify-center mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 transform hover:scale-105"
        />
      </div>
      <div className="text-lg font-bold text-gray-800">{title}</div>
    </div>
  );
};

const EventsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleEvents = showAll ? events : events.slice(0, 4);

  return (
    <div className="text-center p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <div className="text-4xl font-bold mb-8 text-gray-800">OUR EVENTS</div>
      <div className="flex flex-wrap justify-center gap-6">
        {visibleEvents.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            isEnlarged={!showAll && index < 4}
          />
        ))}
      </div>
      {!showAll && (
        <button
          className="mt-8 py-2 px-4 bg-white border-2 border-blue-500 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setShowAll(true)}
        >
          <b>View more</b>
        </button>
      )}
    </div>
  );
};

export default EventsSection;
