import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    id: 1,
    title: "Annual Science Exhibition 2026",
    date: "March 15, 2026",
    category: "Academic",
    image: "/Pictures/1.JPG",
    description: "Students showcased groundbreaking projects in robotics, green energy, and biotechnology.",
  },
  {
    id: 2,
    title: "State Level Sports Championship",
    date: "February 28, 2026",
    category: "Sports",
    image: "/Pictures/2.JPG",
    description: "Our school team won the overall championship trophy with 15 gold medals.",
  },
  {
    id: 3,
    title: "Cultural Fest 'Symphony'",
    date: "January 20, 2026",
    category: "Cultural",
    image: "/Pictures/3.JPG",
    description: "A mesmerizing evening of classical dance, music, and theatrical performances.",
  }
];

export default function HighlightsSection() {
  return (
    <section className="py-2">
      <div className="flex justify-between items-end mb-10 px-4 md:px-0">
        <div>
          <h2 className="text-primary font-black text-xl tracking-widest uppercase mb-2">Spotlight</h2>
          <h3 className="academic-serif text-3xl md:text-5xl font-black text-on-surface">
            School Highlights
          </h3>
        </div>
        <button className="hidden md:flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors">
          View All <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-canva-purple uppercase tracking-wider">
                {item.category}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium mb-3">
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                {item.date}
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-3 group-hover:text-canva-purple transition-colors">
                {item.title}
              </h4>
              <p className="text-on-surface-variant line-clamp-3 mb-6 flex-1">
                {item.description}
              </p>
              <button className="text-canva-cyan font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-fit">
                Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="md:hidden mt-8 w-full py-4 rounded-xl bg-surface-container border border-outline-variant text-primary font-bold flex justify-center items-center gap-2">
        View All Highlights <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </section>
  );
}
