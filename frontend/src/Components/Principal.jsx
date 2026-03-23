import React from "react";

function Principal() {
  return (
    <div className="min-h-screen bg-surface py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-surface-container-low shadow-2xl rounded-3xl overflow-hidden mt-8 p-8 md:p-12 border border-outline-variant/30 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        
        <h1 className="text-center text-4xl md:text-5xl font-black text-primary mb-6 academic-serif relative z-10 pt-4">
          From the Principal's Desk
        </h1>
        
        <div className="flex justify-center mb-10">
          <div className="w-24 h-1 bg-secondary rounded-full"></div>
        </div>

        <p className="italic text-secondary text-center text-xl md:text-2xl border-l-4 border-primary pl-6 my-10 max-w-2xl mx-auto font-medium">
          "Flowers leave part of their fragrance in the hand that bestows them"
        </p>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-10 group">
            <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <img
              src="/src/Pictures/picturesoftheweb/Fr Hemanta Pegu.JPG"
              alt="Principal"
              className="relative w-80 h-auto rounded-3xl shadow-xl transition-transform duration-300 group-hover:-translate-y-2 border-4 border-white"
            />
          </div>

          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg text-justify md:text-left font-medium">
            <p>
              Holy Name HS School, Cherekapar Sivasagar, has been renowned not
              only for its academic excellence but also for its focus on moral
              and character development, a concept we refer to as <strong>"holistic
              formation"</strong>. Our mission is to provide education that fosters
              intellectual growth, discipline, moral integrity, and social
              responsibility in our students. Education is a lifelong journey,
              and we strive to lay a strong foundation for our students from
              early years through secondary levels.
            </p>
            <p>
              Our curriculum adheres to the academic framework set by SEBA for
              high school and AHSEC for senior secondary education. We aim to
              cultivate an environment of excellence and dedication, believing
              in every student's potential to grow and excel. We are committed
              to helping our students contribute positively and productively to
              society.
            </p>
            <p>
              With the support of the management, staff, students, and our
              dedicated parents, we will continue to thrive and reach new
              heights. Parents play a crucial role in shaping our children's
              future, and their support is invaluable. I am deeply grateful for
              their trust and partnership.
            </p>
            <p>
              Education is not merely about preparing for future jobs but about
              instilling moral and ethical values that guide one’s life. As
              Mahatma Gandhi wisely said, <em>"The best way to find yourself is to
              lose yourself in the service of others."</em> I am honored to lead this
              esteemed institution with sincerity and dedication, and I promise
              to work diligently to elevate our school to new levels of
              excellence.
            </p>
            <div className="p-6 bg-primary-container/30 rounded-2xl border border-primary/10 mt-8">
              <p className="text-center italic font-bold text-primary text-xl">
                Aristotle once said, "Educating the mind without educating the
                heart is no education at all."
              </p>
            </div>
          </div>

          <footer className="mt-16 flex flex-col items-center text-on-surface-variant">
            <img
              src="https://via.placeholder.com/150x50" // Placeholder for signature
              className="h-16 mb-4 opacity-70 mix-blend-multiply"
              alt="Signature"
            />
            <div className="w-16 h-px bg-outline-variant mb-4"></div>
            <span className="text-2xl font-black text-primary academic-serif">Fr. Hemanta Pegu</span>
            <span className="text-secondary tracking-widest uppercase text-sm font-bold mt-1">Principal</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Principal;
