import React, { useState, useEffect, useMemo } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState({
    sportsWeek: 0,
    scienceExhibition: 0,
    morningAssembly: 0,
    competitions: 0,
    others1: 0,
    others2: 0,
  });

  const images = useMemo(() => ({
    sportsWeek: [
      "https://via.placeholder.com/300?text=Sports+1",
      "https://via.placeholder.com/300?text=Sports+2",
      "https://via.placeholder.com/300?text=Sports+3",
      "https://via.placeholder.com/300?text=Sports+4",
      "https://via.placeholder.com/300?text=Sports+5",
    ],
    scienceExhibition: [
      "https://via.placeholder.com/300?text=Science+1",
      "https://via.placeholder.com/300?text=Science+2",
      "https://via.placeholder.com/300?text=Science+3",
      "https://via.placeholder.com/300?text=Science+4",
      "https://via.placeholder.com/300?text=Science+5",
    ],
    morningAssembly: [
      "https://via.placeholder.com/300?text=Assembly+1",
      "https://via.placeholder.com/300?text=Assembly+2",
      "https://via.placeholder.com/300?text=Assembly+3",
      "https://via.placeholder.com/300?text=Assembly+4",
      "https://via.placeholder.com/300?text=Assembly+5",
    ],
    competitions: [
      "https://via.placeholder.com/300?text=Competition+1",
      "https://via.placeholder.com/300?text=Competition+2",
      "https://via.placeholder.com/300?text=Competition+3",
      "https://via.placeholder.com/300?text=Competition+4",
      "https://via.placeholder.com/300?text=Competition+5",
    ],
    others1: [
      "https://via.placeholder.com/300?text=Other+1",
      "https://via.placeholder.com/300?text=Other+2",
      "https://via.placeholder.com/300?text=Other+3",
      "https://via.placeholder.com/300?text=Other+4",
      "https://via.placeholder.com/300?text=Other+5",
    ],
    others2: [
      "https://via.placeholder.com/300?text=Other+6",
      "https://via.placeholder.com/300?text=Other+7",
      "https://via.placeholder.com/300?text=Other+8",
      "https://via.placeholder.com/300?text=Other+9",
      "https://via.placeholder.com/300?text=Other+10",
    ],
  }), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => ({
        sportsWeek: (prevIndex.sportsWeek + 1) % images.sportsWeek.length,
        scienceExhibition:
          (prevIndex.scienceExhibition + 1) % images.scienceExhibition.length,
        morningAssembly:
          (prevIndex.morningAssembly + 1) % images.morningAssembly.length,
        competitions: (prevIndex.competitions + 1) % images.competitions.length,
        others1: (prevIndex.others1 + 1) % images.others1.length,
        others2: (prevIndex.others2 + 1) % images.others2.length,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <section className="bg-gray-200 text-gray-800 p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center underline mb-10">
            Gallery Section
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sports Week */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold">Sports Week</h3>
              <div className="relative h-64 md:h-auto my-4">
                <img
                  src={images.sportsWeek[currentIndex.sportsWeek]}
                  alt={`Sports Week Image ${currentIndex.sportsWeek + 1}`}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            </div>

            {/* Science Exhibition */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold">Science Exhibition</h3>
              <div className="relative h-64 md:h-auto my-4">
                <img
                  src={images.scienceExhibition[currentIndex.scienceExhibition]}
                  alt={`Science Exhibition Image ${currentIndex.scienceExhibition + 1}`}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            </div>

            {/* Morning Assembly */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold">Morning Assembly</h3>
              <div className="relative h-64 md:h-auto my-4">
                <img
                  src={images.morningAssembly[currentIndex.morningAssembly]}
                  alt={`Morning Assembly Image ${currentIndex.morningAssembly + 1}`}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            </div>

            {/* Competitions */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold">Competitions</h3>
              <div className="relative h-64 md:h-auto my-4">
                <img
                  src={images.competitions[currentIndex.competitions]}
                  alt={`Competitions Image ${currentIndex.competitions + 1}`}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            </div>

            {/* Others */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold">Others</h3>
              <div className="relative h-64 md:h-auto my-4">
                <img
                  src={images.others1[currentIndex.others1]}
                  alt={`Others Image ${currentIndex.others1 + 1}`}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            </div>

            {/* Others */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold">Others</h3>
              <div className="relative h-64 md:h-auto my-4">
                <img
                  src={images.others2[currentIndex.others2]}
                  alt={`Others Image ${currentIndex.others2 + 1}`}
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
