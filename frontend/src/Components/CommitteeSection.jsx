import React, { useState, useEffect } from 'react';

const CommitteeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const committees = [
    { name: 'Committee of Discipline', image: 'https://via.placeholder.com/800x400?text=Committee+of+Discipline' },
    { name: 'Committee 2', image: 'https://via.placeholder.com/800x400?text=Committee+2' },
    { name: 'Committee 3', image: 'https://via.placeholder.com/800x400?text=Committee+3' },
    { name: 'Committee 4', image: 'https://via.placeholder.com/800x400?text=Committee+4' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % committees.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [committees.length]);

  return (
    <div className="committees mx-auto text-center w-full sm:w-3/4 lg:w-3/5 p-4">
      <h2 className="text-3xl font-bold mt-4">Committees</h2>
      <div className="slider relative overflow-hidden mt-6 border-2 border-blue-500">
        <div
          className="slides flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {committees.map((committee, index) => (
            <div key={index} className="slide min-w-full box-border p-4">
              <img src={committee.image} alt={committee.name} className="w-full h-auto rounded-lg" />
              <p className="mt-4 text-lg sm:text-xl font-semibold">{committee.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {committees.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeSection;
