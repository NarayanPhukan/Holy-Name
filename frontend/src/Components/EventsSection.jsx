import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCalendarAlt } from "react-icons/fa";
import { SiteDataContext } from "../context/SiteDataContext";

const EventsSection = () => {
  const { events } = useContext(SiteDataContext);
  const [showAll, setShowAll] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const visibleEvents = showAll ? events : events.slice(0, 4);

  return (
    <div className="text-center p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-lg border border-gray-200">
      <div className="text-4xl font-bold mb-8 text-gray-800 academic-serif">OUR EVENTS</div>
      <div className="flex flex-wrap justify-center gap-6">
        {visibleEvents.map((event, index) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-64 bg-white p-4 rounded-2xl shadow-md cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="w-full h-40 bg-gray-200 rounded-xl overflow-hidden mb-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-lg font-bold text-gray-800 line-clamp-2">{event.title}</div>
            <div className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-blue-500" />
              {event.date}
            </div>
          </motion.div>
        ))}
      </div>
      
      {!showAll && events.length > 4 && (
        <button
          className="mt-8 py-3 px-8 bg-white border-2 border-blue-500 text-blue-600 font-bold rounded-xl shadow-md hover:bg-blue-50 transition-all"
          onClick={() => setShowAll(true)}
        >
          View More Events
        </button>
      )}

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <FaTimes />
              </button>
              
              <div className="h-64 sm:h-80 w-full overflow-hidden">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    Official Event
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                    <FaCalendarAlt /> {selectedEvent.date}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 academic-serif">
                  {selectedEvent.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedEvent.description}
                </p>
                
                <div className="flex justify-end pt-4 border-t">
                  <button 
                    onClick={() => setSelectedEvent(null)}
                    className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsSection;
