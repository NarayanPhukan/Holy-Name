const About = () => {
  const schoolPhotos = [
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+1",
      alt: "School Photo 1",
      description: "Photo 1 description about the history of the school.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+2",
      alt: "School Photo 2",
      description: "Photo 2 description about the history of the school.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+3",
      alt: "School Photo 3",
      description: "Photo 3 description about the history of the school.",
    },
  ];
  const headMistress = {
    src: "https://via.placeholder.com/600x400?text=Head+Mistress+Photo",
    alt: "Head Mistress Photo",
    message:
      "Dear Students, Parents, and Staff, Welcome to another exciting academic year at our school! Our commitment to providing a nurturing and inspiring environment remains unwavering. Together, we will continue to foster a love for learning, build strong character, and prepare our students to face the challenges of tomorrow with confidence and integrity.",
  };
  return (
    <div>
      <div className="p-10 text-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          About Us
        </h2>

        <div className="space-y-8 text-black">
          <div className="flex flex-col md:flex-row items-start md:space-x-6">
            <p className="flex-grow mb-4">
              It all begins with a small step. The Diocese of Dibrugarh had been
              on the hunt out for a plot of land from the year 1983 to establish
              a center of ours at Sivasagar. By the end of 1984, Rev. Fr. Alex
              Kapiarumala was entrusted with this task. Fr. Alex, aptly called
              the ‘Pioneer Palter’, visited various people and places in search
              of a suitable land in and around Sivasagar. Finally, Lt. Adv Mr.
              Anil Dutta directed Fr. Alex to Mr. Hemo Gogoi of Cherekapar, who,
              after a lot of negotiation, decided to part with a portion of his
              land. This plot is situated by the B.G. Road, some 3kms from
              Sivasagar Town.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-2xl">Fr. Alex Kapiarumala</p>
            <img
              src="/src/Pictures/about/Fr alex.jpg"
              alt="Fr Alex"
              className="w-44 h-40 rounded-lg"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:space-x-6">
            <img
              src="/src/Pictures/about/sch building foundation.png"
              alt="School Building Foundation"
              className="w-72 h-44 rounded-lg mx-auto my-auto"
            />
            <p className="flex-grow mt-4 md:mt-0">
              Most Rev. Thomas Menaparampil SDB, DD, the then Bishop of the
              Diocese of Dibrugarh, consented to go ahead with the purchase of
              the land in the name of the Catholic Church for the purpose of
              establishing an English Medium School and for other Church
              functions. The formal opening of the center was done in a public
              function held at the site on 19.01.1986, attended by a number of
              local dignitaries. The foundation stone of the permanent structure
              of the School was laid by most Rev. Thomas Menaparampil SDB, DD in
              October 1987, and the construction work of the ground floor was
              completed in March 1989.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:space-x-6">
            <p className="flex-grow mb-4">
              In July 1988, the sisters of the Holy Cross of Chavanod joined the
              school staff, with Sr. Ragasblvi Michael in 1988 and Sr. Carmeline
              (Superior) joining the Holy Name family, giving great impetus to
              the overall functioning of the school. The Holy Cross sisters
              started with a very humble setup, using a portion of the temporary
              school shed as their convent. Sr. Selvy and Sr. Elsy were the
              first batch of sisters to move into the newly built Convent
              building. The new permanent accommodation for sisters was
              completed and blessed by most Rev. Thomas Menaparampil SDB, DD,
              and inaugurated by Lt. Mr. Parag Chaliha, a prominent local
              citizen and Ex-MP from Sivasagar on 26.12.1990.
            </p>
            <img
              src="/src/Pictures/about/convent starting.png"
              alt="Convent Starting"
              className="w-72 h-44 rounded-lg mx-auto my-auto"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Fr. Joseph (Joy) Pallikunnel (1992-1999)</p>
            <img
              src="/src/Pictures/about/Fr Joy.png"
              alt="Fr Alex"
              className="w-44 h-40 rounded-lg"
            />
          </div>

          <p className="mt-1">
            After the transfer of Fr. Alex on 11.04.1992, Fr. Joseph (Joy)
            Pallikunnel was appointed as the next principal of the School. Fr.
            Joy took up the infrastructure work of the School at a marathon
            pace. Along with the construction work the School authorities tried
            to introduce some of the time tested local customs in the School
            like “Guru Sishya Parampara” blessing of the HSLC candidates in the
            Church and the students seeking blessings from their “Gurus".{" "}
            <p>
              {" "}
              On the Initiation day the KG-I students were encouraged to offer a
              “Dakshina” of Rs 1.25 in coins, and the Assamese traditional
              “Phulam Gamusas” to their “Gurus”. Short passages from The Bible,
              The Gita and The Quran were also read symbolizing the Secular
              spirit of our Nation.
            </p>{" "}
            <img
              src="/src/Pictures/about/fr Joy in KG initiation day (1).png"
              alt="Demo"
              className="w-72 h-44 rounded-lg p-1 mx-auto my-auto"
            />
            <p>
              {" "}
              By the year 1995, the School was blessed with all the necessary
              facilities in the campus such as a library, a medium size
              Playground, and Staff rooms, separate toilets for the boys and
              girls and also the School Boarding. The school organized a study
              tour for the students to the South for the first time in the year
              1997 under the guidance of Fr. Joy and the Sir Mr. Dilip Kr.
              Das.{" "}
            </p>
            {/* <img
                src="https://via.placeholder.com/150"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1 mx-auto my-auto"
              /> */}
          </p>

          <p className="mt-6">
            <b>Rev Fr. Jose Varghese (1999-2005)</b>
            <img
              src="https://via.placeholder.com/150"
              alt="Demo"
              className="w-44 h-40 rounded-lg p-1"
            />
          </p>
          <p className="mt-1">
            To inculcate in the students a spirit of team work, Co-operation and
            for the smooth running of the school the students were divided into
            four houses. As customary the official pledge was administered to
            the School Captian, House Captain and the Monitors. The School
            conducts sports week and various Co-curricular activities such as:
            Solo Group Dance, Singing Competition, Recitation, Extempore Speech,
            Debate and Science Exhibition and Parents Day are organized every
            alternate year.
          </p>
          <p className="mt-2">
            In the year 2001, Deepjyoti Saikia secured 17th rank in the State,
            the first of such honor for HOLY NAME SCHOOL. As usual in 2002, our
            students participated in various competitions in District, State and
            National Level. Out of 10 participants at the National Children’s
            Science Conference 3 were from our School. Students were awarded
            certificates for their excellent performance in the State Level
            Chemistry Olympiad conducted by Dept. of Chemistry, Guwahati
            University. Maitrayee Saikia (19th HSCL Rank holder, 2004) one among
            five members was selected from the District, who participated in the
            “All Assam Children’s Training Camp, 2002” organized by Srimanta
            Sankardev Kalashetra, Guwahati.
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/src/Pictures/about/IMG_20240731_000804.jpg"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
              <img
                src="/src/Pictures/about/IMG_20240731_000742.jpg"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
              <img
                src="/src/Pictures/about/IMG_20240731_000719.jpg"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
              <img
                src="/src/Pictures/about/IMG_20240731_000657.jpg"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
            </div>
          </p>

          <p className="mt-2">
            The construction of the second floor of Boys & Girls Boarding’s was
            completed by the end of 2003. Thereafter, Holy Name continued to
            extend a helping hand in the infrastructural work of the nearly
            opened St Mary’s School at Demow.
          </p>
          <p className="mt-6">
            <b>Rev Fr. Jose Mulloparampil (2005-2010) </b>
            <img
              src="/src/Pictures/about/IMG_20240731_000410.jpg"
              alt="Demo"
              className="w-44 h-40 rounded-lg p-1"
            />
          </p>
          <p className="mt-1">
            Fr. Jose Mulloparampil undertook the much needed work of
            constructing a School Auditorium Cum the Church, the ground floor
            being the Auditorium and the 1st floor the Church. The construction
            was completed in just two and half years. The auditorium became the
            3rd largest in Sivasagar
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/src/Pictures/about/auditorium-1.JPG"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
              <img
                src="/src/Pictures/about/IMG_20240731_000637.jpg"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
              <img
                src="/src/Pictures/about/20240519055618_IMG_6597-1.JPG"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
            </div>
          </p>
          <p className="mt-6">
            <b>Rev Fr. Vijay Minj (2010-2018)</b>
            <img
              src="/src/Pictures/about/IMG_20240731_000427.jpg"
              alt="Demo"
              className="w-44 h-40 rounded-lg p-1"
            />
          </p>
          <p className="mt-1">
            Fr Vijay completed the extension work of the boys boarding. He tried
            his level best to keep up the discipline and proper functioning of
            the school on a day to day basis. Fr Vijay Successfully conducted
            the Silver Jubilee Celebrations of the School in the year 2011. It
            was a week long program which was inaugurated by the then Governor
            of Assam J.B. Patnaik. The souvenir of the school was released and
            the Jubilee celebration was attended by most of our past students of
            the School. It was an overwhelming moment to see the lights of Holy
            Name School shining bright in various parts of the country and
            abroad
          </p>

          <div className="grid grid-cols-3 gap-2">
            <img
              src="/src/Pictures/about/IMG_20240731_000508.jpg"
              alt="Demo"
              className="w-72 h-44 rounded-lg p-1"
            />
            <img
              src="/src/Pictures/about/IMG_20240731_000532.jpg"
              alt="Demo"
              className="w-72 h-44 rounded-lg p-1"
            />
            <img
              src="/src/Pictures/about/IMG-20240730-WA0035.jpg"
              alt="Demo"
              className="w-72 h-44 rounded-lg p-1"
            />
            <img
              src="/src/Pictures/about/IMG_20240731_000603.jpg"
              alt="Demo"
              className="w-72 h-44 rounded-lg p-1"
            />
          </div>

          <p className="mt-6">
            <b>Rev Fr. Bartholomew Bhengra (2018-2018)</b>
            <img
              src="/src/Pictures/about/IMG_20240731_000445.jpg"
              alt="Demo"
              className="w-44 h-40 rounded-lg p-1"
            />
          </p>
          <p className="mt-1">
            Fr. Bartholomew’s tenure was mostly marked by the Pandemic
            (Covid-19), which gravely affected the smooth functioning of the
            School. During his time he constructed new toilets for both the Boys
            and Girls. He also improved the drinking water facility in the
            campus. Before his transfer in 2021, he successfully negotiated for
            a plot of land contiguous with the school campus and paid the first
            installment for the aforesaid land. This was then completed in 2023
            by the current Administrator of Holy Name Rev.Fr. Jose Varghese
            (former Principal).
          </p>
          <p className="mt-6">
            <b>Rev Fr. Hemanta Pegu (2021-20**)</b>
            <img
              src="/src/Pictures/picturesoftheweb/Fr Hemanta Pegu.JPG"
              alt="Demo"
              className="w-44 h-40 rounded-lg p-1"
            />
          </p>
          <p>
            Fr. Hemanta initiated the opening of the Senior Secondary section of
            the school with the Science & Arts Stream in the already existing
            boys boarding building. The Computer Laboratory in the Senior
            Secondary section was given a face-lift with additional computers.
            In the ground floor of the same building well-equipped laboratories
            of Physics, Chemistry and Biology are set up for the benefit of
            Senior Secondary students.{" "}
            <p>
              {" "}
              Fr. Hemanta has also introduced NCC & Scouts and Guides for the
              first time in Holy Name School and still
              counting…………………………………………..
            </p>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/src/Pictures/about/Chemistry Lab (1).jpg"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
              <img
                src="/src/Pictures/about/bio lab (1).jpg"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
              <img
                src="/src/Pictures/about/computer lab HS building (1).jpg"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
              <img
                src="/src/Pictures/about/school building (1).JPG"
                alt="Demo"
                className="w-72 h-44 rounded-lg p-1"
              />
            </div>
          </p>

          <p className="mt-5 text-blue-500">
            <i>
              “We are confident that with all the necessary facilities placed at
              the disposal of the students will enable them in all round
              development of Mind, Body and Spirit. Where there is a will there
              is a Way. We exert the students to develop the will to learn and
              grow using all the facilities provided to them. ‘Education has
              limits but learning not!’, be a good learner life long.”{" "}
            </i>
          </p>
          <div style={{ textAlign: "right" }}>
            <p className="mt-10">
              <b>Written By:- Mrs Runa Sharma,(English Faculty B.ed,LLB)</b>
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p className="mt-1">
              <b className="mt1">Edited by: Rev Fr Jose Varghese</b>
            </p>
          </div>
        </div>
      </div>

      <section className="p-1 ml-3 mr-3 bg-gray-100 text-lg w-full">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8 lg:p-12">
            <h1 className="text-4xl font-bold underline mb-12 text-center"></h1>

            <div className="flex flex-col space-y-8">
              {/* <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">SCHOOL</h2>
            <p className="text-gray-700 mb-4">
              Below are 1-3 photos with short descriptions about the history of
              the school.
            </p>
            {schoolPhotos.map((photo, index) => (
              <div key={index} className="mb-6">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-half rounded-lg mb-2 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-700">{photo.description}</p>
              </div>
            ))}
          </div> */}

              <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
                <h2 className="text-3xl font-bold mb-4">Head mistress</h2>
                <div className="mb-6">
                  <img
                    src={headMistress.src}
                    alt={headMistress.alt}
                    className="w-half rounded-lg mb-2 hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-gray-700">
                    <p className="block">Dear Students, Parents, and Staff,</p>

                    <p className="mt-4">
                      Welcome to another exciting academic year at our school!
                      Our commitment to providing a nurturing and inspiring
                      environment remains unwavering. Together, we will continue
                      to foster a love for learning, build strong character, and
                      prepare our students to face the challenges of tomorrow
                      with confidence and integrity.
                    </p>

                    <p className="mt-4">
                      Thank you for being a vital part of our vibrant school
                      community. Let’s make this year a journey of growth,
                      achievement, and joy.
                    </p>

                    <p className="mt-4">
                      Warm regards, [Sister Roselina Toppo]
                    </p>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
                <h2 className="text-3xl font-bold mb-4">Aims & Objectives</h2>
                <p className="text-gray-700">
                  <p>
                    <p className="text-2xl block mt-4">Aim:</p>To provide a
                    nurturing and inclusive environment that fosters the
                    intellectual, social, emotional, and physical development of
                    each student, empowering them to become responsible,
                    compassionate, and active citizens in an ever-changing
                    global society.
                  </p>

                  <p>
                    <p className="text-2xl block mt-4">Objectives</p>Academic
                    Excellence: To offer a rigorous and dynamic curriculum that
                    challenges students to achieve their highest potential and
                    promotes critical thinking, creativity, and lifelong
                    learning.
                    <p className="mt-4">
                      <p className="text-2xl block mt-4">
                        Character Development:
                      </p>
                      To instill values such as integrity, respect,
                      responsibility, and empathy, encouraging students to
                      develop strong moral character and positive behavior.
                    </p>
                    <p>
                      <p className="text-2xl block mt-4">Holistic Education:</p>
                      To support the overall development of students by offering
                      a wide range of extracurricular activities, including
                      sports, arts, and community service, that complement
                      academic learning and promote physical health, creativity,
                      and social responsibility.
                    </p>
                    {/*  */}
                    <p>
                      <p className="text-2xl block mt-4">Holistic Education:</p>
                      To support the overall development of students by offering
                      a wide range of extracurricular activities, including
                      sports, arts, and community service, that complement
                      academic learning and promote physical health, creativity,
                      and social responsibility.
                    </p>
                    <p>
                      <p className="text-2xl block mt-4">
                        Inclusivity and Diversity:
                      </p>
                      <p>
                        To create an inclusive environment where all students,
                        regardless of background, culture, or ability, feel
                        valued and have equal opportunities to succeed.
                      </p>
                    </p>
                    <p>
                      <p className="text-2xl block mt-4">
                        Technology Integration:
                      </p>
                      <p>
                        To integrate technology into the learning process to
                        enhance educational outcomes and prepare students for a
                        technology-driven world.
                      </p>
                    </p>
                    <p>
                      <p className="text-2xl block mt-4">
                        Community Engagement:
                      </p>
                      <p>
                        To build strong partnerships with parents, local
                        organizations, and the broader community to support the
                        educational and social development of students.
                      </p>
                    </p>
                    <p>
                      <p className="text-2xl block mt-4">Global Awareness:</p>
                      <p>
                        To foster a global perspective by encouraging students
                        to understand and appreciate different cultures, and to
                        develop a sense of responsibility towards global issues
                        and sustainable development.
                      </p>
                    </p>
                    <p>
                      <p className="text-2xl block mt-4">
                        Continuous Improvement:
                      </p>
                      <p>
                        To maintain a commitment to continuous improvement by
                        regularly assessing and refining teaching methods,
                        curriculum, and school policies based on feedback
                        and best practices.
                      </p>
                    </p>
                  </p>
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="">Vision statement</span>
                </h2>
                <p className="text-gray-700">
                  Our vision is to be a leading educational institution where
                  every student is empowered to reach their full potential,
                  equipped with the knowledge, skills, and values necessary to
                  thrive in a rapidly changing world. We aspire to create a
                  nurturing and inclusive environment that fosters a lifelong
                  love of learning, cultivates responsible global citizens, and
                  prepares our students to make meaningful
                  contributions to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
